function getTitle (vm) {
  const { title } = vm.$options
  if (title) {
    return typeof title === 'function'
      ? title.call(vm)
      : title
  }
}

const serverTitleMixin = {
  created () {
    const title = getTitle(this)
    if (title) {
      if(`${title}`){
        this.$ssrContext.title = `铲屎官 - ${title}`
      }else{
        this.$ssrContext.title = `铲屎官`
      }
    }
  }
}

const clientTitleMixin = {
  mounted () {
    const title = getTitle(this)
    if (title) {
      if(`${title}`){
        document.title = `铲屎官 - ${title}`
      }else{
        document.title = `铲屎官`
      }
    }
  }
}

export default process.env.VUE_ENV === 'server'
  ? serverTitleMixin
  : clientTitleMixin
