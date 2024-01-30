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
    logo: "/fb-logo.png",
    siteTitle: "",
    outline: {
      level: [2, 3],
      label: "页面导航"
    },
    socialLinks: [{ icon: "github", link: "https://github.com/u-fish-bubble/fish-bubble-design" }],
    nav: [
      {
        text: "指南",
        link: "/guide/installation"
      },
      { text: "组件", link: "/components/button" },
      { text: "功能", link: "/components/functions" }
    ],
    sidebar: {
      "/components": [
        {
          text: "基础组件",
          items: [
            { text: "Button 按钮", link: "/components/button" },
            { text: "Icon 图标", link: "/components/icon" }
          ]
        },
        {
          text: "数据录入",
          items: [
            { text: "Select 选择器", link: "/components/select" },
            { text: "Input 输入框", link: "/components/input" },
            { text: "Checkbox 多选框", link: "/components/input2" },
            { text: "Radio 单选框", link: "/components/input3" },
            { text: "Switch 开关", link: "/components/input4" },
            { text: "ImgCaptcha 图文验证码", link: "2ss22" },
            { text: "DatePicker 日期选择框", link: "3222ss33" },
            { text: "Form 表单", link: "/components/input333" }
          ]
        },
        {
          text: "反馈",
          items: [
            { text: "Dialog 对话框", link: "/components/select5" },
            { text: "message 全局提示", link: "/components/input6" },
            { text: "Prompt 确认框", link: "/components/input7" },
            { text: "Radio 单选框", link: "/components/input8" },
            { text: "Switch 开关", link: "/components/input9" },
            { text: "DatePicker 日期选择框", link: "1aa00" }
          ]
        }
      ],
      "/guide": [
        { text: "Fish Bubble", link: "/guide/installation" },
        { text: "快速开始", link: "/guide/quickstart" },
        { text: "定制主题", link: "/guide/theming" },
        { text: "国际化", link: "/guide/i18n" },
        { text: "暗黑模式", link: "/guide/dark" }
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
