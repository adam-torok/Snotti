require('./bootstrap');
import Vue from 'vue'
import VueRouter from 'vue-router'
import { routes } from './routes';
import MainApp from './Main'
Vue.use(VueRouter);

import svgSpriteLoader from './helpers/svg-sprite-loader'
const __svg__ = { path: '../icons/*.svg', name: '../icons/[hash].sprite.svg' }
svgSpriteLoader(__svg__.filename)

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
