import Vue from 'vue';
import Router from 'vue-router';
import App from '@/App';
import design from '@/components/design';
import display from '@/components/display';


Vue.use(Router);


export default new Router({
    routes: [{ 
        path: '/',
        name: 'App',
        component: App,
        redirect: { name: 'display' },
    }, {
        path: '/display',
        name: 'display',
        component: display
    },{
        path: '/design',
        name: 'design',
        component: design
    }]
});