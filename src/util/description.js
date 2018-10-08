function getDescription (vm) {
  const { description } = vm.$options
  if (description) {
    return typeof description === 'function'
      ? description.call(vm)
      : description
  }
}

const serverDescriptionMixin = {
  created () {
    const description = getDescription(this)
    if (description) {
      if(`${description}`){
        this.$ssrContext.description = `${description}`
      }else{
        this.$ssrContext.description = '疯壳'
      }
    }
  }
}

const clientDescriptionMixin = {
  mounted () {
    const description = getDescription(this)
    if (description) {
      var meta = document.getElementsByTagName('meta')
      if(`${description}`){
        meta["description"].setAttribute('content',`${description}`)
      }else{
        meta["description"].setAttribute('content','疯壳')
      }
    }
  }
}

export default process.env.VUE_ENV === 'server'
  ? serverDescriptionMixin
  : clientDescriptionMixin
