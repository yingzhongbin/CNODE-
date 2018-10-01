<template>
  <div class="sideBar">
    <div class="user-intro">
      <div class="info-title">
        <span>个人信息</span>
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
          <!--<p>注册时间 {{userinfo.create_at | timeFormatter}}</p>-->
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
              <span class="title-wrapper">
                <div class="title-content sidebar">
                  <!--{{item.author.loginname}}-->
                    &nbsp;<router-link :to="{name:'Article',params:{name:item.author.loginname,id:item.id}}">
                         {{item.title}}
                      </router-link>
                </div>
              </span>
            </div>
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
              <span class="title-wrapper">
                <div class="title-content sidebar">
                  <a>
                    &nbsp;<router-link :to="{name:'Article',params:{name:item.author.loginname,id:item.id}}">
                       {{item.title}}
                    </router-link>
                  </a>
                </div>
              </span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "sideBar",
        data(){
          return {
            userinfo:{
              recent_topics:[],
              recent_replies:[]
            }
          }
        },
        watch:{
          '$route'(){
            this.getUserInfo()
          }
        },
        computed:{
          recent_topicsLimit(){
            return this.userinfo.recent_topics.slice(0,5)
          },
          recent_repliesLimit(){
            return this.userinfo.recent_replies.slice(0,5)
          }
        },
        beforeMount(){
          this.getUserInfo()
        },
        methods:{
          getUserInfo(){
            this.axios.get(`https://cnodejs.org/api/v1/user/${this.$route.params.name}`)
              .then((data)=>{
                this.userinfo = data.data.data
                console.log("userinfo");
                console.log(this.userinfo);
              })
              .catch((err)=>{
                console.log(err);
              })
          }
        }
    }
</script>

<style scoped>
  @media (max-width: 979px){
    .sideBar{
      display: none;
    }
  }
  .sideBar{
    width: 290px;
    margin: 0 auto;
    padding:15px 0;
    background-color: #E1E1E1;
  }
  .sideBar>div{
    margin-bottom: 13px;
  }
  .sideBar .user-intro{}
  .sideBar .recent_replies{}
  .sideBar .recent_topics{}
  /*共同样式*/
  .sideBar .info-title{
    padding: 10px;
    background-color: #F6F6F6;
    border-radius: 3px 3px 0 0;
  }
  .sideBar .info-title span{
    color: #444;
    font-size: 13px;
  }
  .sideBar .info-main{
    padding: 10px;
    background-color: #fff;
    border-radius: 0 0 3px 3px;

  }
  .sideBar .info-main.topics{
    padding: 0px;

  }
  .sideBar .info-main .info-main-top{
    display: flex;
  }
  .sideBar .info-main .info-main-top div:first-child img{
    width: 48px;
    height:48px;
  }
  .sideBar .info-main .info-main-top div:nth-child(2){
    margin-top: 15px;
    margin-left: 10px;
    color: #778087;
    font-size: 16px;
  }
  .sideBar .info-main .info-main-middle{}

  .sideBar .info-main .info-main-middle p:first-child{
    font-size: 14px;
    margin: 10px 0px;
  }
  .sideBar .info-main .info-main-middle p:nth-child(2){
    color:#ababab;
    font-size: 14px;
    margin-bottom: 10px;
  }
</style>
