<template>
    <section id="aboutComponent">
      <div class="container">
       <h1>Sobre Nosotros</h1>
       <button class="btnTransparente">Saber más</button>
      </div>
      <h1 id="primera" class="secciones">Nuestra Tecnología</h1>
      <div class="container2">
            <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="2000" class="izquierda" data-aos-offset="300">
                <i class="fas fa-balance-scale fa-5x"/>
                <h1>Eficiencia</h1>
                La más eficiente del mundo.
            </div>
            <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="2000" class="derecha" data-aos-offset="300">
                <i class="fas fa-shield-alt fa-5x"/>
                <h1>Seguridad</h1>
                La mejor seguridad del mundo.
            </div>
      </div>
      <h1 class="secciones">Nuestro Objetivo</h1>
      <div class="container2">
            <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="2000" class="izquierda" data-aos-offset="300">
                <i class="far fa-chart-bar fa-5x"/>
                <h1>Economía</h1>
                La mejor economía del mundo.
            </div>
            <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="2000" class="derecha" data-aos-offset="300">
                <i class="fas fa-users fa-5x"/>
                <h1>Usuarios</h1>
                Los mejores usuarios del mundo.
            </div>
      </div>
    </section>
</template>
<script>
export default {
  name: 'AboutComponent',
}
</script>