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
  if(config.params==null || !config.params['refresh']){ //solo ponemos la url cuando es la primera llamada, no la del refresh token
    //url del entorno parametrizada
    config.url=process.env.VUE_APP_BASE_URL+config.url;
  }
  return config;
}, error => {
  // handle the error
  return Promise.reject(error);
});

//PARA REFRESCAR TOKEN CUANDO LA RESPUESTA DE UNA LLAMADA DEVUELVA ERROR POR EXPIRACION
axios.interceptors.response.use((response) => {
  return response;
}, error => {
  //PARA REFRESCAR TOKEN CUANDO PROCEDA
  // Return any error which is not due to authentication back to the calling service
  if(error.response!=null){
    if (error.response.status !== 401) {
      return new Promise((resolve, reject) => {
        reject(error);
      });
    }
  }


  // Try request again with new token
  return new Promise((resolve, reject) => {
    const params = new URLSearchParams();
      params.append('refresh_token',  Vue.$cookies.get('RT'));
      params.append('grant_type', 'refresh_token');
      const options = {
        headers: {
            'Authorization':'Basic Y2xpZW50MTpzZWNyZXQx'
        }
      };
    axios.post('/oauth2/token', params,options)
      .then(response => {

        Vue.$cookies.set('RT',response.data.refresh_token);

        resolve(response.data.access_token);
      })
      .catch((error) => {
        reject(error);
      });
  }).then((token) => {

    // New request with new token
    const config = error.config;
    config.params={
      'refresh' : true //indicador de segunda llamada
    };
    config.headers['Authorization'] = `Bearer ${token}`; //access token nuevo para hacer la llamada original

    return new Promise((resolve, reject) => {
      axios.request(config).then(response => {
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`; //si va bien lo ponemos default para las proximas llamadas
        resolve(response);
      }).catch((error) => {
        reject(error);
      })
    });

  })
  .catch((error) => {
    Promise.reject(error);
  });
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
