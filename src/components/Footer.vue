<script setup>

</script>

<template>
    <footer class="container d-flex flex-wrap justify-content-between align-items-center py-3 border-top">
        <div class="col-md-4 d-flex align-items-center">
            <span style="cursor: default;" class="mb-3 mb-md-0 text-body-secondary">© Mundo Mágico L&L, 2024</span>
        </div>

        <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
            <li class="ms-3"><a id="facebook-logo" href="https://www.facebook.com/MundoMagicoLyL"><i class="fs-4 bi bi-facebook"></i></a></li>
            <li class="ms-3"><a id="instagram-logo" href="https://www.instagram.com/mundomagicolyl/"><i class="fs-4 bi bi-instagram"></i></a></li>
            <li class="ms-3"><a id="mail-logo" href="mailto:mundomagicolyl@gmail.com"><i class="fs-4 bi bi-envelope-fill"></i></a></li>
        </ul>
    </footer>
</template>

<style scoped>
    #facebook-logo, #instagram-logo, #mail-logo {
        transition: 0.3s;
        color: gray;
    }

    #facebook-logo:hover {
        color: blue;
    }

    #instagram-logo:hover {
        color: #C13584
    }

    #mail-logo:hover {
        color: #e29a79 
    }
</style>