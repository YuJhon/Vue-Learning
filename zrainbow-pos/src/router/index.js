import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/page/Home'
import Pos from '@/components/page/Pos'

import Shop from '@/components/page/Shop'
import Goods from '@/components/page/Goods'
import Member from '@/components/page/Member'
import Statistics from '@/components/page/Statistics'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'Home',
            component: Home
        }, {
            path: '/pos',
            name: 'Pos',
            component: Pos
        },
        {
            path: '/shop',
            name: 'Shop',
            component: Shop
        },
        {
            path: '/goods',
            name: 'Goods',
            component: Goods
        },
        {
            path: '/member',
            name: 'Member',
            component: Member
        },
        {
            path: '/statistics',
            name: 'Statistics',
            component: Statistics
        }
    ]
})