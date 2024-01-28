<template>
  <div>
    <!-- Desktop -->
    <div class="d-none d-md-block">
      <div class="row mt-4">
        <div class="col-md-6">
          <div class="d-flex h-100">
            <div class="justify-content-center align-self-center">
              <h3><strong>Delicious Food Menu,</strong><br> In Your Gadget</h3>
              <p>"Kelezatan autentik dari dapur kami ke lidah Anda"</p>
              <button class="btn btn-lg btn-success" style="background-color: #B80000;">Pesan <b-icon-arrow-right></b-icon-arrow-right></button>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <img src="../assets/img/eating a variety of foods-amico.svg" height="90%">
        </div>
      </div>
    </div>

    <!-- Mobile -->
    <div class="d-sm-block d-md-none">
      <div class="row mt-4">
        <div class="col-md-6 mb-3">
          <img src="../assets/img/eating a variety of foods-amico.svg" height="90%">
        </div>
        <div class="col-md-6">
          <div class="d-flex h-100">
            <div class="justify-content-center align-self-center">
              <h3><strong>Delicious Food Menu,</strong><br> In Your Gadget</h3>
              <p>"Kelezatan autentik dari dapur kami ke lidah Anda"</p>
              <button class="btn btn-lg btn-success" style="background-color: #B80000;">Pesan <b-icon-arrow-right></b-icon-arrow-right></button>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  </div>
    

</template>

<script>
export default {
    name:'Hero'
}
</script>

<style>

</style>