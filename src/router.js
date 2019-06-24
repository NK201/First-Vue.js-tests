import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import About from './views/About';
import Nasa from './views/Nasa';

Vue.use(Router);

export default new Router({
    routes: [{
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/about',
            name: 'about',
            component: About
        },
        {
            path: '/nasa',
            name: 'nasa',
            component: Nasa
        }

    ]
})