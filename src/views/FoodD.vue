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
                    <form class="mt-4" v-on:submit.prevent>
                        <label for="jumlah_pesan">Jumlah Pesan</label>
                        <input type="number" class="form-control" v-model="pesan.jumlah_pesan">
                        <div class="form-group">
                            <label for="keterangan">keterangan</label>
                            <textarea v-model="pesan.keterangan" class="form-control" placeholder="Pedes, Tidak pedes"  ></textarea>
                        </div>
                        <button type="submit" class="btn btn-success" @click="pemesanan">
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
        product: {},
        pesan: {}
    }
  },
  methods: {
    setProduct(data){
        this.product = data;
    },
    pemesanan(){
        // console.log(this.pesan);
        this.pesan.product = this.product;
        axios
        .post("http://localhost:3000/keranjangs", this.pesan)
        .then(()=>{
            console.log("berhasil");
        })
        .catch((error)=> console.log(error))
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