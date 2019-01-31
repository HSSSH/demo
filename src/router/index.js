import Vue from 'vue';
import Router from 'vue-router';
import App from '@/App';
import design from '@/components/design';
import display from '@/components/display';
import test from '@/components/test';


Vue.use(Router);


export default new Router({
    routes: [{ 
        path: '/',
        name: 'App',
        component: App,
        redirect: { name: 'design' },
    },{
        path: '/design',
        name: 'design',
        component: design
    },{
        path: '/display',
        name: 'display',
        component: display
    },{
        path: '/test',
        name: 'test',
        component: test
    }]
});