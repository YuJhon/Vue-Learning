// 1.0 导入vue核心包
import Vue from 'vue';

// 2.0 导入App.vue的vue对象
import App from './App.vue';

// 3.0 集成vue-router
import vueRouter from 'vue-router';
// 3.0.1 将vueRouter对象绑定到Vue对象上
Vue.use(vueRouter);
// 3.0.2 导入路由规则对应的组件对象
import login from './components/account/login.vue';
import register from './components/account/register.vue';
// 3.0.3 定义路由规则
var router1 = new vueRouter({
    routes: [{
        path: '/login',
        component: login
    }, {
        path: '/register',
        component: register
    }]
});
// 4.0 注册mint-ui组件 （http://mint-ui.github.io/#!/zh-cn）
import mintui from 'mint-ui';
// 4.0.1 导入mint-ui的样式
import 'mint-ui/lib/style.min.css';
// 4.0.1 在Vue中全局使用
Vue.use(mintui);

// 4.0.2 导入mui
import './statics/mui/css/mui.min.css';

// 5.0 利用Vue对象进行解析和渲染
new Vue({
    el: "#app",
    router: router1,
    //render: function(create) { create(App) } // es5写法
    render: c => c(App) // es6写法  => goes to
});