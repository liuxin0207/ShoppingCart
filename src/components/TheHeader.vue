<!-- 頁首組件 -->

<script>
import iconShoppingCart from '@/assets/images/icon-shopping-cart.svg';

export default {
  data() {
    return {
      iconShoppingCart,
    };
  },
  methods: {

  },
};
</script>

<template>
  <header class="fixed top-0 flex justify-between items-center w-full h-[40px] px-5 bg-black text-yellow-200">
    <nav>
      <RouterLink to="/" title="前往商品列表(跳轉頁面)">商品列表</RouterLink>
    </nav>
    <div class="relative pr-5">
      <RouterLink to="/shopping-cart" title="前往購物車頁面(跳轉頁面)">
        <img class="w-[30px]" :src="iconShoppingCart" alt="購物車圖示" />
      </RouterLink>
      <div class="absolute top-0 z-10 right-[17px] w-[16px] h-[16px] flex justify-center items-center rounded-full bg-red-600">0</div>
    </div>
  </header>
</template>
