/*
 * @Date: 2023-12-29 23:53:27
 * @Description: Modify here please
 */
import { UINAME, PKG_PREFIX } from "../core";

import type { Plugin } from "rollup";

export function ThemeAlias(): Plugin {
  const themeChalk = "theme-chalk";
  const sourceThemeChalk = `${PKG_PREFIX}/${themeChalk}`;
  const bundleThemeChalk = `${UINAME}/${themeChalk}`;

  return {
    name: "theme-alias-plugin",
    resolveId(id) {
      if (!id.startsWith(sourceThemeChalk)) return;

      const replaceFn = (id as any).replaceAll || id.replace;

      return {
        id: replaceFn(sourceThemeChalk, bundleThemeChalk),
        // cover
        external: "absolute"
      };
    }
  };
}
