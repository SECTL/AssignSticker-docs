export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/friends.html", { loader: () => import(/* webpackChunkName: "friends.html" */"/Users/lijf/Documents/AssignSticker-docs-main/.vp-temp-refresh-20260402/pages/friends.html.js"), meta: {"title":"友情链接"} }],
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"/Users/lijf/Documents/AssignSticker-docs-main/.vp-temp-refresh-20260402/pages/index.html.js"), meta: {"title":""} }],
  ["/team.html", { loader: () => import(/* webpackChunkName: "team.html" */"/Users/lijf/Documents/AssignSticker-docs-main/.vp-temp-refresh-20260402/pages/team.html.js"), meta: {"title":"团队"} }],
  ["/asd/%E6%9C%AA%E5%91%BD%E5%90%8D.html", { loader: () => import(/* webpackChunkName: "asd_未命名.html" */"/Users/lijf/Documents/AssignSticker-docs-main/.vp-temp-refresh-20260402/pages/asd/未命名.html.js"), meta: {"title":""} }],
  ["/asd/%E6%AC%A2%E8%BF%8E.html", { loader: () => import(/* webpackChunkName: "asd_欢迎.html" */"/Users/lijf/Documents/AssignSticker-docs-main/.vp-temp-refresh-20260402/pages/asd/欢迎.html.js"), meta: {"title":""} }],
  ["/en/friends.html", { loader: () => import(/* webpackChunkName: "en_friends.html" */"/Users/lijf/Documents/AssignSticker-docs-main/.vp-temp-refresh-20260402/pages/en/friends.html.js"), meta: {"title":"Friends"} }],
  ["/en/", { loader: () => import(/* webpackChunkName: "en_index.html" */"/Users/lijf/Documents/AssignSticker-docs-main/.vp-temp-refresh-20260402/pages/en/index.html.js"), meta: {"title":""} }],
  ["/en/team.html", { loader: () => import(/* webpackChunkName: "en_team.html" */"/Users/lijf/Documents/AssignSticker-docs-main/.vp-temp-refresh-20260402/pages/en/team.html.js"), meta: {"title":"Team"} }],
  ["/faq/eg.html", { loader: () => import(/* webpackChunkName: "faq_eg.html" */"/Users/lijf/Documents/AssignSticker-docs-main/.vp-temp-refresh-20260402/pages/faq/eg.html.js"), meta: {"title":"示例"} }],
  ["/doc/guide/conncttocloud.html", { loader: () => import(/* webpackChunkName: "doc_guide_conncttocloud.html" */"/Users/lijf/Documents/AssignSticker-docs-main/.vp-temp-refresh-20260402/pages/doc/guide/conncttocloud.html.js"), meta: {"title":"conncttocloud"} }],
  ["/doc/guide/start.html", { loader: () => import(/* webpackChunkName: "doc_guide_start.html" */"/Users/lijf/Documents/AssignSticker-docs-main/.vp-temp-refresh-20260402/pages/doc/guide/start.html.js"), meta: {"title":"下载与运行"} }],
  ["/doc/overview/whatsthis.html", { loader: () => import(/* webpackChunkName: "doc_overview_whatsthis.html" */"/Users/lijf/Documents/AssignSticker-docs-main/.vp-temp-refresh-20260402/pages/doc/overview/whatsthis.html.js"), meta: {"title":"什么是AssignSticker"} }],
  ["/doc/resources/contribute.html", { loader: () => import(/* webpackChunkName: "doc_resources_contribute.html" */"/Users/lijf/Documents/AssignSticker-docs-main/.vp-temp-refresh-20260402/pages/doc/resources/contribute.html.js"), meta: {"title":"贡献指南"} }],
  ["/en/faq/eg.html", { loader: () => import(/* webpackChunkName: "en_faq_eg.html" */"/Users/lijf/Documents/AssignSticker-docs-main/.vp-temp-refresh-20260402/pages/en/faq/eg.html.js"), meta: {"title":"Example"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"/Users/lijf/Documents/AssignSticker-docs-main/.vp-temp-refresh-20260402/pages/404.html.js"), meta: {"title":""} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
