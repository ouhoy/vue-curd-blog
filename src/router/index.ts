import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Home',
        component: HomeView
    },
    {
        path: '/posts/:id',
        name: 'Details',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "Details" */ '../views/Details.vue')
    },
    {
        path: '/tag/:tag',
        name: 'Tag',
        component: () => import(/* webpackChunkName: "Tag" */ '../views/Tag.vue')
    }
    ,
    {
        path: '/create',
        name: 'CreatePost',
        component: () => import(/* webpackChunkName: "CreatePost" */ '../views/CreatePost.vue')
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
