import comp from "/Users/lijf/Documents/AssignSticker-docs-main/.vp-temp-local/pages/team.html.vue"
const data = JSON.parse("{\"path\":\"/team.html\",\"title\":\"团队\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"团队\",\"pageLayout\":\"page\"},\"readingTime\":{\"minutes\":0.9,\"words\":270},\"git\":{},\"filePathRelative\":\"team.md\",\"headers\":[]}")
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
