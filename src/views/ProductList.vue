<!-- 商品列表頁面，利用卡片的形式陳列商品並顯示商品名稱、商品圖片、敘述、加入購物車按鈕及可以增加減少購買數量 -->

<script>
// import { mapActions } from "pinia";
import { mapActions } from "pinia";
import CountButton from "@/components/CountButton.vue";
// import productData from '@/assets/json/MOCK_DATA.json';
import iconShoppingCart from "@/assets/images/icon-shopping-cart.svg";
import iconMesh from "@/assets/images/icon-mesh.png";
import iconMeshGrey from "@/assets/images/icon-mesh-grey.png";
import iconList from "@/assets/images/icon-list.png";
import iconListGrey from "@/assets/images/icon-list-grey.png";
import { useShoppingCart } from "@/stores/shoppingCart";

export default {
  components: {
    CountButton,
  },
  data() {
    return {
      productData: [],
      imgIcon: {
        iconShoppingCart,
        iconMesh,
        iconMeshGrey,
        iconList,
        iconListGrey,
      },
      switchDisplay: true,
    };
  },

  mounted() {
    this.fetchData();
  },

  methods: {
    ...mapActions(useShoppingCart, ["addCart"]),

    fetchData() {
      fetch("./src/assets/json/MOCK_DATA.json")
        .then((res) => res.json())
        .then((res) => (this.productData = res));
    },
  },
};
</script>
<template>
  <div class="w-full px-5">
    <h1 class="mb-3 text-3xl font-bold">商品列表</h1>

    <!-- 切換列表呈現 -->
    <nav class="flex justify-end items-center">
      <button type="button" @click="switchDisplay = true">
        <img v-if="switchDisplay" :src="imgIcon.iconMesh" alt="卡片顯示" />
        <img v-else :src="imgIcon.iconMeshGrey" alt="卡片顯示(灰)" />
      </button>
      <button type="button" @click="switchDisplay = false">
        <img v-if="!switchDisplay" :src="imgIcon.iconList" alt="條列顯示" />
        <img v-else :src="imgIcon.iconListGrey" alt="條列顯示(灰)" />
      </button>
    </nav>

    <!-- 卡片式列表 -->
    <section v-if="switchDisplay" class="flex gap-5 flex-wrap justify-center">
      <div v-for="product in productData" :key="product.id"
        class="w-1/2 xl:w-1/6 border-[1px] rounded-lg flex flex-col md:w-1/3">
        <img class="rounded-t-lg w-full" :src="product.pic" alt="商品圖片" />

        <div class="bg-slate-100 h-[250px] bg-opacity-30 px-3 flex flex-col gap-3 pt-3">
          <h2>{{ product.name }}</h2>
          <p>{{ product.description }}</p>
          <p>價格:{{ product.price }}</p>
        </div>

        <div class="flex items-center gap-5 mb-5 px-3">
          數量:
          <CountButton :quantity="product.quantity" class="w-[150px] h-[35px]"
            @update="(newValue) => (product.quantity = newValue)" />
        </div>

        <button @click="addCart(product)" type="button"
          class="flex justify-center items-center gap-x-2 bg-[#50468c] text-white rounded-b-lg px-4 py-1">
          <img :src="imgIcon.iconShoppingCart" alt="購物車圖示" width="20" />
          <span>加入購物車</span>
        </button>
      </div>
    </section>

    <!-- 條列式列表 -->
    <section v-else class="px-32">
      <div class="grid grid-cols-5 border-y font-bold py-1 gap-x-3">
        <div class="text-center">商品圖片</div>
        <div>商品名稱</div>
        <div class="text-center">商品描述</div>
        <div class="text-center">價錢</div>
        <div>操作</div>
      </div>

      <div v-for="product in productData" :key="product.id"
        class="grid grid-cols-5 py-1 border-b min-h-[80px] gap-x-3 lg:first:border-t lg:!py-3">
        <img :src="product.pic" alt="商品圖示" class="h-full object-cover" />
        <div class="flex items-center">{{ product.name }}</div>
        <div class="flex items-center">
          {{ product.description }}
        </div>
        <div class="flex justify-center items-center">{{ product.price }}</div>
        <div class="flex justify-center items-center lg:flex-wrap lg:!justify-between lg:pt-6 md:!pt-0">
          <div class="flex flex-col gap-y-4">
            <CountButton class="w-[150px] h-[35px]" :quantity="product.quantity"
              @update="(newValue) => (product.quantity = newValue)" />
            <button type="button" @click="addCart(product)" class="flex justify-center items-center gap-x-2 bg-[#50468c] text-white rounded-full px-4 py-1 cursor-pointer md:p-0 w-[150px]">
              <img :src="imgIcon.iconShoppingCart" class="py-1" alt="購物車圖示" width="20" />
              <span>加入購物車</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
