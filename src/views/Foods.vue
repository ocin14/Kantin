<template>
  <div>
  <navbar />
  <div class="container">
    <div class="row mt-4">
      <div class="col">
        <h2>Daftar <strong>Makanan</strong></h2>
      </div>
    </div>

<div class="row mt-3">
  <div class="col">
    
  </div>
</div>

    <div class="row mb-4">
      <div class="col-md-4 mt-4" v-for="product in products" :key="product.id">
      <cardproduct :product="product"/>
      </div>
      </div>

  </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Cardproduct from '@/components/Cardproduct.vue';
import axios from 'axios';

export default {
  name: 'Foods',
  components: {
    Navbar,
    Cardproduct,
  },
  data(){
    return{
      products: [],
    };
  },
  methods: {
    setProducts(data){
      this.products = data;
    },
  },
  mounted() {
  axios.get('http://localhost:4000/products')
    .then((response) => 
      // handle success
      this.setProducts(response.data))
    .catch((error) =>  console.log(error))
      // handle error
     
  
},
}
</script>

<style>

</style>