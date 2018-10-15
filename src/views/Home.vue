<template>
  <div class="home"> 
    <div class="theme">
      <img :src="theme" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  title () {
    return '记录铲屎官和主子的日常生活'
  },
  keywords(){
    return '铲屎官,宠物,宠物猫,宠物狗,猫粮,狗粮'
  },
  description(){
    return '记录铲屎官和主子的日常生活,铲屎官,宠物,宠物猫,宠物狗,猫粮,狗粮。'
  },
  data(){
    return {
      theme_imgs: [
        '/public/images/home/theme1.jpeg',
        '/public/images/home/theme2.jpeg',
      ]
    }
  },
  components: {
  },
  computed: {
    theme(){
      let INDEX = Math.ceil(Math.random()*this.theme_imgs.length) - 1
      return this.theme_imgs[INDEX]
    },
    background_color: {
      get(){
        return this.$store.state.background_color
      },
      set(val){
        this.$store.commit('change_background_color', val)
      }
    }
  },
  methods: {
  },
  beforeCreate(){
  },
  beforeMount(){
    this.background_color = ''
  }
}
</script>

<style lang="stylus">
.home{
  position: relative;
  .theme{
    margin: 20px auto 0;
    width: 700px;
    img{
      width: 100%;
    }
  }
}
</style>
