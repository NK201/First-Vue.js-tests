import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import About from './views/About';
import Testpage from './views/Testpage';

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
            path: '/testpage',
            name: 'testpage',
            component: Testpage
        }

    ]
})