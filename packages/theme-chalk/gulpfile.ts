/*
 * @Date: 2024-01-03 17:10:36
 * @Description: Modify here please
 */
import path from "path";
import chalk from "chalk";
import { dest, parallel, series, src } from "gulp";
import gulpSass from "gulp-sass";
import { copyFile, mkdir } from "fs/promises";
import dartSass from "sass";
import autoprefixer from "gulp-autoprefixer";
import cleanCSS from "gulp-clean-css";
import consola from "consola";
import { epOutput } from "../../build/core/constants";

const distFolder = path.resolve(__dirname, "dist");
const distBundle = path.resolve(epOutput, "theme-chalk");

/** create theme-chalk */
function buildThemeChalk() {
  const sass = gulpSass(dartSass);
  return (
    src(path.resolve(__dirname, "src/*.scss"))
      // not use sass.sync().on('error', sass.logError) to throw exception
      .pipe(sass.sync())
      // https://github.com/sindresorhus/gulp-autoprefixer
      .pipe(autoprefixer({ cascade: false }))
      // https://www.npmjs.com/package/gulp-clean-css
      .pipe(
        cleanCSS({}, (details) => {
          consola.success(
            `${chalk.cyan(details.name)}: ${chalk.yellow(details.stats.originalSize / 1000)} KB -> ${chalk.green(details.stats.minifiedSize / 1000)} KB`
          );
        })
      )
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

const build = parallel(copyThemeChalkSource, series(buildThemeChalk, copyThemeChalkBundle, copyFullStyle));

export default build;
