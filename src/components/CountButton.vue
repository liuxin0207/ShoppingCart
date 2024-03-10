<script>
export default {
  props:{
    quantity:{
      type:Number,
      default:1,
    },
  },

  emits:['update'],

  data() {
    return {
      // newQuantity:this.quantity,
    };
  },

  // watch:{
  //   newQuantity:{
  //     handler(newVaule){
  //       this.$emit('update',newVaule);
  //     },
  //   },
  // },

  methods: {
    add(){
      const plusQuantity = this.quantity + 1;
      this.$emit('update', plusQuantity);
    },
    minus(){
      if(this.quantity > 1){
      const minusQuantity = this.quantity - 1;
      this.$emit('update', minusQuantity);
    }
    },
  },
};
</script>

<template>
  <div class="flex grow">
    <button @click="minus()" type="button" class="count-btn rounded-l-full">
      -
    </button>
    <label class="border border-gray-400 border-x-0 border-y-1 grow h-[35px] flex justify-center items-center text-xl">
      <!-- <input v-model="newQuantity" type="number" min="1" class="h-[30px] w-[40px] border-0 p-0 text-center"> -->
      <input  type="number" min="1" class="h-[30px] w-[40px] border-0 p-0 text-center" :value="quantity" @input="(e) => $emit('update',Number(e.target.value))">
    </label>
    <button @click="add()" type="button" class="count-btn rounded-r-full">
      +
    </button>
  </div>
</template>

<style scoped>
.count-btn {
  @apply w-[30px] h-[35px] border border-gray-400 text-xl cursor-pointer;
}
</style>
