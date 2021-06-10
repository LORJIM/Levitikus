import Vue from 'vue'
import App from './App.vue'
import Particles from "particles.vue";
import VueRouter from 'vue-router';
import NavigationBarsComponent from "./components/NavigationBarsComponent.vue";
import HomeComponent from './components//HomeComponent.vue';
import AOS from 'aos';
import 'aos/dist/aos.css';

//animate on scroll
AOS.init();

Vue.use(VueRouter);
Vue.use(Particles);
Vue.config.productionTip = false

const routes = [
  {path: '*', component: NavigationBarsComponent,
    children:[
      {path: '*', component: HomeComponent}
    ]
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
