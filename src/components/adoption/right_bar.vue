<template>
  <div class="right-bar">
    <ul class="tuijian">
      <li class="item">
        <div class="left-img">
          <img src="/public/images/adoption/product.jpg" alt="">
        </div>
        <div class="right-content">
          <div class="name">麦富迪 电影零食系列 </div>
          <div class="tips">
            <div class="old">市场价：¥44.00</div>
            <div class="now">现价：¥33.00</div> 
          </div>
        </div>
      </li>
      <li class="item">
        <div class="left-img">
          <img src="/public/images/adoption/product1.jpg" alt="">
        </div>
        <div class="right-content">
          <div class="name">麦富迪 电影零食系列 </div>
          <div class="tips">
            <div class="old">市场价：¥44.00</div>
            <div class="now">现价：¥33.00</div>
          </div>
        </div>
      </li>
      <li class="item">
        <div class="left-img">
          <img src="/public/images/adoption/product.jpg" alt="">
        </div>
        <div class="right-content">
          <div class="name">麦富迪 电影零食系列 </div>
          <div class="tips">
            <div class="old">市场价：¥44.00</div>
            <div class="now">现价：¥33.00</div> 
          </div>
        </div>
      </li>
      <li class="item">
        <div class="left-img">
          <img src="/public/images/adoption/product1.jpg" alt="">
        </div>
        <div class="right-content">
          <div class="name">麦富迪 电影零食系列 </div>
          <div class="tips">
            <div class="old">市场价：¥44.00</div>
            <div class="now">现价：¥33.00</div>
          </div>
        </div>
      </li>
    </ul>
    <div class="guanggao">
      <img src="/public/images/adoption/guanggao.jpg" alt="">
    </div>
  </div>
</template>
<script>
  export default{
  	name: 'right_bar',
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
.right-bar{
  position: absolute;
  top: 10px;
  right: 0;
  width: 260px;
  background: #fff;
  .guanggao{
    cursor: pointer;
    img{
      width: 100%;
    }
  }
  .tuijian{
    margin-top: 10px;
    width: 100%;
    overflow: hidden;
    .item{
      margin-bottom: 10px;
      width: 100%;
      overflow: hidden;
      .left-img{
        float: left;
        width: 80px;
        img{
          width: 100%;
        }
      }
      .right-content{
        padding: 0 10px;
        float: left;
        width: 180px;
        .name{
          color: #555;
          font-size: 14px;
        }
        .tips{
          margin-top: 10px;
          .old{
            font-size: 12px;
            color: #999;
            text-decoration:line-through;
          }
          .now{
            font-size: 13px;
            color: #de5531;
          }
        }
      }
    }
  }
}
</style>