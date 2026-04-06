import comp from "/Users/lijf/Documents/AssignSticker-docs-main/.vp-temp/pages/friends.html.vue"
const data = JSON.parse("{\"path\":\"/friends.html\",\"title\":\"友情链接\",\"lang\":\"zh-CN\",\"frontmatter\":{\"pageLayout\":\"friends\",\"title\":\"友情链接\",\"editLink\":false,\"cols\":3,\"list\":[{\"name\":\"智教联盟论坛\",\"link\":\"https://forum.smart-teach.cn/\",\"avatar\":\"/icon/SmartTeach.png\",\"desc\":\"全国最大的电教委交流社区\"},{\"name\":\"Awesome-Iwb\",\"link\":\"https://github.com/awesome-iwb/awesome-iwb\",\"avatar\":\"/icon/Aiwb.png\",\"desc\":\"为广大电教倾情撰写，让班级大屏更好用！\"},{\"name\":\"Awesome-Class-Softwares\",\"link\":\"https://acs.jursin.top/\",\"avatar\":\"/icon/ACS.png\",\"desc\":\"适用于班级一体机的优质软件合集🌟\"},{\"name\":\"CNEL 电教委员指南\",\"link\":\"https://cnel.smart-teach.cn/\",\"avatar\":\"/icon/cnel.png\",\"desc\":\"教你如何做一名优秀的电教委员\"}]},\"readingTime\":{\"minutes\":0.4,\"words\":120},\"git\":{},\"filePathRelative\":\"friends.md\",\"headers\":[]}")
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
