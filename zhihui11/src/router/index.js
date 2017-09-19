import Vue from 'vue'
import Router from 'vue-router'
import axios from 'axios'
import store from '../store/index'
import Home from '../components/common/Home'
import HomePage from '../components/page/homePage.vue'
import accounting from '../components/balanceAndrrears/accounting.vue'
import login from '../components/common/login'
import api from '../store/fetch/api'
import actions from '../store/actions/index'
let Base64 = require('js-base64').Base64;

// import homePage from '../components/page/homePage'

Vue.use(Router);
const router = new Router({
  //mode: 'history', //修改 hash 路由 但服务器没有配置 就不会显示不出网页
  base: __dirname,
  routes: [
    {
      path: '/',
      component: Home,
      children: [{
        path: '',
        component: HomePage,
        meta: {
          requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
        }
      },{
        path: '/accounting',
        component: accounting,
        meta: {
          requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
        }
      }]
    },
    {
      // 当 /?encryptLoginID=22eXVxaWFuZ3FpYW5n 匹配成功，
      // permissionDenied 会被渲染在 app 的 <router-view> 中
      path: '/login',
      component: login
    }
  ]
});
router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth) {  // 判断该路由是否需要登录权限
    // console.log(12);
    // console.log(store.state.editor.token);
    // console.log(window.sessionStorage.getItem('token'));
    if(store.state.editor.token=='' || store.state.editor.token==null){
      if(to.query.encryptLoginId){
        api.oldTurnApi({'encryptLoginId': to.query.encryptLoginId}).then(
          res=>{
            actions.loginDataSet(store,res);
          }
        );
      }else{
        router.push('/login')
      }
    }else{
      next()
    }
  }
  else {
    next();
  }
});
//console.log(this.$route.query)
export default router;
