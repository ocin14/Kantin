<template>
  <div id="app">
    
    <router-view/>
    <footer />
  </div>
</template>

<script>
import footer from './components/footer.vue';

export default{
  components:{
    footer
  }
}
</script>