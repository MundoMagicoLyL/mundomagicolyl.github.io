<template>
    <div class="container-fluid col-xxl-8 px-4 py-5">
        <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
            <div class="col-10 col-sm-8 col-lg-6">
                <img id="hero-img" src="/hero.jpg" class="d-block mx-lg-auto img-fluid" alt="Hero image">
            </div>
            <div class="col-lg-6">
                <h1 class="display-5 fw-bold text-body-emphasis lh-1 mb-3">Manualidades y decoración de forma artesanal</h1>
                <p class="lead">Desde la decoración de eventos hasta la creación de detallitos para esas personas o dias especiales, en <span class="text-success fw-bold">Mundo Mágico L&L</span> solo encontrarás productos hechos con amor y dedicación y servicios ofrecidos con la mayor atención. <i class="text-danger bi bi-heart"></i></p>
                <div class="d-grid gap-2 d-md-flex justify-content-md-start">
                    <RouterLink to="/about" class="btn btn-primary btn-lg"><i class="bi bi-chat-left-text-fill"></i> Contacta</RouterLink>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    #hero-img {
        border-radius: 20px;
        transition: 0.3s;
        box-shadow: 1px 3px 1px 1px gray;
    }

    #hero-img:hover {
        transform: scale(1.05);
    }
</style>