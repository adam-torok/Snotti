require('./bootstrap');
import Vue from 'vue'
import VueRouter from 'vue-router'
import { routes } from './routes';
import MainApp from './Main'
Vue.use(VueRouter);

const router = new VueRouter({
    routes,
    mode: 'history'
})

const app = new Vue({
    router,
    el: '#app',
    components: {
        MainApp
    }
});
