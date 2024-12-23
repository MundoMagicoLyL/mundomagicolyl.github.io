<script setup>

</script>

<template>
    <header class="container d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
      <RouterLink to="/home" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
        <img src="/logo.png" width="64">
        <span class="fs-4">Mundo Mágico L&L</span>
      </RouterLink>

      <ul class="nav nav-pills">
        <li class="nav-item"><RouterLink to="/home" class="nav-link">Home</RouterLink></li>
        <li class="nav-item"><RouterLink to="/about" class="nav-link">Sobre nosotros</RouterLink></li>
        <li class="nav-item"><RouterLink to="/contact" class="nav-link">Contacta</RouterLink></li>
      </ul>
    </header>
</template>