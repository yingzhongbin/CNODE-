<template>
  <div id="list-container">
    <div class="main">
      <div id="header">
        <a href="#" class="picked">全部</a>
        <a href="#">精华</a>
        <a href="#">分享</a>
        <a href="#">问答</a>
        <a href="#">招聘</a>
        <a href="#">客户端测试</a>
      </div>
      <div id="content">
        <ul>
          <li v-for="item in items">
            <div class="left-wrapper">
              <a class="author-img-wrapper">
                <router-link :to="{name:'userInfo',params:{name:item.author.loginname}}">
                   <img :src="item.author.avatar_url" alt="">
                </router-link>
              </a>
              <span class="reply-wrapper">
              <span class="reply_count">
                {{item.reply_count}}
              </span>
              <span>/</span>
              <span class="visit_count">
                {{item.visit_count}}
              </span>
            </span>
              <span class="title-wrapper">
                <span :class="['title-type',{'title_great':(item.top || item.good)}]">
                    {{item | tabFormatter}}
                </span>
                <div class="title-content">
                  <a>
                    &nbsp;<router-link :to="{name:'Article',params:{id:item.id,name:item.author.loginname}}">
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
        <Pagination @sendMsg="HandleMsg"/>
      </div>
    </div>
  </div>
</template>

<script>
    import Pagination from "./pagination";
    export default {
        name: "postList",
        components: {Pagination},
        data(){
            return {
            items:[],
            page:1
          }
        },
        beforeMount(){
          this.getData()
        },
        // watch:{
        //   '$route'(){
        //     console.log(this.$route.params.page);
        //     this.HandleMsg(this.$route.params.page)
        //     console.log(5);
        //   }
        // },
        methods:{
          getData(){
            this.axios.get('https://cnodejs.org/api/v1/topics',{
              params:{
                page:this.page,
                limit:40
              }
            })
              .then((data)=>{
                console.log(data.data.data);
                this.items = data.data.data
              })
              .catch((err)=>{
                console.log(err);
              })
          },
          HandleMsg(num){
            this.page = num
            this.getData()
            // console.log(num);
          },
        }
    }
</script>

<style scoped>
#list-container{
  padding: 20px 0px;
  background-color: #E1E1E1;
  width: 100%;
}
.main{
  width: 100%;
  font-size: 14px;
  margin: 0 auto;
}
.main #header{
  padding: 10px;
  border-radius: 3px 3px 0px 0px;
  background-color: #f6f6f6;
}
.main #header a.picked{
  background-color: #80bd01;
  color: #fff;
  padding: 3px 4px;
  border-radius: 3px;
}
.main #header a{
  text-decoration: none;
  margin: 0 10px;
  color: #80bd01;
}
.main #header a:hover{
  color:#005580;
}
.main #content{
  background-color: #fff;
}
.main #content ul li{
  border-top: 1px solid #F0F0F0;
  list-style-type: none;
  height: 30px;
  display: flex;
  align-items: center;
  padding: 10px;
  display: flex;
}
</style>
