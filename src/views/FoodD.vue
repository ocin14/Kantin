<template>
    <div class="food-detail">
        <navbar />
        <div class="container">
            <div class="row mt-5">
                <div class="col">
                    <nav aria-label="breadcrumb">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><router-link to="/" class="text-dark">Home</router-link></li>
                        <li class="breadcrumb-item"><router-link to="/Foods" class="text-dark">Foods</router-link></li>
                        <li class="breadcrumb-item active" aria-current="page">Food Details</li>
                    </ol>
                    </nav>
                </div>
            </div>
            <div class="row">
                <div class="col-md-6" style="margin: 15px; " >
                    <img src="../assets/img/sate-ayam.jpg" class="img-fluid shadow" style="border-radius: 15px;">
                </div>
                <div class="col-md-5" style="top: 10px;">
                    <h2><strong>{{ product.nama }}</strong></h2>
                    <h4>Harga: <strong>Rp. {{ product.harga }}</strong></h4>
                    <form action="">
                        <label for="Jumlah_pesan">Qty</label>
                        <div class="form-row align-items-center">
                            
                        <div class="col-auto my-1">
                        
                        <select class="custom-select mr-sm-2" id="inlineFormCustomSelect">
                            <option selected></option>
                            <option value="">1</option>
                            <option value="">2</option>
                            <option value="">3</option>
                        </select>
                        </div>
                        </div>
                        <div class="form-group">
                            <label for="keterangan">keterangan</label>
                            <textarea class="form-control" placeholder="Pedes, Tidak pedes"  ></textarea>
                        </div>
                        <button type="submit" class="btn btn-success">
                            <b-icon-cart></b-icon-cart> Pesan
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import axios from 'axios';

export default {
    name: 'FoodD',
  components: {
    Navbar,
  },
  data(){
    return{
        product: {}
    }
  },
  methods: {
    setProduct(data){
        this.product = data
    }
  },
  mounted(){
    axios.get('http://localhost:3000/products/'+this.$route.params.id)
    .then((response) => 
      // handle success
      this.setProduct(response.data))
    .catch((error) =>  console.log(error))
      // handle error
  },
};
</script>

<style>

</style>