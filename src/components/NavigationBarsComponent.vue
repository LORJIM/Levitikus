<template>
   <section id="navigationBarsComponent">
       <nav :class="'topbar'+(scrollPosition > 50 ? ' scrolled' : '')">
                <a href="/"><img src="../assets/img/LevitikusLogo.png" class="logo nav-item"/></a>
                <a class="nav-item link"  href="/#whatComponent" >¿Quiénes somos?</a>
                <a class="nav-item link" href="/#whatComponent">¿Por qué Levitikus?</a>
                <a class="nav-item link" href="/#usecasesComponent">Casos de Uso</a>
                <a class="nav-item link" href="/#usecasesComponent">Casos de Estudio</a>
                <a class="nav-item link" href="/#roadmapComponent">Trayectoria</a>
                <a class="nav-item link" href="/#sponsorsComponent">Socios</a>
                <a class="nav-item link" href="/about">Sobre Nosotros</a>
                <a class="nav-item link" href="/login">Login</a>
      </nav>
      <router-view></router-view>
      <FooterComponent/>
   </section>
</template>
<script>
import FooterComponent from './FooterComponent.vue';
export default {
  components: {
    FooterComponent
  },
  data(){
    return{
      scrollPosition: window.scrollY
    }
  },
  methods: {
    updateScroll() {
       this.scrollPosition = window.scrollY
    }
  },
  mounted() {
      window.addEventListener('scroll', this.updateScroll); //atento al evento scroll del navegador, cuando se dispara actualizamos
  }
}
</script>