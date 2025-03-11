import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
    },
    {
      path: '/collection',
      name: 'collection',
      component: () => import('../views/CollectionView.vue'),
    },
    {
      path: '/add-wine',
      name: 'add-wine',
      component: () => import('../views/AddWineView.vue'),
    },
  ],
})

export default router
