/*
 * @Date: 2023-12-29 21:07:41
 * @Description: Modify here please
 */
export * from "./pkg";
export * from "./build-info";

// 解决文件在es模块中运行时  报错
export const isModule = typeof module !== "undefined" && module?.constructor?.name === "Module";
