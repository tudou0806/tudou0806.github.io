import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  {
    text: "随笔",
    icon: "pen-to-square",
    prefix: "/posts/",
    children: [
      {
        text: "2021",
        icon: "pen-to-square",
        prefix: "2021/",
        children: [
          { 
            text: "如何搭建hexo博客到云服务器",
            icon: "pen-to-square", 
            link: "如何搭建hexo博客到云服务器" 
          },
        ],
      },
    ],
  },
  {
    text: "V2 文档",
    icon: "book",
    link: "https://theme-hope.vuejs.press/zh/",
  },
]);
