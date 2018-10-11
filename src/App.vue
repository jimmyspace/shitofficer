<template>
  <div id="app">
    <so-header></so-header>
    <router-view class="app-router-view"></router-view>
    <so-footer></so-footer>
    <so-background></so-background>
  </div>
</template>
<script>
 import soBackground from '~src/components/so-common/so-background/Index.vue'
 import soFooter from '~src/components/so-common/so-footer/Index.vue'
 import soHeader from '~src/components/so-common/so-header/Index.vue'
 import 'babel-polyfill'//ie处理空白页
 import 'url-search-params-polyfill'//URLSearchParams 兼容处理
 export default{
   name: 'App',
   components: {
    soBackground,
    soFooter,
    soHeader
   }
 }
</script>
<style lang="stylus">
#app{
  position: relative;
  padding-top: 4.5em;
  width: 100%;
  min-width: 1200px;
  overflow: hidden;
  .app-router-view{
    position: relative;
    padding-bottom: 1em;
    background: transparent;
    min-height: calc(100vh - 9em);
    z-index: 2;
  }
}
</style>
