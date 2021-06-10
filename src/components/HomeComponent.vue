<template>
    <section id="homeComponent">
      <div class="container">
       <img src="../assets/img/LevitikusLogo.png" class="logo"/>
       <h1>Levitikus</h1>
       <p>Es algo magnífico, y hará que todos tus deseos...SE CUMPLAN.</p>
       <button class="btnTransparente">Saber más</button>
     </div>
     <StatsComponent/>
    </section>
</template>
<script>
import StatsComponent from './StatsComponent';
export default {
  name: 'HomeComponent',
  components: {
    StatsComponent
  }
}
</script>