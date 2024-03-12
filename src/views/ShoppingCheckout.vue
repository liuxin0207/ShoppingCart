<!-- 購物車個人資訊及送出頁 -->
<script>
  import { mapState, mapActions } from 'pinia';
  import { useShoppingCart } from '@/stores/shoppingCart';

  export default {
    data() {
      return {

      };
    },

    computed: {
      ...mapState(useShoppingCart, ['checkedData', 'buyerData']),
    },



    methods: {
      ...mapActions(useShoppingCart, ['countTotal', 'resetCartData']),

      submitCart() {
        this.resetCartData();
        this.$router.push('/buysuccess');
      },
    },
  };
</script>
<template>
  <div class="w-full px-5">
    <h1 class="mb-3 text-3xl font-bold">購買確認及填寫資訊</h1>

    <section class="mb-6 px-5">
      <div>
        <div class="grid grid-cols-4 border-y font-bold py-1 gap-x-3">
          <div class="text-center">商品圖片</div>
          <div>商品名稱</div>
          <div class="text-center">價錢</div>
          <div class="text-center">數量</div>
        </div>
      </div>

      <div>
        <div v-for="product in checkedData" :key="product.id"
          class="grid grid-cols-4 py-1 border-b min-h-[80px] gap-x-3 md:gap-x-1 lg:first:border-t">
          <div class="flex justify-center">
            <img :src="product.pic" alt="商品圖示" class="w-[100px] h-full object-cover" />
          </div>
          <p class="flex items-center">{{ product.name }}</p>
          <p class="flex justify-center items-center">$ {{ product.price}}</p>
          <p class="flex justify-center items-center">{{ product.quantity}}</p>
        </div>
      </div>
    </section>

    <!-- 利用form表單讓購買客人填寫姓名、電話、地址、付款方式、電子信箱、運送方式 -->
    <form @submit.prevent="submitCart">
      <div class="mb-6 px-5">
        <label for="name" class="block mb-2 text-lg font-bold">姓名</label>
        <input v-model="buyerData.name" type="text" id="name"
          class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
          required />
      </div>

      <div class="mb-6 px-5">
        <label for="phone" class="block mb-2 text-lg font-bold">電話</label>
        <input v-model="buyerData.phone" type="tel" id="phone"
          class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
          required />
      </div>

      <div class="mb-6 px-5">
        <label  for=" address" class="block mb-2 text-lg font-bold">地址</label>
        <input v-model="buyerData.address" type="text" id="address"
          class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
          required />
      </div>

      <div class="mb-6 px-5">
        <label for="email" class="block mb-2 text-lg font-bold">電子信箱</label>
        <input v-model="buyerData.email" type=" email" id="email"
          class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
          required />
      </div>

      <div class="mb-6 px-5">
        <p class="block mb-2 text-lg font-bold">付款方式</p>
        <div class="flex gap-5">
          <label class="flex items-center cursor-pointer">
            <input v-model="buyerData.payment" type="radio" id="payment-method1" value="信用卡" class="mr-2 cursor-pointer"
              required />
            <span>信用卡</span>
          </label>

          <label class="flex items-center cursor-pointer">
            <input v-model="buyerData.payment" type="radio" id="payment-method2" value="貨到付款"
              class="mr-2 cursor-pointer" required />
            <span>貨到付款</span>
          </label>
        </div>
      </div>

      <div class="mb-6 px-5">
        <p class="block mb-2 text-lg font-bold">運送方式</p>
        <div class="flex gap-5">
          <label class="flex items-center cursor-pointer">
            <input v-model="buyerData.delivery" type="radio" id="transport-method1" value="宅配"
              class="mr-2 cursor-pointer" required />
            <span>宅配</span>
          </label>
          <label class="flex items-center cursor-pointer">
            <input v-model="buyerData.delivery" type="radio" id="transport-method2" value="超商取貨" class="mr-2 cursor-pointer" required />
            <span>超商取貨</span>
          </label>
        </div>
      </div>

      <div class="flex justify-end flex-wrap mb-5">
        <p class="text-2xl font-bold w-full text-end">商品數量: {{ countTotal().count}}</p>
        <p class="text-2xl font-bold w-full text-end">商品金額: $ {{ countTotal().price }}</p>
      </div>

      <div class="w-full flex justify-between text-white text-2xl font-bold">
        <RouterLink to="/shopping-cart" class="flex justify-center items-center bg-[#8c5046] rounded-md  px-4 py-1">
          回上頁繼續加購
        </RouterLink>
        <button type="submit" class="flex justify-center items-center bg-[#50468c] rounded-md px-4 py-1">
          確認送出
        </button>
      </div>
    </form>
  </div>
</template>