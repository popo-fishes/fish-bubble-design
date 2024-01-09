/*
 * @Date: 2023-12-29 11:53:20
 * @Description: Modify here please
 */
import path from "path";
import { copyFile, mkdir } from "fs/promises";
import { copy } from "fs-extra";
import { parallel, series } from "gulp";
import { withTaskName, run, runTask } from "./core";
import { buildOutput, epOutput, libraryPackage, projRoot } from "./core/constants";

import { buildConfig } from "./utils";
import type { TaskFunction } from "gulp";
import type { Module } from "./utils";

export * from "./tasks";

export const copyFiles = () =>
  Promise.all([
    copyFile(libraryPackage, path.join(epOutput, "package.json")),
    copyFile(path.resolve(projRoot, "README.md"), path.resolve(epOutput, "README.md")),
    copyFile(path.resolve(projRoot, "global.d.ts"), path.resolve(epOutput, "global.d.ts"))
  ]);

export const copyTypesDefinitions: TaskFunction = async (cb) => {
  const typesPath = path.resolve(buildOutput, "types");
  const copyTypes = (module: Module) =>
    withTaskName(`copyTypes:${module}`, () => {
      const targetPath = buildConfig[module].output.path;
      // 递归复制
      return copy(typesPath, targetPath, { recursive: true });
    });
  return parallel(copyTypes("esm"), copyTypes("cjs"))(cb);
};

export default series(
  withTaskName("clean", () => run("pnpm run clean")),
  withTaskName("createOutput", () => mkdir(epOutput, { recursive: true })),

  parallel(
    runTask("buildModules")
    // runTask("buildFullBundle")
    // withTaskName("buildThemeChalk", () => run("pnpm run -C packages/theme-chalk build"))
  )
  // parallel(withTaskName("copyTypesDefinitions", copyTypesDefinitions)),
  // parallel(withTaskName("createGlobalDts", () => run("pnpm run create-global-dts"))),
  // parallel(withTaskName("copyFiles", copyFiles))
);
