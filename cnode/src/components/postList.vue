<template>
  <div id="list-container">
    <div id="main">
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
                <img :src="item.author.avatar_url" alt="">
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
                  &nbsp;{{item.title}}
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
        name: "postList",
        data(){
          return {
            items:[]
          }
        },
        beforeMount(){
          this.getData()
        },
        methods:{
          getData(){
            this.axios.get('https://cnodejs.org/api/v1/topics',{
              params:{
                page:1,
                limit:20
              }
            })
              .then((data)=>{
                console.log(data.data.data);
                this.items = data.data.data
              })
              .catch((err)=>{
                console.log(err);
              })
          }
        }
    }
</script>

<style scoped>
#list-container{
  padding: 20px 0px;
  background-color: #E1E1E1;

}
#main{
  width: 80%;
  font-size: 14px;
  margin: 0 auto;
}
#main #header{
  padding: 10px;
  border-radius: 3px 3px 0px 0px;
  background-color: #f6f6f6;
}
#main #header a.picked{
  background-color: #80bd01;
  color: #fff;
  padding: 3px 4px;
  border-radius: 3px;
}
#main #header a{
  text-decoration: none;
  margin: 0 10px;
  color: #80bd01;
}
#main #header a:hover{
  color:#005580;
}
#main #content{
  background-color: #fff;
}
#main #content ul li{
  border-top: 1px solid #F0F0F0;
  list-style-type: none;
  height: 30px;
  display: flex;
  align-items: center;
  padding: 10px;
  display: flex;
}
li .left-wrapper{
  display: flex;
  /*flex-grow: 1;*/
  width:calc(100% - 78px);
  /*border:1px solid red;*/

}
li .left-wrapper .author-img-wrapper{}
li .left-wrapper .author-img-wrapper img{
  width: 30px;
  height: 30px;
}
li .left-wrapper .reply-wrapper{
  width: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 10px;
}
li .left-wrapper .reply-wrapper .reply_count{
  color: #9e78c0;
  font-size: 14px;
}
li .left-wrapper .reply-wrapper .visit_count{
  font-size: 10px;
  color: #b4b4b4;
}

li .left-wrapper .title-wrapper{
  display: flex;
  justify-content: center;
  align-items: center;
  /*border:1px solid red;*/
  flex-grow: 1;
}
li .left-wrapper .title-wrapper .title-type{
  background-color: #e5e5e5;
  color: #999;
  padding: 2px 4px;
  font-size: 12px;
  border-radius: 3px;
  width: 26px;
}
.left-wrapper .title-wrapper .title-type.title_great{
  background: #80bd01;
  color: #fff;
}
li .left-wrapper .title-wrapper .title-content{
  font-size: 16px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  /*border:1px solid blue;*/
  flex-grow: 1;
  width:0px;
}
li .left-wrapper .title-wrapper .title-content:hover{
  text-decoration: underline;
}
li .last-time-wrapper{
  width:70px;
  text-align: right;
  font-size: 11px;
  color: #778087;;
}
</style>
