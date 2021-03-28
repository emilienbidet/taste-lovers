import Vue from 'vue'
import VueRouter from 'vue-router'
import * as SpoonacularRecipes from '@/controllers/SpoonacularRecipes.js'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/favorites',
    name: 'favorites',
    component: () => import('../views/Favorites.vue')
  },
  {
    path: '/explore',
    name: 'explore',
    component: () => import('../views/Explore.vue')
  },
  {
    path: '/suprise',
    name: 'suprise',
    component: () => import('../views/Suprise.vue'),
    beforeEnter: (to, from, next) => {
      SpoonacularRecipes.getRandomRecipes(1)
        .then((res) => {
          next({ name: 'recipe', replace: true, params: { id: res[0].id }});
        })
        .catch(() => {
          next('/');
        })
        .finally();
    },
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/About.vue')
  },
  {
    path: '/recipe/:id',
    name: 'recipe',
    component: () => import('../views/Recipe.vue')
  },
  {
    path: '*',
    name: 'error 404',
    component: () => import('../views/Error 404.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
