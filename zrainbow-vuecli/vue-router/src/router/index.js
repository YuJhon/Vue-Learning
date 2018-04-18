import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import HI from '@/components/HI'
import HI1 from '@/components/HI1'
import HI2 from '@/components/HI2'
import Left from '@/components/Left'
import Right from '@/components/Right'
import Params from '@/components/Params'
import Alias from '@/components/Alias'
import Error from '@/components/Error'

Vue.use(Router)

export default new Router({
    /* 去掉url中的#，默认是hash */
    mode: 'history',
    routes: [{
            path: '/',
            name: 'Hello',
            components: {
                default: HelloWorld,
                left: Left,
                right: Right
            }
        },
        {
            path: '/hi',
            component: HI,
            children: [
                { path: '/', name: 'Hello/HI', component: HI },
                { path: 'hi1', name: 'hi1', component: HI1 },
                { path: 'hi2', name: 'hi2', component: HI2 }
            ]
        },
        {
            path: '/params/:newsId(\\d+)/:newsTitle',
            name: 'params',
            component: Params,
            beforeEnter: (to, from, next) => {
                console.log('我进入了params模板');
                console.log(to);
                console.log(from);
                next();
            }
        },
        {
            path: "/goHome",
            redirect: '/'
        },
        {
            path: "/goParams/:newsId(\\d+)/:newsTitle",
            redirect: '/params/:newsId(\\d+)/:newsTitle'
        },
        {
            path: '/alias',
            name: 'alias',
            component: Alias,
            alias: '/jhonrain'
        },
        {
            path: '*',
            component: Error
        }
    ]
})