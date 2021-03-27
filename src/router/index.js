import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/Home.vue')
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
        fetch('https://api.spoonacular.com/recipes/random?apiKey=' + 'fe8b957f94b04c669fddfe4ce4fed435' + '&number=1&addRecipeInformation=true')
          .then(res => {
            res.json()
              .then(res => {
                  console.log(res);
                  next({ name: 'recipe', replace: true, params: { id: res.recipes[0].id }});
              })
              .catch(error => {
                console.log(error);
              });
          })
          .catch(error => {
            console.log(error);
          });
      
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
