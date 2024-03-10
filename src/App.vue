<script>
import { RouterView } from 'vue-router';
import TheHeader from '@/components/TheHeader.vue';

export default {
  // 元件宣告
  components: {
    RouterView,
    TheHeader,
  },
  data(){
    return {

    };
  },
  methods: {

  },
};
</script>

<template>
  <TheHeader />

  <main class="w-full py-[50px]">
    <RouterView />
  </main>
</template>
