<template>
  <div class="mate">
    <div class="container">
      <!-- <div class="search-area">
      	<ul class="tag-list">
      	  <li class="tag-item">狗</li>
      	  <li class="tag-item">猫</li>
      	  <li class="tag-item">其它</li>
      	</ul>
      </div> -->
      <div class="hot-area">
      	<!-- <div class="hot-title">
      	  优质宠物
      	</div> -->
      	<div class="hot-item" v-for="item in LIST">
      	  <div class="item-img">
      	  	<img :src="item.img" alt="宠物配对,宠物相亲,宠物约会">
      	  </div>
      	  <div class="item-info">
      	  	{{item.name}}（{{item.sex}}）
      	  </div>
      	</div>
      </div>
      <div class="success-area">
      	<div class="success-title">
      	  <img src="/public/images/love.png" alt="宠物配对,宠物相亲,宠物约会">成功约会
      	</div>
     	<ul class="success-list">
          <li class="pet-item" v-for="(item,index) in LIST" v-if="index<5">
            <div class="pet-img">
          	  <img :src="item.img" alt="宠物配对,宠物相亲,宠物约会">
            </div>
            <div class="pet-img right">
          	  <img :src="item.img" alt="宠物配对,宠物相亲,宠物约会">
            </div>
          </li>
        </ul>   
      </div>      
    </div>
  </div>
</template>

<script>
export default {
  name: 'Mate',
  title () {
    return '宠物约会'
  },
  keywords(){
    return '宠物配对,狗相亲,猫相亲,宠物约会'
  },
  description(){
    return '查看主子之间的缘分，寻找主子的真爱，在世间不留下遗憾'
  },
  data(){
    return {
      
    }
  },
  computed: {
    LIST: {
      get(){
        return this.$store.state.ADOPTION.list
      },
      set(val){
        this.$store.commit('ADOPTION/change_list', val)
      }
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
  	this.background_color = '#FFC0CB'
  },
  beforeDestroy(){
  	this.background_color = ''
  }
}
</script>

<style lang="stylus" scoped>
.mate{
  position: relative;
  width: 100%;
  min-height: 100vh;
  overflow: hidden;
  .container{
	position: relative;
	width: 1050px;
	margin: 0 auto;
	overflow: hidden;
	.hot-area{
	  position: relative;
	  margin: 20px 0 40px;
	  width: 720px;
	  overflow: hidden;
	  .hot-title{
	  	margin: 10px 0;
	  	line-height: 60px;
	  	padding-left: 10px;
	  	background: #fff;
	  }
	  .hot-item{
	  	position: relative;
	  	float: left;
	  	width: 180px;
	  	height: 230px;
	  	&:hover{
	  	  .item-img {
	  	  	img{
	  	  	  transform-origin: center;
	  	  	  transform: scale(1.2);
	  	  	  transition: transform .5s linear;
	  	  	}
	  	  }
	  	  .item-info{
	  	  	opacity: 1;
	  	  	transition: opacity .5s linear;
	  	  }
	  	}
	  	.item-img{
	  	  width: 100%;
	  	  height: 100%;
	  	  overflow: hidden;
	  	  img{
	  	  	width: 100%;
	  	  	height: 100%;
	  	  	transform: scale(1);
	  	  	transition: transform .5s linear;
	  	  }
	  	}
	  	.item-info{
	  	  position: absolute;
	  	  padding: 0 10px;
	  	  color: #1296db;
	  	  left: 0;
	  	  bottom: 0;
	  	  width: 100%;
	  	  background: rgba(255, 192, 203, 0.5);
	  	  line-height: 40px;
	  	  font-size: 14px;
	  	  text-align: center;
	  	  opacity: 0;
	  	  transition: opacity .25s linear;
	  	}
	  }
	}
	.success-area{
	  position: absolute;
	  top: 20px;
	  right: 0;
	  width: 300px;
	  background: rgba(250,250,250,0.5);
	  text-align: center;
	  .success-title{
	  	color: #555;
	  	line-height: 50px;
	  	img {
	  	  margin-top: 10px;
	  	  margin-right: 6px;
		  width: 30px;
	  	}
	  }
	  .success-list{
	  	position: relative;
	  	margin: 10px 0 40px;
	  	.pet-item{
	  	  margin: 0 auto 10px;
	  	  width: 230px;
	  	  text-align: center;
	  	  .pet-img{
	  	  	display: inline-block;
	  	  	margin: 0 16px;
	  	  	width: 80px;
	  	  	height: 102px;
	  	  	overflow: hidden;
	  	  	img{
	  	  	  width: 100%;
	  	  	  height: 100%;
	  	  	}
	  	  }
	  	}
	  }
	}
  }
}
</style>
