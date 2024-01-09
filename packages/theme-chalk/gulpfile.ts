/* eslint-disable no-console */
/*
 * @Date: 2024-01-03 17:10:36
 * @Description: Modify here please
 */
import path from "path";
import chalk from "chalk";
import { dest, parallel, series, src } from "gulp";
import glob, { async } from "fast-glob";
import { copy } from "fs-extra";
import { readdirSync, statSync, unlinkSync, copyFileSync, writeFileSync } from "fs";
import gulpSass from "gulp-sass";
import { copyFile, mkdir } from "fs/promises";
import dartSass from "sass";
import autoprefixer from "gulp-autoprefixer";
import cleanCSS from "gulp-clean-css";
import consola from "consola";
import { epOutput, pkgsRoot, buildOutput } from "../../build/core/constants";
import { withTaskName, run, runTask } from "../../build/core";
import { buildConfig, Module } from "../../build/utils";

import type { TaskFunction } from "gulp";

// 生成的临时样式文件目录
const distFolder = path.resolve(__dirname, "dist");
const distBundle = path.resolve(epOutput, "theme-chalk");
// 组件的样式文件路径
const componentScssFiles = [];

// Exclude files
async function excludeFiles() {
  const walkDir = async (dir: string) => {
    // Return the file name or file object in the directory
    readdirSync(dir).forEach((file) => {
      const filePath = path.join(dir, file);
      // Is it a folder
      if (statSync(filePath).isDirectory()) {
        walkDir(filePath);
      } else {
        const newPath = filePath.replace(/\\/g, "/");

        let isDeleted = false;
        // 排除
        isDeleted = ["node_modules"].some((exclude) => newPath.includes(exclude));

        if (newPath.includes("/_styles/")) {
          // 排除
          const regex = /.*_styles\/(?!common\/|core\/).*\.css$/;
          // Not handled  _styles/**/*.css

          // Only handled _styles/*.css
          isDeleted = !newPath.match(regex);
          //  console.log(2, isDeleted);
        }

        if (isDeleted) {
          unlinkSync(filePath);
          console.log(`Deleted file ${filePath}`);
        }
      }
    });
  };
  await walkDir(distFolder);
}

// Copy the packaged CSS file to the file package under the official package
export const copyCssDir: TaskFunction = async (cb) => {
  const copyTypes = (module: Module) =>
    withTaskName(`copyTypes:${module}`, () => {
      const targetPath = path.resolve(buildConfig[module].output.path, "components");
      // 递归复制
      return copy(distFolder, targetPath, { recursive: true });
    });
  return parallel(copyTypes("esm"), copyTypes("cjs"))(cb);
};

/** create theme-chalk */
function buildThemeChalk() {
  const sass = gulpSass(dartSass);
  return (
    src(["**/*.scss", "!node_modules/**/*"], {
      cwd: path.resolve(pkgsRoot, "components")
    })
      .on("data", function (file) {
        // console.log("Processing file:", file.path);
        componentScssFiles.push(file.path);
      })
      // not use sass.sync().on('error', sass.logError) to throw exception
      .pipe(sass.sync())

      // https://github.com/sindresorhus/gulp-autoprefixer
      .pipe(autoprefixer({ cascade: false }))
      // https://www.npmjs.com/package/gulp-clean-css
      // .pipe(
      //   cleanCSS({}, (details) => {
      //     consola.success(
      //       `${chalk.cyan(details.name)}: ${chalk.yellow(details.stats.originalSize / 1000)} KB -> ${chalk.green(details.stats.minifiedSize / 1000)} KB`
      //     );
      //   })
      // )
      // output
      .pipe(dest(distFolder))
  );
}

/**
 * copy from dist
 */
function copyThemeChalkBundle() {
  return src(`${distFolder}/**`).pipe(dest(distBundle));
}

/**
 * copy source file to packages
 */

function copyThemeChalkSource() {
  return src(path.resolve(__dirname, "src/**")).pipe(dest(path.resolve(distBundle, "src")));
}

const copyFullStyle = async () => {
  await mkdir(path.resolve(epOutput, "dist"), { recursive: true });
  await copyFile(path.resolve(epOutput, "theme-chalk/index.css"), path.resolve(epOutput, "dist/index.css"));
};

// Copy the original scss file to temporary dist
const copyOriginScssFiles = async () => {
  const copys = (sourcePath, fileName) => {
    try {
      const newPath = path.resolve(distFolder, fileName);
      copyFileSync(sourcePath, newPath);
      consola.success(`${sourcePath} was copied to ${newPath}`);
    } catch (err) {
      console.error(err);
    }
  };
  componentScssFiles.forEach((item) => {
    const paths = item.split("\\components\\");
    copys(item, paths[1]);
  });
};

// Generate overall style file   scss（ 非常重要的）
const createTotalScssTheme = async () => {
  // 查询必须是组件的scss文件
  const components = componentScssFiles.filter((item) => {
    return item.indexOf("\\_internal\\") == -1 && item.includes("index.scss");
  });
  // console.log(components);

  let scssTotalCode = "";
  components.forEach((item) => {
    const paths = item.split("\\components\\");
    const currentDir = path.resolve(epOutput, "dist");
    const targetFilePath = path.join(buildConfig.cjs.output.path, "components", paths[1]);

    // 计算相对路径
    const relativePath = path.relative(currentDir, targetFilePath);
    // console.log(currentDir, targetFilePath, relativePath);

    const newPath = relativePath.replace(/\\/g, "/");

    scssTotalCode = scssTotalCode + `@use "${newPath}" as *;\n`;
  });

  const scssTotalPath = path.resolve(epOutput, "dist", "index.scss");

  try {
    writeFileSync(scssTotalPath, scssTotalCode);
    console.log("The file has been saved!");
  } catch (err) {
    console.error("Error:", err);
  }
};
// Generate overall style file  css
const createTotalCssTheme = async () => {
  const currentDir = path.resolve(epOutput, "dist", "index.scss");
  const sass = gulpSass(dartSass);
  return (
    src(currentDir)
      .pipe(sass.sync())
      // https://github.com/sindresorhus/gulp-autoprefixer
      .pipe(autoprefixer({ cascade: false }))
      // https://www.npmjs.com/package/gulp-clean-css
      .pipe(cleanCSS({}))
      // output
      .pipe(dest(path.resolve(epOutput, "dist")))
  );
};

// !!! You should pay attention to this order
const build = series(
  withTaskName("clean", () => run("pnpm run -C packages/theme-chalk clean")),

  withTaskName("createOutput", () => mkdir(path.resolve(epOutput, "dist"), { recursive: true })),

  parallel(withTaskName("buildThemeChalk", buildThemeChalk)),
  parallel(withTaskName("excludeFiles", excludeFiles)),
  parallel(withTaskName("copyOriginScssFiles", copyOriginScssFiles)),
  // Copy temporary style package to formal package
  parallel(withTaskName("copyCssDir", copyCssDir)),
  // Generate overall style file
  parallel(withTaskName("createTotalScssTheme", createTotalScssTheme))
  // parallel(withTaskName("createTotalCssTheme", createTotalCssTheme))
);

export default build;
