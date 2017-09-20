import Vue from 'vue';
import Router from 'vue-router';
import CV from '@/components/CV';
import ContentManager from '@/components/ContentManager';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'CV',
      component: CV,
    },
    {
      path: '/edit',
      name: 'Edit',
      component: ContentManager,
    },
  ],
});
