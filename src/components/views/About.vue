<template>
    <div class="container">
        <div class="row">
            <div class="col d-flex flex-column justify-content-center">
                <h2>¿Quienes somos?</h2>
                <p>Apasionada a las manualidades y la decoración hecha con amor y dedicación, ofrezco mis creaciones y mis servicios a aquellas personas que deseen llenar de detalles y color sus dias especiales u obsequiar hermosos recuerdos a sus personas queridas.</p>
            </div>
            <div class="col d-flex justify-content-center align-items-middle">
                <img src="/keychains.jpg" alt="About img">
            </div>
        </div>
        <div class="row">
            <div class="col d-flex justify-content-center align-items-middle">
                <img src="/figures.jpg" alt="Products img">
            </div>
            <div class="col d-flex flex-column justify-content-center">
                <h2>Nuestros productos</h2>
                <p>Destacando el alto grado de personalización y detalle, puede encontrarse en mi catálogo <i>banners</i>, imanes, pines, figuras de gomaeva y/o corcho blanco, portaretratos, portallaves y demás detalles para regalar y decorar espacios.</p>
            </div>
        </div>
        <div class="row mb-5">
            <div class="col d-flex flex-column justify-content-center">
                <h2>Nuestros servicios</h2>
                <p>Desde la decoración y/o organización de fiestas infantiles, de cumpleaños o de graduación, hasta <i>baby showers</i>, mesas dulces, bautizos y comuniones.</p>
            </div>
            <div class="col d-flex justify-content-center align-items-middle">
                <img src="/table.jpg" alt="Services img">
            </div>
        </div>
        <div class="row">
            <div class="col d-flex justify-content-center">
                <h3>Si quieres saber algo en concreto, <RouterLink to="/contact">¡no dudes en contactar!</RouterLink></h3>
            </div>
        </div>
    </div>
</template>

<style scoped>
    img {
        min-height: 100%;
        width: 60%;
        border-radius: 20px;
        box-shadow: 1px 3px 1px 1px gray;
    }

    p {
        font-size: large;
    }
</style>