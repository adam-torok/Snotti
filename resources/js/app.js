require('./bootstrap');

import svgSpriteLoader from './helpers/svg-sprite-loader'

import Vue from 'vue'
import VueRouter from 'vue-router'
import { routes } from './routes';
import { initialize } from './helpers/init';

import store from './store'
import MainApp from './Main'
Vue.use(VueRouter)

const __svg__ = { path: '../icons/*.svg', name: '../icons/[hash].sprite.svg' }
svgSpriteLoader(__svg__.filename)

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
