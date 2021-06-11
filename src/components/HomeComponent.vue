<template>
    <section id="homeComponent">
      <div class="container">
       <img src="../assets/img/LevitikusLogo.png" class="logo"/>
       <h1>Levitikus</h1>
       <p>Es algo magnífico, y hará que todos tus deseos...SE CUMPLAN.</p>
       <button class="btnTransparente">Saber más</button>
     </div>
     <StatsComponent/>
     <WhatComponent/>
     <UseCasesComponent/>
     <RoadmapComponent/>
     <SponsorsComponent/>
    </section>
</template>
<script>
import StatsComponent from './StatsComponent';
import WhatComponent from './WhatComponent';
import UseCasesComponent from './UseCasesComponent';
import RoadmapComponent from './RoadmapComponent';
import SponsorsComponent from './SponsorsComponent';
export default {
  name: 'HomeComponent',
  components: {
    StatsComponent,
    WhatComponent,
    UseCasesComponent,
    RoadmapComponent,
    SponsorsComponent
  }
}
</script>