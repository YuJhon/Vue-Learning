import Vue from 'vue';
import App from './App.vue';

import login from './components/account/login.vue';
import register from './components/account/register.vue';

import vueRouter from 'vue-router';
//将vueRouter对象绑定到Vue对象上
Vue.use(vueRouter);
var router1 = new vueRouter({
    routes: [{
        path: '/login',
        component: login
    }, {
        path: '/register',
        component: register
    }]
});

new Vue({
    el: "#app",
    router: router1,
    //render: function(create) { create(App) } // es5写法
    render: c => c(App) // es6写法  => goes to
});