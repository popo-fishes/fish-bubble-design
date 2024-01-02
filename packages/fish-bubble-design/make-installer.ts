/*
 * @Date: 2023-12-29 22:40:02
 * @Description: Modify here please
 */
import type { App, Plugin } from "vue";
import { version } from "./version";

const INSTALLED_KEY = Symbol("INSTALLED_KEY");

export const makeInstaller = (components: Plugin[] = []) => {
  const install = (app: App) => {
    if (app[INSTALLED_KEY]) return;

    app[INSTALLED_KEY] = true;
    // 注册插件
    components.forEach((c) => app.use(c));
  };

  return {
    version,
    install
  };
};
