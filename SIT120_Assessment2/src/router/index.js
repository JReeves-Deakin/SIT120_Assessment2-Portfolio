import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    { path: '/', redirect: { path: '/Week1' } },
    {
        path: '/Week1',
        name: 'week1',
        component: () =>
            import ('../views/Week1.vue')
    },
    {
        path: '/Week2',
        name: 'week2',
        component: () =>
            import ('../views/Week2.vue'),
    },
    {
        path: '/Week3',
        name: 'week3',
        component: () =>
            import ('../views/Week3.vue')

    },
    {
        path: '/Week4',
        name: 'week4',
        component: () =>
            import ('../views/Week4.vue')
    },
    {
        path: '/Week5',
        name: 'week5',
        component: () =>
            import ('../views/Week5.vue')
    },
    {
        path: '/Week6',
        name: 'week6',
        component: () =>
            import ('../views/Week6.vue')
    },
    {
        path: '/Week7',
        name: 'week7',
        component: () =>
            import ('../views/Week7.vue'),
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router