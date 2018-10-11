<template>
  <div class="adoption">
    <div class="container">
      <ul class="pets-list">
        <li class="pet-item" v-for="item in LIST">
          <div class="pet-img">
          	<img :src="item.img" alt="宠物领养">
          </div>
          <div class="pet-content">
          	<div class="name">名字：{{item.name}}</div>
          	<div class="tips">
          	  <span>性别：{{item.sex}}</span>
          	  <span>年龄：{{item.age}}</span>	
          	  <br/>
          	  <span>体型： {{item.length}}x{{item.height}}</span>
          	  <span>体重：{{item.weight}}</span>
          	</div>
          	<div class="title">{{item.title}}</div>
          	<div class="locaton">
          	  <img src="/public/images/location.png" alt="宠物领养">
          	  <span>{{item.location}}</span>
          	</div>
          </div>
        </li>
      </ul>      
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  title () {
    return '宠物领养'
  },
  keywords(){
    return '宠物领养'
  },
  description(){
    return '铲屎官献出一份爱心，领养一只走投无路的宠物。'
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
    }
  },
  components: {
  },
  methods: {
  },
  beforeCreate(){
  },
  beforeMount(){
  }
}
</script>

<style lang="stylus" scoped>
.adoption{
  position: relative;
  margin: 0 auto;
  width: 1050px;
  overflow: hidden;
  .container{
	  position: relative;
	  margin: 0 auto;
	  width: 600px;
	  overflow: hidden;
	  .pet-item{
	  	margin-top: 10px;
	  	width: 600px;
	  	height: 150px;
	  	padding: 10px;
	  	background: #fff;
	  	transition: background .25s linear;
	  	&:hover{
	  	  background: #f1f1f1;
	  	  transition: background .25s linear;
	  	  .pet-img{
	  	  	img{
	  	  	  transform-origin: center;
	  	  	  transform: scale(1.1);
	  	  	  transition: transform .25s linear;
	  	  	}
	  	  }
	  	}
	  	.pet-img{
	  	  float: left;
	  	  height: 130px;
	  	  width: 195px;
	  	  overflow: hidden;
	  	  img{
	  	  	transform-origin: center;
	  	  	transform: scale(1);
	  	  	height: 100%;
	  	  	transition: transform .25s linear;
	  	  }
	  	}
	  	.pet-content{
	  	  position: relative;
	  	  float: left;
	  	  margin-left: 10px;
	  	  width: 360px;
	  	  height: 130px;
	  	  font-size: 13px;
	  	  color: #888;
	  	  .name{
	  	  	color: #333;
	  	  	font-size: 16px;
	  	  }
	  	  .tips{
	  	  	margin-top: 5px;
	  	  	span{
	  	  		margin-right: 10px;
	  	  	}
	  	  }
	  	  .title{
	  	  	margin-top: 5px;
	  	  }
	  	  .locaton{
	  	  	position: absolute;
	  	  	left: 0;
	  	  	bottom: 0;
	  	  	color: #555;
	  	  	img{
	  	  	 margin-top: 2px;
	  	  	 margin-right: 5px;
	  	  	 width: 14px;
	  	  	}
	  	  }
	  	}
	  }
	}
}
</style>
