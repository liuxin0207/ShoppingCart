<!-- 購物車個人資訊及送出頁 -->

<script>
export default {
  data() {
    return {

    };
  },
  methods: {

  },
};
</script>
<template>
  <div class="w-full px-5">
    <h1 class="mb-3 text-3xl font-bold">完成購買</h1>

    <section class="mb-6 px-5">
      <div class="grid-cols-4 grid border-y font-bold py-1 gap-x-3">
        <div class="text-center">商品圖片</div>
        <div>商品名稱</div>
        <div class="text-center">價錢</div>
        <div class="text-center">數量</div>
      </div>

      <div class="grid grid-cols-4 py-1 border-b min-h-[80px] gap-x-3 md:gap-x-1 lg:first:border-t lg:!py-3">
        <div class="flex justify-center">
          <img src="" alt="商品圖示" class="w-[100px] h-full object-cover" />
        </div>
        <p class="flex items-center">Bytecard</p>
        <p class="flex justify-center items-center">$ 954</p>
        <p class="flex justify-center items-center">1</p>
      </div>
    </section>

    <!-- 顯示購買客人填寫的姓名、電話、地址、付款方式、電子信箱、運送方式 -->
    <section class="mb-6 px-5">
      <div class="grid grid-cols-6 border-y font-bold py-1 gap-x-3">
        <div>姓名</div>
        <div>電話</div>
        <div>地址</div>
        <div>付款方式</div>
        <div>電子信箱</div>
        <div>運送方式</div>
      </div>

      <div>
        <div  class="grid grid-cols-6 py-1 border-b border-main-deep min-h-[80px] gap-x-3 md:gap-x-1 lg:first:border-t">
          <p class="flex items-center">Mark</p>
          <p class="flex items-center">0912345678</p>
          <p class="flex items-center">台中市南區興大路145號</p>
          <p class="flex items-center">貨到付款</p>
          <p class="flex items-center">mark@gmail.com</p>
          <p class="flex items-center">超商取貨</p>
        </div>
      </div>
    </section>

    <div class="px-5">
      <RouterLink to="/" class="flex justify-center items-center bg-[#50468c] text-white rounded-md py-1">
        回首頁
      </RouterLink>
    </div>
  </div>
</template>
