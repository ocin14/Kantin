<template>
    <li class="nav-item">
    <a :class="${kelas}" :href="/${link}">{{ label }}</a>
    </li>
<div class="container">
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">KulinerKu</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <router-link class="nav-link" to="/">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="Foods">Foods</router-link>
        </li>
      </ul>
      
    </div>
    <ul style="right: auto;" class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          
          <router-link class="nav-link" to="/">
            Keranjang
            <b-icon-bag></b-icon-bag>
            <span class="badge badge-success ml-2">0</span>
            </router-link>
        </li>
      </ul>
  </div>
</nav>
</div>
</template>

<script>
export default {
    name : 'Navbar'
}
</script>

<style>

</style>