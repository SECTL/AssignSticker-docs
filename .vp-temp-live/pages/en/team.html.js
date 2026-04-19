import comp from "/Users/lijf/Documents/AssignSticker-docs-main/.vp-temp-live/pages/en/team.html.vue"
const data = JSON.parse("{\"path\":\"/en/team.html\",\"title\":\"Team\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"Team\",\"pageLayout\":\"page\"},\"readingTime\":{\"minutes\":0.79,\"words\":238},\"git\":{},\"filePathRelative\":\"en/team.md\",\"headers\":[]}")
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
