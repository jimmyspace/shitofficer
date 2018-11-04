<template>
  <div class="home"> 
    <right_bar></right_bar>
    <div class="home-container">
      <ul class="event-list">
        <li class="event-item" v-for="(item,index) in home_list">
          <div class="user-wrap">
            <div class="user-img">
              <img :src="item.user_img" alt="铲屎官">
            </div> 
            <div class="user-name">
              <p class="name-info">{{item.user_name}}</p>
              <p class="time-info">{{item.ctime}}</p>
            </div>           
          </div>
          <div class="item-content">
            <div class="item-title">{{item.title}}</div>
            <div class="item-html-string" :class="{'no_img':!item.first_img_path}">
              <div class="first-img" v-if="item.first_img_path">
                <img :src="item.first_img_path" :alt="item.title">
              </div>
              <div class="html-info">{{get_text(item.html_content,index)}}</div>
            </div>
          </div>
          <div class="item-bottom">
            <div class="bottom-tip">
              <img src="/public/images/home/zan.png" alt="铲屎官">
              <img src="/public/images/home/zan1.png" alt="铲屎官">
              {{item.favourite}}点赞
            </div>
            <div class="bottom-tip">
              <img src="/public/images/home/ping.png" alt="铲屎官">
              <img src="/public/images/home/ping1.png" alt="铲屎官">
              {{item.comment}}条评论
            </div>
            <div class="bottom-tip">
              <img src="/public/images/home/fen.png" alt="铲屎官">
              <img src="/public/images/home/fen1.png" alt="铲屎官">
              分享
            </div>
            <div class="bottom-tip">
              <img src="/public/images/home/ju.png" alt="铲屎官">
              <img src="/public/images/home/ju1.png" alt="铲屎官">
              举报
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import right_bar from '~src/components/home/right_bar.vue'
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
      
    }
  },
  components: {
    right_bar
  },
  computed: {
    home_list: {
      get(){
        return this.$store.state.HOME.home_list
      },
      set(val){
        this.$store.commit('HOME/change_home_list', val)
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
    get_text(text, index) {
      let temp = ''
      if(text){
        let imgReg = /<img src=\"([^\"]*?)\">/
        var s = text.match(imgReg)
        if (s) {
          this.$set(this.home_list[index], 'first_img_path', RegExp.$1)
        }
        temp = text.replace(/<[^>]+>/g, "")//去掉所有的html标记
        temp = temp.replace(/&nbsp;/g, " ")//&nbsp转空格;
      }
      return temp
    }
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
  width: 1050px;
  margin: 10px auto;
  .home-container{
    position: relative;
    width: 700px;
    background: #fff;
    overflow: hidden;
    .event-list{
      .event-item{
        position: relative;
        width: 100%;
        padding: 20px;
        overflow: hidden;
        border-bottom: 1px solid #e5e5e5;
        &:last-child{
          border: none;
        }
        .user-wrap{
          overflow: hidden;
          .user-img{
            float: left;
            width: 50px;
            height: 50px;
            margin-right: 10px;
            border-radius: 50%;
            overflow: hidden;
            img{
              width: 100%;
            }
          }
          .user-name{
            float: left;
            padding-top: 7px;
            overflow: hidden;
            .name-info{
              font-size: 14px;
              font-weight: 500;
              color: #242529;
              line-height: 20px;
            }
            .time-info{
              font-size: 12px;
              font-weight: 400;
              color: #bbb;
              line-height: 17px;
            }
          }
        }
        .item-content{
          .item-title{
            margin: 10px 0;
            width: 100%;
            font-weight: 600;
            font-size: 16px;
            color: #1a1a1a;
            line-height: 1.6;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
          }
          .item-html-string{
            overflow: hidden;
            .first-img{
              float: left;
              margin-right: 18px;
              width: 190px;
              height: 105px;
              border-radius: 4px;
              img{
                width: 100%;
              }
            }
            .html-info{
              float: left;
              width: 446px;
              font-size: 14px;
              word-break:break-all;
              white-space:normal;
              &:hover{
                color: #555;
              }
            }
            &.no_img{
              .html-info{
                width: 100%;
              }
            }
          }
        }
        .item-bottom{
          margin: 15px 0 0;
          height: 20px;
          overflow: hidden;
          .bottom-tip{
            float: left;
            margin-right: 15px;
            line-height: 20px;
            cursor: pointer;
            color: #8590a6;
            img{
              margin: 3px 0;
              width: 14px;
              height: 14px;
              &:first-child{
                display: none;
              }
              &:last-child{
                display: inline-block;
              }
            }
            &:hover{
              color: #666;
              img{
                &:first-child{
                  display: inline-block;
                }
                &:last-child{
                  display: none;
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>
