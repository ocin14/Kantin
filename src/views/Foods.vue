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
    <div class="input-group mb-3">
      
    <input
    v-model="search" 
    type="text" class="form-control" placeholder="Cari Makanan kesukaan ada" aria-label="Cari" aria-describedby="basic-addon1"
    @keyup="searchFood"
    >
    <span class="input-group-text" id="basic-addon1">
      <b-icon-search></b-icon-search>
    </span>
  </div>

  
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
      search: '',
    };
  },
  methods: {
    setProducts(data){
      this.products = data;
    },
    searchFood(){
      axios.get('http://localhost:3000/products?nama='+this.search)
    .then((response) => 
      // handle success
      this.setProducts(response.data))
    .catch((error) =>  console.log(error))
      // handle error
    }
  },
  mounted() {
  axios.get('http://localhost:3000/products')
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