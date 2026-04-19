export const collections = {"/":[{"type":"doc","dir":"doc","linkPrefix":"/doc","title":"概览","meta":{"createTime":"long"}},{"type":"post","dir":"faq","title":"常见问题","link":"/faq/","tags":false,"archives":false,"categories":false,"meta":{"createTime":"long"},"linkPrefix":"/faq/"}],"/en/":[{"type":"doc","dir":"doc","linkPrefix":"/doc","title":"Overview","meta":{"createTime":"long"}},{"type":"post","dir":"faq","title":"FAQ","link":"/faq/","tags":false,"archives":false,"categories":false,"meta":{"createTime":"long"},"linkPrefix":"/faq/"}]}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateCollections) {
    __VUE_HMR_RUNTIME__.updateCollections(collections)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ collections }) => {
    __VUE_HMR_RUNTIME__.updateCollections(collections)
  })
}
