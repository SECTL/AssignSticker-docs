export const siteData = JSON.parse("{\"base\":\"/\",\"lang\":\"zh-CN\",\"title\":\"AssignSticker\",\"description\":\"一款简洁，易用的作业板\",\"head\":[[\"link\",{\"rel\":\"icon\",\"type\":\"image/png\",\"href\":\"/logo.png\"}]],\"locales\":{\"/\":{\"lang\":\"zh-CN\",\"title\":\"AssignSticker\",\"description\":\"\"},\"/en/\":{\"lang\":\"en-US\",\"title\":\"AssignSticker\",\"description\":\"\"}}}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}
