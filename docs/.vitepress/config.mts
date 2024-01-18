/*
 * @Date: 2024-01-16 19:00:26
 * @Description: Modify here please
 */
/*
 * @Date: 2024-01-16 19:00:26
 * @Description: Modify here please
 */
import { defineConfig } from "vitepress";
import { head } from "./config/head";
import { mdPlugin } from "./config/plugins";
export default defineConfig({
  title: "Fish Bubble",
  description: "A desktop component library based on Vue 3.0 prepared for developers",
  lang: "cn-ZH",
  lastUpdated: false,
  head,
  themeConfig: {
    logo: "/logo.png",
    siteTitle: "",
    outline: 2,
    socialLinks: [{ icon: "github", link: "https://github.com/u-fish-bubble/fish-bubble-design" }],
    nav: [
      {
        text: "指南",
        link: "/guide/"
      },
      { text: "组件", link: "/components/button" }
    ],
    sidebar: {
      "/components": [
        {
          text: "Basic 基础组件",
          items: [
            { text: "Button 按钮", link: "/components/button" },
            { text: "Icon 图标", link: "/components/icon" }
          ]
        },
        {
          text: "复杂组件",
          items: [
            {
              text: "下拉选择表格组件",
              link: "/components/TSelectTable/base.md"
            },
            {
              text: "TAdaptivePage组件",
              link: "/components/TAdaptivePage/base.md"
            },
            {
              text: "条件查询组件",
              link: "/components/TQueryCondition/base.md"
            },
            { text: "表单组件", link: "/components/TForm/base.md" },
            { text: "模块表单组件", link: "/components/TModuleForm/base.md" },
            { text: "table组件", link: "/components/TTable/base.md" }
          ]
        }
      ]
    }
  },
  markdown: {
    headers: {
      level: [0, 0]
    },
    // light: #f9fafb, dark: --vp-code-block-bg
    theme: { light: "github-light", dark: "github-dark" },
    config: (md) => mdPlugin(md)
  }
});
