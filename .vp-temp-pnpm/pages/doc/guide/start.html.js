import comp from "/Users/lijf/Documents/AssignSticker-docs-main/.vp-temp-pnpm/pages/doc/guide/start.html.vue"
const data = JSON.parse("{\"path\":\"/doc/guide/start.html\",\"title\":\"下载与运行\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"下载与运行\",\"createTime\":\"2025/4/1 19:46:59\"},\"readingTime\":{\"minutes\":0.11,\"words\":34},\"git\":{},\"filePathRelative\":\"doc/guide/start.md\",\"headers\":[]}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
