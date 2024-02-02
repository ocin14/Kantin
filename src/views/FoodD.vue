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
        </div>
    </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
export default {
    name: 'FoodD',
  components: {
    Navbar,
  },
}
</script>

<style>

</style>