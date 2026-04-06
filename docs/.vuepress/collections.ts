/* @see https://theme-plume.vuejs.press/guide/collection/ 查看文档了解配置详情。 */

import { defineCollection, defineCollections } from "vuepress-theme-plume";

const Overview = defineCollection({
  type: "doc",
  dir: "doc",
  linkPrefix: "/doc",
  title: "概览",
  meta: { createTime: "long" },
  sidebar: [
    {
      text: '概览', icon: 'material-symbols:overview-outline-rounded', prefix: 'overview', items: [
        { text: '什么是AssignSticker', link: 'whatsthis' },
      ]
    },
    {
      text: '指南', icon: 'ep:guide', prefix: 'guide', items: [
        { text: '下载与运行', link: 'start' },
        { text: '连接云', link: 'conncttocloud' },
      ]
    },
    {
      text: '附录', icon: 'carbon:document', prefix: 'resources', items: [
        { text: '贡献指南', link: 'contribute' },
      ]
    },
  ],
});

const Faq = defineCollection({
  type: "post",
  dir: "faq",
  title: "常见问题",
  link: "/faq/",
  //   linkPrefix: '/article/', // 相关文章的链接前缀
  //   postList: true, // 是否启用文章列表页
  tags: false, // 是否启用标签页
  archives: false, // 是否启用归档页
  categories: false, // 是否启用分类页
  //   postCover: 'right', // 文章封面位置
  //   pagination: 15, // 每页显示文章数量
  meta: { createTime: "long" },
});

const EnOverview = defineCollection({
  type: "doc",
  dir: "doc",
  linkPrefix: "/doc",
  title: "Overview",
  meta: { createTime: "long" },
  sidebar: [
    {
      text: 'Overview', icon: 'material-symbols:overview-outline-rounded', prefix: 'overview', items: [
        { text: 'What is AssignSticker', link: 'whatsthis' },
      ]
    },
    {
      text: 'Guide', icon: 'ep:guide', prefix: 'guide', items: [
        { text: 'Download & Run', link: 'start' },
      ]
    },
    {
      text: 'Appendix', icon: 'carbon:document', prefix: 'resources', items: [
        { text: 'Contribute', link: 'contribute' },
      ]
    },
  ],
});

const EnFaq = defineCollection({
  type: "post",
  dir: "faq",
  title: "FAQ",
  link: "/faq/",

  tags: false,
  archives: false,
  categories: false,
  meta: { createTime: "long" },
});

export const zhcollections = defineCollections([Overview, Faq]);
export const encollections = defineCollections([EnOverview, EnFaq]);
