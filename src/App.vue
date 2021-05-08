<template>
  <div id="app">
    <router-view></router-view>
    <Particles/>
    <FooterComponent/>
  </div>
</template>

<script>
import Particles from './components/Particles.vue'
import FooterComponent from './components/FooterComponent.vue'

export default {
  name: 'App',
  components: {
    Particles,
    FooterComponent
  }
}
</script>

<style lang="less">
@import './assets/less/styles.less';
</style>
