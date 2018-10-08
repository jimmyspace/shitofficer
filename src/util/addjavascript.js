function getAddjavascript (vm) {
  const { addjavascript } = vm.$options
  if (addjavascript) {
    return typeof addjavascript === 'function'
      ? addjavascript.call(vm)
      : addjavascript
  }
}

const serverAddjavascriptMixin = {
  created () {
    const addjavascript = getAddjavascript(this)
    if (addjavascript) {
      this.$ssrContext.addjavascript = `${addjavascript}`
    }
  }
}

const clientAddjavascriptMixin = {
  mounted () {
    const addjavascript = getAddjavascript(this)
    if (addjavascript) {
      document.body.appendChild(`${addjavascript}`)
    }
  }
}

export default process.env.VUE_ENV === 'server'
  ? serverAddjavascriptMixin
  : clientAddjavascriptMixin
