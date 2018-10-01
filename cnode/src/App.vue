<template>
  <div id="app">
    <top />
    <div id="main">
      <router-view name="main"></router-view>
      <router-view name="sideBar"></router-view>
    </div>
  </div>
</template>
<script>
  import top from './components/top'
  import postList from './components/postList'
  import Article from './components/Article'
  import sideBar from './components/sideBar'
  import userInfo from './components/userInfo'
  import pagination from './components/pagination'
  import Vue from 'vue'
  export default {
  name: 'App',
  components:{
    top,
    postList,
    Article,
    userInfo,
    sideBar,
    pagination,
  },
  data(){
    return {
    }
  },
  computed:{
  },
  // created(){
  //   this.$root.bus.$on("mainLoaded",()=>{
  //     console.log(9);
  //     this.mainLoaded = true
  //   })
  //   this.$root.bus.$on("sidebarLoaded",()=>{
  //     console.log(8);
  //     this.sidebarLoaded = true
  //   })
  // }
}
</script>

<style>

  *{
    padding: 0;
    margin: 0;
    font-family: "Helvetica Neue","Luxi Sans","DejaVu Sans",Tahoma,"Hiragino Sans GB",STHeiti,sans-serif!important;
  }
  body{
    background-color: #E1E1E1;
  }
  #main{
    padding: 15px auto;
    display: flex;
    width:80%;
    margin: 0 auto;
  }
  .icon {
    width: 1em; height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }
  ul li{
    /*border-top: 1px solid #F0F0F0;*/
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
    width: 28px;
    text-align: center;
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
    /*min-width: 10px;*/
  }
  li .left-wrapper .title-wrapper .title-content a{
    text-decoration: none;
    color: #333;
  }
  li .left-wrapper .title-wrapper .title-content a:hover{
    text-decoration: underline;
  }
  li .last-time-wrapper{
    width:70px;
    text-align: right;
    font-size: 11px;
    color: #778087;;
  }
  li .left-wrapper .title-wrapper .title-content.info a{
    color: #08c;
  }
  li .left-wrapper .title-wrapper .title-content.info a:hover{
    color: #005580;
  }
  li .left-wrapper .title-wrapper .title-content.sidebar{
    width:270px;
  }
  li .left-wrapper .title-wrapper .title-content.sidebar a{
    font-size: 14px;
    color: #778087;
  }
  li .left-wrapper .title-wrapper .title-content.sidebar a:hover{
    text-decoration: none;
  }

</style>
