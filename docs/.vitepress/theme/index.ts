/*
 * @Date: 2024-01-16 19:00:26
 * @Description: Modify here please
 */
import DefaultTheme from "vitepress/theme";

import { VPDemo } from "../vitepress";

import FishBubbleDesign from "fish-bubble-design";
import "../../index.scss";

export default {
  ...DefaultTheme,
  enhanceApp(ctx) {
    DefaultTheme.enhanceApp(ctx);

    ctx.app.use(FishBubbleDesign);

    ctx.app.component("Demo", VPDemo);
  }
};
