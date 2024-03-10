import { defineStore } from "pinia";

export const useShoppingCart = defineStore("shopping-cart", {
  state: () => {
    return {
        cartData:[],
        buyerData:{
            name:'',
            phone:'',
            address:'',
            email:'',
            payment:'',
            delivery:'',
        },
    };
  },
  actions: {
    addCart(product){
        this.cartData.push(product);
    },
  },
});
