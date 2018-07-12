import Vue from 'vue'
import Router from 'vue-router'
import App from '../App.vue'

Vue.use(Router)

const findMusic = r => require.ensure([], () => r(require('../pages/findMusic/findMusic.vue')), 'findMusic')
const musicDetail = r => require.ensure([], () => r(require('../pages/misucDetail/misucDetail.vue')), 'musicDetail')

export default new Router({
    mode: 'history',
    routes: [{
        path: '/',
        component: App,
        children: [{
                path: '',
                redirect: to => {
                    return '/findMusic'
                }
            },
            {
                path: '/findMusic',
                component: findMusic,
                props: (route) => {
                    query: route.query.q
                }
            },
            { path: '/detail/:name', component: musicDetail }
        ]
    }]
})