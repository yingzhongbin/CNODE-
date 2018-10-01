<template>
  <div id="article-content">
    <div id="article">
      <div id="header">
          <div class="title-header">
            <span :class="['title-type',{'title_great':(item.top || item.good)}]">
                {{item | tabFormatter}}
            </span>
            <span class="title-msg">{{item.title}}</span>
          </div>
          <div class="title-detail">
            <span>• 发布于 {{item.create_at | timeFormatter}}</span>
            <span>• 作者 {{item.author.loginname}}</span>
            <span>• {{item.visit_count}} 次浏览</span>
            <span>• 来自 {{ item | labelFormatter}}</span>
          </div>
      </div>
      <div id="content" v-html="item.content" class="markdown-body">

      </div>
      <div id="replies">
          <div class="replies-title">{{item.replies.length}}&nbsp;回复</div>
          <div class="replies-content markdown-body">
            <div v-for="(reply,index) in item.replies"  class="replies-content-item">
              <router-link :to="{name:'userInfo',params:{name:reply.author.loginname}}">
                <img :src= 'reply.author.avatar_url' alt="">
              </router-link>
              <div class="reply-top">
                <span class="reply-top-author">{{reply.author.loginname}}</span>
                <span class="reply-top-info">
                  <span>{{index+1}}楼</span>
                  <span>•{{reply.create_at | timeFormatter}}</span>
                </span>
              </div>
              <div class="reply-bottom">
                <span v-html="reply.content"></span>
              </div>
            </div>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Article",
        beforeMount(){
          this.getArticle()
        },
        data(){
          return {
            item:{
              author:{
                loginname:''
              },
              replies:[],
            },
          }
        },
        beforeMount(){
            this.getArticle()
        },
        computed:{

        },
        methods:{
          getArticle(){
            this.axios.get(`https://cnodejs.org/api/v1/topic/${this.$route.params.id}`)
              .then((data)=>{
                this.item = data.data.data;
                console.log(this.item.author.loginname);
                // this.$root.bus.$emit("loaded",true)
              })
              .catch((err)=>{
                console.log(err);
              })
          }
        },
      watch:{
        '$route'(){
          this.getArticle()
        }
      },
    }
</script>

<style>

  @import url('../assets/css/github-markdown.css');
  @import url('../assets/css/mark-down.css');
  .markdown-body pre code{
    white-space:pre-wrap;
  }
  #article-content{
    background-color: #E1E1E1;
    /*width:90%;*/
    margin-right: 15px;
    margin-top: 15px;
    flex-grow: 1;
  }

  #article{
    /*width: 70%;*/
    background-color: #E1E1E1;
    margin-bottom: 300px;
    flex-grow: 1;
  }
  #article #header{
    padding: 10px;
    background-color: #fff;
    border-bottom: 1px solid #E5E5E5;
    border-radius: 3px 3px 0 0;
    background-color: #fff;
  }
  #article #header .title-header{
    margin:8px 0px;
  }
  #article #header .title-detail{
    font-size: 12px;
    color: #838383;
  }
  #article #header .title-header .title-type{
    background-color: #e5e5e5;
    color: #999;
    padding: 2px 4px;
    font-size: 12px;
    border-radius: 3px;
    line-height: 2em;
  }
  #article #header .title-header .title-type.title_great{
    background: #80bd01;
    color: #fff;
  }
  #article #header .title-header .title-msg{
    font-size: 22px;
    font-weight: 700;
    margin-left: 6px;
  }
  #article #content{
    padding: 25px 20px;
    border-radius: 0 0 3px 3px;
    margin-bottom: 13px;
    background-color: #fff;
  }
  #article #replies{
    background-color: #fff;
  }
  #article #replies .replies-title{
    padding: 10px;
    background-color: #F6F6F6;
    font-size: 14px;
  }
  #article #replies .replies-content{
    display: flex;
    flex-direction: column;
  }
  #article #replies .replies-content .replies-content-item{
      border-bottom:1px solid #F0F0F0;
      padding: 10px;

  }
  .replies-content-item{
      position: relative;
  }
  .replies-content-item img{
    width: 30px;
    height: 30px;
    position: absolute;
    left: 10px;
    top:10px;
  }
  .replies-content-item .reply-top{
      margin-left: 40px;
      height: 21px;
  }
  .replies-content-item .reply-top .reply-top-author{
    font-size: 12px;
    font-weight: 700;
    color: #666;
  }
  .replies-content-item .reply-top .reply-top-info{
    font-size: 11px;
    color: #08c;
  }
  #article #replies .replies-content .reply-bottom{
      padding-left: 50px;
      margin-bottom: 15px;
  }
</style>
