<template>
  <div id="top">
    <div id="container">
      <div id="left">
        <a href="#">
          <router-link :to="{name:'root'}">
            <img src="https://static2.cnodejs.org/public/images/cnodejs_light.svg" alt="">
          </router-link>
        </a>
        <div id="input-container">
          <input type="text" v-on:focus="focus" v-on:blur="blur" v-bind:class="{bg:isActive}">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-search"></use>
          </svg>
        </div>

      </div>
     <div id="right">
       <ul>
         <li>
           <a href="#">
           <router-link :to="{name:'root'}">首页</router-link>
           </a>
         </li>
         <li><a href="#">新手入门</a></li>
         <li><a href="#">API</a></li>
         <li><a href="#">关于</a></li>
         <li><a href="#">注册</a></li>
         <li><a href="#">登录</a></li>
       </ul>
     </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "top",
        methods:{
          focus(){
            this.isActive = true;
          },
          blur(){
            this.isActive = false;
          }
        },
        data(){
          return {
            isActive:false
          }
        },
      watch:{
      }
    }
</script>

<style scoped>
#top{
  height: 50px;
  background-color: #444444;
  display: flex;
  justify-content: center;
  align-items: center;
}
#top #container{
  height: 40px;
  min-width: 960px;
  max-width: 1400px;
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  /*border: 1px solid green;*/
}
#top #container #left{
  /*border: 1px solid red;*/
  padding: 3px 20px;
  display: flex;
  align-items: center;
}
#top #container #right{
  /*border: 1px solid red;*/

}
#left a{
  margin-left: -40px;
  padding: 3px 20px;
  width: 120px;
  height: 34px;
  display: block;
}
#left a img{
  height: 28px;
}
#left #input-container{
  position: relative;

}
#left #input-container input{
  border-radius: 15px;
  outline: none;
  border: 0px;
  margin-top: 2px;
  padding: 3px 5px 3px 22px;
  width: 206px;
  height: 20px;
  background-color: #888888;
  padding-left: 25px;
  color: #666;
  transition: all .5s;
}
#left #input-container input.bg,#left #input-container input:hover{
  background-color: #FFFFFF;
}
#left #input-container .icon{
  margin-top: 4px;
  position: absolute;
  left: 7px;
  top: 4px;
}
 #right ul{
    list-style-type: none;
    display: flex;
  }
#right ul li{

}
#right ul li a{
    text-decoration: none;
    color:#ccc;
    font-size: 13px;
    padding: 10px 15px;
  }

.icon{
  color:#5A5B5A;
}
</style>
