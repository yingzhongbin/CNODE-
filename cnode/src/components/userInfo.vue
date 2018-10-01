<template>
    <div class="user-info">
      <div class="user-intro">
        <div class="info-title">
          <span>主页</span><span> /</span>
        </div>
        <div class="info-main">
          <div class="info-main-top">
            <div>
              <img :src="userinfo.avatar_url" alt="">
            </div>
            <div>{{userinfo.loginname}}</div>
          </div>
          <div class="info-main-middle">
            <p>{{userinfo.score}}积分</p>
            <p>注册时间 {{userinfo.create_at | timeFormatter}}</p>
          </div>
          <p class="info-main-bottom"></p>
        </div>
      </div>
      <div class="recent_replies">
        <div class="info-title">最近创建的话题</div>
        <div class="info-main topics">
          <ul>
            <li v-for="item in recent_topicsLimit">
              <div class="left-wrapper">
                <a class="author-img-wrapper">
                  <img :src="item.author.avatar_url" alt="">
                </a>
                <span class="title-wrapper">
                    <div class="title-content info">
                        &nbsp;<router-link :to="{name:'Article',params:{id:item.id}}">
                             {{item.title}}
                          </router-link>
                    </div>
                  </span>
              </div>
              <span class="last-time-wrapper">
              {{item.last_reply_at | timeFormatter}}
            </span>
            </li>
          </ul>
        </div>
      </div>
      <div class="recent_topics">
        <div class="info-title">最近参与的话题</div>
        <div class="info-main topics">
          <ul>
            <li v-for="item in recent_repliesLimit">
              <div class="left-wrapper">
                <a class="author-img-wrapper">
                  <router-link :to="{name:'userInfo',params:{name:item.author.loginname}}">
                    <img :src="item.author.avatar_url" alt="">
                  </router-link>
                </a>
                <span class="title-wrapper">
                    <div class="title-content info">
                      <a>
                        &nbsp;<router-link :to="{name:'Article',params:{id:item.id}}">
                           {{item.title}}
                        </router-link>
                      </a>
                    </div>
                </span>
              </div>
              <span class="last-time-wrapper">
              {{item.last_reply_at | timeFormatter}}
            </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "userInfo",
      data(){
          return {
              userinfo:{
                recent_topics:[],
                recent_replies:[]
              }
          }
      },
      beforeMount(){
          this.getUserInfo()
      },
      computed:{
        recent_topicsLimit(){
          return this.userinfo.recent_topics.slice(0,5)
        },
        recent_repliesLimit(){
          return this.userinfo.recent_replies.slice(0,5)
        }
      },
      methods:{
          getUserInfo(){
            console.log(this.$route.params.name);
            this.axios.get(`https://cnodejs.org/api/v1/user/${this.$route.params.name}`)
              .then((data)=>{
                this.userinfo = data.data.data
                console.log(this.userinfo);
              })
              .catch((err)=>{
                console.log(err);
              })
          }
      },
      watch:{
          $route(){
            this.getUserInfo()
          }
      }
    }
</script>

<style scoped>
  .user-info{
    width: 80%;
    margin: 0 auto;
    padding:15px 0;
    background-color: #E1E1E1;
  }
  .user-info>div{
    margin-bottom: 13px;
  }
  .user-info .user-intro{}
  .user-info .user-intro .user-intro-title{}
  .user-info .user-intro .user-intro-main{}
  .user-info .recent_replies{}
  .user-info .recent_topics{}
  /*共同样式*/
  .user-info .info-title{
      padding: 10px;
    background-color: #F6F6F6;
    border-radius: 3px 3px 0 0;
  }
  .user-info .info-title span{
    color: #80bd01;
    font-size: 14px;
  }
  .user-info .info-title span:nth-child(2){
    color: #ccc;
  }
  .user-info .info-main{
    padding: 10px;
    background-color: #fff;
    border-radius: 0 0 3px 3px;

  }
  .user-info .info-main.topics{
    padding: 0px;

  }
  .user-info .info-main .info-main-top{
    display: flex;
  }
  .user-info .info-main .info-main-top div:first-child img{
    width: 40px;
    height:40px;
    /*vertical-align:text-top;*/
  }
  .user-info .info-main .info-main-top div:nth-child(2){
    margin-top: 5px;
    margin-left: 10px;
    color:#778087;
    font-size: 14px;
    /*display: inline-block;*/
  }
  .user-info .info-main .info-main-middle{}

  .user-info .info-main .info-main-middle p:first-child{
    font-size: 14px;
    margin-bottom: 10px;
  }
  .user-info .info-main .info-main-middle p:nth-child(2){
      color:#ababab;
      font-size: 14px;
    margin-bottom: 10px;
  }
  .info-main{
    padding: 0;
  }
  .title-content{
  }

  .user-info .info-main .info-main-bottom{}
</style>
