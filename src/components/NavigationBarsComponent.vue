<template>
   <section id="navigationBarsComponent">
       <nav class="topbar">
              <router-link to="/">
                <img src="../assets/img/LevitikusLogo.png" class="logo nav-item"/>
              </router-link>
              <router-link to="/what" class="link">
               <a class="nav-item" >¿Quiénes somos?</a>
              </router-link>
              <router-link to="/why" class="link">
                <a class="nav-item">¿Por qué Levitikus?</a>
              </router-link>
              <router-link to="/use-cases" class="link">
                <a class="nav-item">Casos de Uso</a>
              </router-link>
              <router-link to="/use-studies" class="link">
                <a class="nav-item">Casos de Estudio</a>
              </router-link>
              <router-link to="/roadmap" class="link">
                <a class="nav-item">Trayectoria</a>
              </router-link>
              <router-link to="/partners" class="link">
                <a class="nav-item">Socios</a>
              </router-link>
              <router-link to="/about" class="link">
                <a class="nav-item">Sobre Nosotros</a>
              </router-link>
              <router-link to="/login" class="link">
                <a class="nav-item">Login</a>
              </router-link>
      </nav>
      <router-view></router-view>
   </section>
</template>