<script setup>
  import Header from "./components/Header.vue";
  import Footer from "./components/Footer.vue";
</script>

<template>
  <div class="container">
    <Header/>
    <main>
      <RouterView/>
    </main>
    <Footer/>
  </div>
</template>