require('./bootstrap');

import Vue from 'vue'
import VueRouter from 'vue-router'
import { routes } from './routes';
import { initialize } from './helpers/init';

import store from './store'
import MainApp from './Main'
Vue.use(VueRouter)


const router = new VueRouter({
    routes,
    mode: 'history'
})

initialize(store,router);

const app = new Vue({
    router,
    store,
    el: '#app',
    components: {
        MainApp
    }
});
