export const postsData = {"/faq/":[{"path":"/faq/eg.html","title":"示例","createTime":"2026/02/13 09:32:05","lang":"zh-CN","excerpt":"","readingTime":{"minutes":0.04,"words":13}}],"/en/faq/":[{"path":"/en/faq/eg.html","title":"Example","createTime":"2026/02/13 09:32:05","lang":"en-US","excerpt":"","readingTime":{"minutes":0.07,"words":20}}]}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePostsData) {
    __VUE_HMR_RUNTIME__.updatePostsData(postsData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ postsData }) => {
    __VUE_HMR_RUNTIME__.updatePostsData(postsData)
  })
}
