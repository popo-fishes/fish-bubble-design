/*
 * @Date: 2023-12-29 22:29:58
 * @Description: Modify here please
 */

import type { App } from "vue";
import * as components from "./components";
import { version } from "./version";
export * from "./components";

const INSTALLED_KEY = Symbol("INSTALLED_KEY");

console.log(components);

export const install = function (app: App) {
  if (app[INSTALLED_KEY]) return;

  app[INSTALLED_KEY] = true;

  // 注册插件
  Object.keys(components).forEach((key) => {
    const component = components[key];
    // 注册插件
    if (component.install) {
      app.use(component);
    }
  });

  app.config.globalProperties.$message = components.FbMessage;

  return app;
};

export { version };

export default {
  version,
  install
};
