import { createRouter, createWebHistory } from 'vue-router';
import ProductList from '@/views/ProductList.vue';
import ShoppingCart from '@/views/ShoppingCart.vue';
import ShoppingCheckout from '@/views/ShoppingCheckout.vue';
import ShoppingBuySuccess from '@/views/ShoppingBuySuccess.vue';
import NotFound from '@/views/NotFound.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'productList',
      component: ProductList,
    },
    {
      path: '/shopping-cart',
      name: 'shoppingCart',
      component:ShoppingCart,
    },
    {
      path: '/shoppingcheck',
      name: 'shoppingCheckout',
      component:ShoppingCheckout,
    },
    {
      path: '/buysuccess',
      name: 'shoppingBuySuccess',
      component:ShoppingBuySuccess,
    },
    {
      path: '/:pathMatch(.*)',
      name: 'notFound',
      component: NotFound,
    },
  ],
});

export default router;
