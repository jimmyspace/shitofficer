<template>
  <div class="left-nav">
  	<ul class="nav-wrap">
  	  <li class="nav-item" :class="{'active':nav_now == '狗'}" @click="nav_now = '狗'">
  	  	<img class="low" src="/public/images/adoption/dog.png" alt="宠物收养" >
  	  	<img class="height" src="/public/images/adoption/dog1.png" alt="宠物收养">
  	  	<span>狗狗</span>
  	  </li>
  	  <li class="nav-item" :class="{'active':nav_now == '猫'}" @click="nav_now = '猫'">
  	  	<img class="low" src="/public/images/adoption/cat.png" alt="宠物收养">
  	  	<img class="height" src="/public/images/adoption/cat1.png" alt="宠物收养">
  	  	<span>猫猫</span>
  	  </li>
  	  <li class="nav-item" :class="{'active':nav_now == '其它'}" @click="nav_now = '其它'">
  	  	<img class="low" src="/public/images/adoption/other.png" alt="宠物收养">
  	  	<img class="height" src="/public/images/adoption/other1.png" alt="宠物收养">
  	  	<span>其它</span>
  	  </li>
  	</ul>
  </div>
</template>
<script>
  export default{
  	name: 'left_nav',
  	data(){
  	  return {
  	  	nav_now: '狗'
  	  }
  	},
  	methods:{

  	}
  }
</script>
<style scoped lang="stylus">
.left-nav{
  position: fixed;
  top: 82px;
  left: calc(50vw - 525px);
  width: 160px;
  overflow: hidden;
  .nav-wrap{
  	position: relative;
  	width: 100%;
  	overflow: hidden;
  	.nav-item{
  	  margin-bottom: 10px;
  	  width: 100%;
  	  height: 42px;
  	  color: #555;
  	  font-size: 15px;
  	  cursor: pointer;
  	  &.active{
  	  	background: #fff;
  	  	color: #1296db;
  	  	img {
		  &.low{
  	  	    display: none;
  	  	  }
  	  	  &.height{
		    display: inline-block;
  	  	  }
  	  	}
  	  }
  	  &:hover{
  	  	color: #1296db;
  	  	img {
		  &.low{
  	  	    display: none;
  	  	  }
  	  	  &.height{
		    display: inline-block;
  	  	  }
  	  	}
  	  }
  	  img{
  	  	margin: 13px 20px;
  	  	width: 16px;
  	  	&.low{
  	  	  display: inline-block;
  	  	}
  	  	&.height{
		  display: none;
  	  	}
  	  }
  	  span{
  	  	line-height: 42px;
  	  }
  	}
  }
}
</style>