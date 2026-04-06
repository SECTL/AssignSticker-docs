/**
 * @see https://theme-plume.vuejs.press/config/navigation/ 查看文档了解配置详情
 *
 * Navbar 配置文件，它在 `.vuepress/plume.config.ts` 中被导入。
 */

import { defineNavbarConfig } from 'vuepress-theme-plume'

const zhNavbar = defineNavbarConfig([
  {
    text: '概览',
    icon: 'material-symbols:overview-outline-rounded',
    link: '/doc/overview/whatsthis',
  },
  {
    text: '文档',
    icon: 'mi:book',
    items: [
      { text: '指南', icon: 'ep:guide', link: '/doc/guide/start' },
      { text: '附录', icon: 'carbon:document', link: '/doc/resources/contribute' },
    ],
  },
  {
    text: '常见问题',
    icon: 'mingcute:question-line',
    link: '/faq/',
  },
  { text: '团队', icon: 'ic:round-people', link: '/team' },
  { text: '友链', icon: 'ic:round-link', link: '/friends' },
])

const enNavbar = defineNavbarConfig([
  {
    text: 'Overview',
    icon: 'material-symbols:overview-outline-rounded',
    link: '/en/doc/overview/whatsthis',
  },
  {
    text: 'Documentation',
    icon: 'mi:book',
    items: [
      { text: 'Guide', icon: 'ep:guide', link: '/en/doc/guide/start' },
      { text: 'Appendix', icon: 'carbon:document', link: '/en/doc/resources/contribute' },
    ],
  },
  {
    text: 'FAQ',
    icon: 'mingcute:question-line',
    link: '/en/faq/',
  },
  { text: 'Team', icon: 'ic:round-people', link: '/en/team' },
  { text: 'Friends', icon: 'ic:round-link', link: '/en/friends' },
])

export { zhNavbar, enNavbar }
