import Vue from 'vue';
import App from './App.vue';
import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/js/all.js';
import Particles from "particles.vue";
import VueRouter from 'vue-router';
import NavigationBarsComponent from "./components/NavigationBarsComponent.vue";
import HomeComponent from './components/HomeComponent.vue';
import AboutComponent from './components/AboutComponent.vue';
import LoginComponent from './components/LoginComponent.vue';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Loading from 'vue-loading-overlay';
import axios from 'axios';
import VueCookies from 'vue-cookies';

//animate on scroll
AOS.init();

Vue.use(VueRouter);
Vue.use(Particles);
//Loader
Vue.use(Loading, {
  color: '#00FFFF',
  loader: "spinner",
  width: 64,
  height: 64,
  backgroundColor: '#000000',
  opacity: 0.5,
  zIndex: 999
});

Vue.use(VueCookies);

Vue.config.productionTip = false

//COOKIES
//todas las cookies caducan al finalizar la sesion de navegacion (0)
Vue.$cookies.config('0');

//AXIOS
//HEADERS DEFAULT
axios.defaults.withCredentials = true; //withCredentials es necesario para mandar las cookies XSRF TOKEN y JSESSIONID en las requests, sin ellas Spring Security nos denegara el acceso

//INTERCEPTORES
//PARA PARAMETRIZAR URL ANTES DE CADA LLAMADA
axios.interceptors.request.use(config => {
  config.url=process.env.VUE_APP_BASE_URL+config.url;
  /*if(!config.params['refresh']){ //solo ponemos la url cuando es la primera llamada
    //url del entorno parametrizada
    config.url=process.env.VUE_APP_BASE_URL+config.url;
  }*/
  return config;
}, error => {
  // handle the error
  return Promise.reject(error);
});

Vue.prototype.$http = axios;

//Navigation Guards
const routes = [
  {path: '', component: NavigationBarsComponent,
    children:[
      {path: 'about', component: AboutComponent},
      {path: 'login', component: LoginComponent},
      {path: '', component: HomeComponent}
    ]
  }/*,
  {path: '/API'}*/
]

const router = new VueRouter({
  routes,
  base:'/Levitikus', //este debe coincidir con el nombre del WAR que desplegamos en Jboss, ya que es la ruta de la app
  mode: 'history'
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
