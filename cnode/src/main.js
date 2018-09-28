// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import fontIcon from './assets/js/font-icon'
import axios from 'axios'
Vue.config.productionTip = false
Vue.prototype.axios = axios
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
Vue.filter('tabFormatter',(item)=>{
  if(item.good){
    return "精华"
  }else if(item.top){
    return "置顶"
  }else if(item.tab === 'share'){
    return "分享"
  }else if(item.tab === 'ask'){
    return "问答"
  }else if(item.tab === 'job'){
    return "招聘"
  }
})
Vue.filter('timeFormatter',(oldtime)=>{
  var oldTime = new Date(oldtime).getTime()
  var now = new Date().getTime()
  var timeDistance = now - oldTime
  if(timeDistance/1000 <30){
    return "刚刚"
  }else if(timeDistance/1000 <60){
    return parseInt(timeDistance/1000) +" 秒前"
  }else if(timeDistance/1000/60 <60){
    return parseInt(timeDistance/1000/60) +" 分钟前"
  }else if(timeDistance/1000/60/60 <24){
    return parseInt(timeDistance/1000/60/60) +" 小时前"
  }else if(timeDistance/1000/60/60/24 <30){
    return parseInt(timeDistance/1000/60/60/24) +" 天前"
  }else if(timeDistance/1000/60/60/24/30 <12){
    return parseInt(timeDistance/1000/60/60/24/30) +" 月前"
  }else{
    return parseInt(timeDistance/1000/60/60/24/30/12) +" 年前"
  }
})
