export const sidebar = {"/":{"/doc/":{"items":[{"text":"概览","icon":"material-symbols:overview-outline-rounded","prefix":"overview","items":[{"text":"什么是AssignSticker","link":"whatsthis"}]},{"text":"指南","icon":"ep:guide","prefix":"guide","items":[{"text":"下载与运行","link":"start"},{"text":"连接云","link":"conncttocloud"}]},{"text":"资源","icon":"carbon:document","prefix":"resources","items":[{"text":"贡献指南","link":"contribute"}]}],"prefix":"/doc/"}},"/en/":{"/doc/":{"items":[{"text":"Overview","icon":"material-symbols:overview-outline-rounded","prefix":"overview","items":[{"text":"What is AssignSticker","link":"whatsthis"}]},{"text":"Guide","icon":"ep:guide","prefix":"guide","items":[{"text":"Download & Run","link":"start"}]},{"text":"Resources","icon":"carbon:document","prefix":"resources","items":[{"text":"Contribute","link":"contribute"}]}],"prefix":"/en/doc/"}},"__auto__":{},"__home__":{}}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSidebar) {
    __VUE_HMR_RUNTIME__.updateSidebar(sidebar)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ sidebar }) => {
    __VUE_HMR_RUNTIME__.updateSidebar(sidebar)
  })
}
