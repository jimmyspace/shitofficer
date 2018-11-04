<template>
  <div class="right-bar">
    <div class="user-center">
      <div class="post"><span>分享点滴</span></div>
      <ul class="center-list">
        <li class="center-item">
          <img src="/public/images/home/dou.png" alt="铲屎官">我的欢乐豆 <span>92</span>
        </li>
        <li class="center-item">
          <img src="/public/images/home/post.png" alt="铲屎官">我的帖子 <span>2</span>
        </li>
        <li class="center-item">
          <img src="/public/images/home/zan1.png" alt="铲屎官">我的点赞 <span>199</span>
        </li>
        <li class="center-item">
          <img src="/public/images/home/ping1.png" alt="铲屎官">我的评论 <span>99</span>
        </li>
      </ul>
    </div>
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
  top: 0;
  right: 0;
  width: 330px;
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
        width: 240px;
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
  .user-center{
    width: 100%;
    .post{
      height: 50px;
      text-align: center;
      cursor: pointer;
      &:hover{
        color: #1296db;
      }
      span{
        line-height: 50px;
        font-size: 16px;
      }
    }
    .center-list{
      .center-item{
        padding: 0 20px;
        line-height: 40px;
        line-height: 40px;
        font-size: 15px;
        color: #8590a6;
        cursor: pointer;
        &:hover{
          background: #f5f5f5;
          span{
            background: #fff;
          }
        }
        img{
          margin: 12px 5px 0 0;
          width: 16px;
        }
        span{
          float: right;
          margin: 6px 0;
          display: block;
          height: 28px;
          text-align: center;
          min-width: 28px;
          line-height: 27px;
          padding: 0 6px;
          background: #f5f5f5;
          border-radius: 2px;
        }
      }
    }
  }
}
</style>