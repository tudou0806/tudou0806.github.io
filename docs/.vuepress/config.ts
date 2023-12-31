import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  locales: {
    "/": {
      lang: "zh-CN",
      title: "土豆君",
      description: "个人技术博客",
    }
  },

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
