import Vue from 'vue'
import Router from 'vue-router'
import postList from '../components/postList'
import Article from '../components/Article'
import sideBar from '../components/sideBar'
import userInfo from '../components/userInfo'
Vue.use(Router)

export default new Router({
  routes: [
    {
      name: 'Article',
      path: '/Article/:id/:name',
      components:{
        main:Article,
        sideBar:sideBar
      }
    },
    {
      name: 'root',
      path: '/',
      components:{
        main:postList
      }
    },
    {
      name:'userInfo',
      path:'/userInfo/:name',
      components:{
        main:userInfo
      }
    }
  ]
})
