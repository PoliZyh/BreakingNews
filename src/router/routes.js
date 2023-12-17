


const routes = [
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        name: 'home',
        component: () => import('@/views/Home/index.vue')
    },
    {
        path: '/news',
        name: 'news',
        component: () => import('@/views/News/index.vue')
    },
    {
        path: '/about/:category',
        name: 'about',
        component: () => import('@/views/About/index.vue')
    }
]



export default routes