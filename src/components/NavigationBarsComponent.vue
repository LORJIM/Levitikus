<template>
   <section id="navigationBarsComponent">
       <nav :class="'topbar'+(scrollPosition > 50 ? ' scrolled' : '')">
                <a href="/Levitikus/"><img src="../assets/img/LevitikusLogo.png" class="logo nav-item"/></a>
                <a class="nav-item link"  href="/Levitikus/#whatComponent" >¿Quiénes somos?</a>
                <a class="nav-item link" href="/Levitikus/#whatComponent">¿Por qué Levitikus?</a>
                <a class="nav-item link" href="/Levitikus/#usecasesComponent">Casos de Uso</a>
                <a class="nav-item link" href="/Levitikus/#usecasesComponent">Casos de Estudio</a>
                <a class="nav-item link" href="/Levitikus/#roadmapComponent">Trayectoria</a>
                <a class="nav-item link" href="/Levitikus/#sponsorsComponent">Socios</a>
                <router-link to="/about" class="nav-item link">Sobre Nosotros</router-link>
                <router-link to="/login" class="nav-item link">Login</router-link>
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