/*
 * @Date: 2023-12-20 12:27:53
 * @Description: Modify here please
 */
import { isClient } from "./is";

export * from "./is";
export * from "./types";

export const defaultWindow = /* #__PURE__ */ isClient ? window : undefined;
export const defaultDocument = /* #__PURE__ */ isClient ? window.document : undefined;
