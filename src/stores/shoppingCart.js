import { defineStore } from "pinia";

export const useShoppingCart = defineStore("shopping-cart", {
  state: () => {
    return {
        checkedData:[],
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
      const existProduct = this.existProduct(product);
      if(existProduct){
        existProduct.quantity = product.quantity;
      } else {
        this.cartData.push(product);
      }
    },
    existProduct(product){
      return this.cartData.find(item => item.id === product.id);
    },

    addCheckedData(product){
          if(product.checked){
            this.checkedData.push(product);
          }else{
            this.checkedData = this.checkedData.filter(item => item.id !==product.id);
          }
      },

      countTotal(){
        let count = 0;
        let price = 0;
        this.checkedData.forEach(item => {
          count += item.quantity;
          price += (item.quantity * item.price);
        });
        return { count: count , price: price};
      },
      
      resetCartData(){
        this.cartData = [];
      },
  },

    
});
