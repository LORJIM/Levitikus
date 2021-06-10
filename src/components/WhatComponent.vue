<template>
    <section id="whatComponent">
        <div class="container2" id="containerQue">
            <div>
                <h1>¿Qué es Levitikus?</h1>
                <br><br>
                Levitikus es uno de los proyectos que se me han ocurrido para renovarme y aprender nuevas cosas. En este caso se trata de una SPA desarrollada en Vue y que utiliza lo
                último en cuestiones de diseño (AOS) y lo último en cuestiones de seguridad (OAuth).
                <br><br>
                <button class="btnTransparente">Saber más</button>
            </div>
            <div data-aos="fade-left"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine">
                <img src="../assets/img/LevitikusLogo.png" class="logo"/>
            </div>
        </div>
        <div class="container2" id="lideres">
            <div data-aos="fade-zoom-in"
        data-aos-easing="ease-in-back"
        data-aos-delay="300"
        data-aos-offset="0">
                <h1>Líderes en el Sector</h1>
                <br><br>
                L0RJiM es uno de los mejores programadores de la historia, buena inversión para los años venideros. Confía en nosotros y te harás millonario.
            </div>
        </div>
        
    </section>
</template>
<script>
export default {
    name : 'WhatComponent'
}
</script>