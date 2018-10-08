function getKeywords (vm) {
  const { keywords } = vm.$options
  if (keywords) {
    return typeof keywords === 'function'
      ? keywords.call(vm)
      : keywords
  }
}

const serverKeywordsMixin = {
  created () {
    const keywords = getKeywords(this)
    if (keywords) {
      if(`${keywords}`){
        this.$ssrContext.keywords = `${keywords}`
      }else{
        this.$ssrContext.keywords = '疯壳'
      }
    }
  }
}

const clientKeywordsMixin = {
  mounted () {
    const keywords = getKeywords(this)
    if (keywords) {
      var meta = document.getElementsByTagName('meta')
      if(`${keywords}`){
        meta["keywords"].setAttribute('content',`${keywords}`)
      }else{
        meta["keywords"].setAttribute('content','疯壳')
      }
    }
  }
}

export default process.env.VUE_ENV === 'server'
  ? serverKeywordsMixin
  : clientKeywordsMixin
