/** 1.Step One: 导入Vue核心文件 **/
import Vue from 'vue';
/** 2.Step Two: App.vue文件 **/
import App from './App.vue';

/** 3.Step Three: 使用router-vue **/
import home from './components/Home.vue';
import shopCar from './components/shopcar/Car.vue';
import newsList from './components/news/NewsList.vue';
import newsInfo from './components/news/NewsInfo.vue';
import vueRouter from 'vue-router';
Vue.use(vueRouter);
var route = new vueRouter({
    // 链接被激活是修改默认样式
    linkActiveClass: 'mui-active',
    // 路由mapping
    routes: [
        { path: '/', redirect: '/home' }, // 默认跳转到首页
        { path: '/home', component: home }, // 首页
        { path: '/news/newslist', component: newsList }, // 资讯列表
        { path: '/news/newsInfo/:id', component: newsInfo }, // 资讯详情
        { path: '/shopcar', component: shopCar } // 购物车
    ]
});

/** 4.引入Mint-UI */
import mintui from 'mint-ui';

import 'mint-ui/lib/style.min.css';
import '../statics/scss/mintui-btn-color-refractor.scss'; //核心，多了这一行用上边的样式覆盖默认的primary颜色
/* 5.引入MUI */
import '../statics/mui/css/mui.min.css';
import '../statics/css/site.css';
Vue.use(mintui);

// 6.将vue-resource在vue中绑定，自动在vue对象实例上注入一个$http对象就可以使用ajax调用了
import vueResource from 'vue-resource';
Vue.use(vueResource);

// 7.定义全局过滤器
// npm install moment --save
import moment from 'moment';
Vue.filter('datefmt', function(input, fmtStr) {
    return moment(input).format(fmtStr);
});
/** 8.Step Four: 将路由绑定到Vue实例对象上 **/
new Vue({
    el: "#app",
    router: route,
    render: h => h(App)
});