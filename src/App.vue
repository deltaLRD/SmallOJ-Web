<script setup>
import Top from './components/Top.vue'
import Navigation from './components/Navigation.vue'
// import Footer from './components/Footer.vue'
</script>

<template>
  <div>
    <Top/><br/>
    <Navigation/>
    <RouterView></RouterView>

  </div>
</template>

<style scoped>

</style>
