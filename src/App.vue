<template>
  <div id="app">
    <router-view></router-view>
    <Particles/>
  </div>
</template>

<script>
import Particles from './components/Particles.vue';

export default {
  name: 'App',
  components: {
    Particles
  }
}
</script>

<style lang="less">
@import './assets/less/styles.less';
</style>
