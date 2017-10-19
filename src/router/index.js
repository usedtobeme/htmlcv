import Vue from 'vue';
import Router from 'vue-router';
import ContentManager from '@/components/ContentManager';

Vue.use(Router);

export default new Router({
    routes: [{
        path: '/',
        name: 'Edit',
        component: ContentManager,
    }, ],
});