<template>
    <section id="statsComponent">
        <div class="container2">
            <!--duration son los ms que dura la animacion, 
            offset son los pixeles adicionales que hay que avanzar con respecto al elemento para que se active, a mas offset, mas tenemos que bajar-->
            <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="2000" data-aos-offset="200">
                <h1>Escritorio</h1>
                <hr>
                Se realiza para programas de escritorio, videojuegos y robótica. Su lenguaje principal es C.
            </div>
            <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="2000" data-aos-offset="200">
                <h1>Web</h1>
                <hr>
                Se realiza para páginas o aplicaciones web, tanto la parte cliente como la parte servidor. Su lenguaje principal es JavaScript.
            </div>
            <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="2000" data-aos-offset="200">
                <h1>Móvil</h1>
                <hr>
                Se realiza para aplicaciones móviles. Su lenguaje principal es Java.
            </div>
        </div>
    </section>
</template>
<script>
export default {
    name : 'StatsComponent'
}
</script>