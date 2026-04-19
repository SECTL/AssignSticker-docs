import comp from "/Users/lijf/Documents/AssignSticker-docs-main/.vp-temp-pnpm/pages/faq/eg.html.vue"
const data = JSON.parse("{\"path\":\"/faq/eg.html\",\"title\":\"示例\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"示例\",\"createTime\":\"2026/02/13 09:32:05\"},\"readingTime\":{\"minutes\":0.04,\"words\":13},\"git\":{},\"filePathRelative\":\"faq/eg.md\",\"headers\":[]}")
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
