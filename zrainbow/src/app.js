/** Step One: 导入Vue核心文件 **/
import Vue from 'vue';
/** Step Two: App.vue文件 **/
import App from './App.vue';

/** Step Three: 使用router-vue **/
import home from './components/Home.vue';
import shopcar from './components/shopcar/car.vue';
import vueRouter from 'vue-router';
Vue.use(vueRouter);
var route = new vueRouter({
    linkActiveClass: 'mui-active', // 链接被激活是修改默认样式
    routes: [
        { path: '/', redirect: '/home' },
        { path: '/home', component: home },
        { path: '/shopcar', component: shopcar }
    ]
});

/** 引入Mint-UI */
import mintui from 'mint-ui';

import 'mint-ui/lib/style.min.css';
import '../statics/scss/mintui-btn-color-refractor.scss'; //核心，多了这一行用上边的样式覆盖默认的primary颜色
/* 引入MUI */
import '../statics/mui/css/mui.min.css';
import '../statics/css/site.css';
Vue.use(mintui);

// 将vue-resource在vue中绑定，自动在vue对象实例上注入一个$http对象就可以使用ajax调用了
import vueResource from 'vue-resource';
Vue.use(vueResource);
/** Step Four: 将路由绑定到Vue实例对象上 **/
new Vue({
    el: "#app",
    router: route,
    render: h => h(App)
});