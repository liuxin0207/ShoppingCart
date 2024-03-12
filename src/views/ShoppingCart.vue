<!-- 商品列表頁面，利用卡片的形式陳列商品並顯示商品名稱、商品圖片、敘述、加入購物車按鈕及可以增加減少購買數量 -->

<script>
  import { mapState, mapActions } from 'pinia';
  import { useShoppingCart } from '@/stores/shoppingCart';
  import CountButton from '@/components/CountButton.vue';

  export default {
    components: {
      CountButton,
    },
    data() {
      return {

      };
    },

    computed: {
      ...mapState(useShoppingCart, ['cartData']),

      newCartData() {
        const arr = this.cartData.map(product => {
          product.checked = false;
          return product;
        });


        return arr;
      },

    },



    methods: {
      ...mapActions(useShoppingCart, ['addCheckedData','countTotal']),

      submitCart() {
        this.$router.push('/shoppingcheck');
      },

      changeChecked(product) {
        product.checked = !product.checked;
        this.addCheckedData(product);
      },
    },
  };
</script>
<template>
  <div class="w-full px-5">
    <h1 class="mb-3 text-3xl font-bold">購物車確認</h1>

    <section class="mb-6 px-5">
      <div class="grid grid-cols-6 border-y font-bold py-1 gap-x-3">
        <div></div>
        <div class="text-center">商品圖片</div>
        <div>商品名稱</div>
        <div class="text-center">價錢</div>
        <div>操作</div>
      </div>

      <div v-for="product in newCartData" :key="product.id"
        class="grid-tr grid-cols-6 grid py-1 border-b border-gray-400 min-h-[80px] gap-x-3 md:gap-x-1 lg:first:border-t">
        <label class="flex justify-center">
          <input type="checkbox" class="w-5" @change="changeChecked(product)" />
        </label>
        <div class="flex justify-center">
          <img :src="product.pic" alt="商品圖示" class="w-[100px] h-full object-cover" />
        </div>
        <p class="flex items-center">{{ product.name }}</p>
        <p class="flex justify-center items-center">$ {{ product.price }}</p>

        <div class="flex items-center w-full">
          <CountButton :quantity="product.quantity" @update="(newValue) => (product.quantity = newValue)"
            class="w-[150px] h-[35px]" />
        </div>
      </div>
    </section>

    <div class="flex justify-end flex-wrap mb-2">
      <p class="text-2xl text-end font-bold w-full">商品數量: {{ countTotal().count}}</p>
      <p class="text-2xl text-end font-bold w-full">商品總金額: $ {{ countTotal().price}}</p>
    </div>

    <div class="flex justify-between gap-4 text-white text-2xl font-bold">
      <RouterLink to="/" class="flex justify-center items-center bg-[#8c5046] rounded-md px-4 py-1">
        回上頁繼續購買
      </RouterLink>
      <button type="button" class="flex justify-center items-center bg-[#50468c] rounded-md px-4 py-1"
        @click="submitCart()">
        確認購買
      </button>
    </div>
  </div>
</template>