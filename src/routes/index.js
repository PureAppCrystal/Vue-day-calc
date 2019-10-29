import Vue from 'vue'
import VueRouter from 'vue-router'


import LoginPageView from '@/views/LoginPageView'
import NotFountPage from '@/views/NotFoundPage'
import DayCalcView from '@/views/DayCalcView'
import DayCalcListView from '@/views/DayCalcListView'
import DayCalcDetailView from '@/views/DayCalcDetailView'
import DayCalcModifyView from '@/views/DayCalcModifyView'

Vue.config.devtools = true;
Vue.use(VueRouter);


const routes = [
    {
        path: '/',
        redirect: '/login'
    },
    {
        path: '/login',
        component: LoginPageView,
    },
    {
        path: '/dayCalc',
        component: DayCalcView,
        children: [
            {
                path: '/',
                redirect: '/dayCalc/list'
            },
            {
                path: 'list',
                component: DayCalcListView,
            },
            {
                path: 'detail',
                component: DayCalcDetailView,
            },
            
        ]
    },
    {
        path: '/dayCalc/insert',
        component: DayCalcModifyView,
    },
    {
        path: '/dayCalc/update',
        component: DayCalcModifyView,
    },
    {
        path: '*',
        component: NotFountPage
    },
    
]

export const router = new VueRouter({
    mode: 'history',
    routes
})


router.beforeEach( (to, from, next) => {
    const loginPage = ['/login'];
    const authRequired = !loginPage.includes(to.path);
    const userInfo = sessionStorage.getItem('user');

    if (authRequired && !userInfo) {
        return next('/login');
    }

    if (userInfo && loginPage.includes(to.path)) {
        if ( from.path==='/' ) {
            return next('/dayCalc')
        }
        return next(from.fullPath);
    }

    next();
})