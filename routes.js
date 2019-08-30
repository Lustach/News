import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import Main from './src/components/Main.vue'
import Adminka from './src/components/Adminka.vue'
import LookingPage from './src/components/LookingPage.vue'
import AddandEdit from './src/components/AddandEdit.vue'
const routes = [{
        path: '/Main',
        component: Main
    },
    
    {
        path: '',
        component: Main
    },
    {
        path: '/Adminka',
        component: Adminka
    },
    {
        path:'/LookingPage',
        component:LookingPage
    },
    {
        path:'/AddandEdit',
        component:AddandEdit
    }

]

export const router = new VueRouter({
    routes: routes,
    mode: 'history' //
})