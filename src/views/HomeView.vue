<template>
  <div class="home">
  <Navbar />
  <div class="container">
  
    <Hero/>
    <div class="row mt-4">
      <div class="col">
        <h2>Best <strong>Foods</strong></h2>
      </div>
      <div class="col">
        <router-link to="/foods" class="btn btn-success float-right"><b-icon-eye></b-icon-eye> <span></span>Lihat semua</router-link>
      </div>
      
      <modal title="hello" message="tes"><button @click="popupShow">tampil modal</button></modal>
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
// @ is an alias to /src
import modal from '@/components/modal.vue'
let myModal;
onMounted(()=>{
  myModal = new bootstrap.Modal(document.getElementById("alert"))
})
const popupShow = ()=>{
  myModal.show();
}
import Navbar from '@/components/Navbar.vue'
import Hero from '@/components/Hero.vue'
import Cardproduct from '@/components/Cardproduct.vue';
import axios from 'axios';
import { onMounted } from 'vue';
export default {
  name: 'HomeView',
  components: {
    Navbar, 
    Hero,
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
  axios.get('http://localhost:3000/best-products')
    .then((response) => 
      // handle success`
      this.setProducts(response.data))
    .catch((error) =>  console.log(error))
      // handle error
     
  
},



};
</script>
