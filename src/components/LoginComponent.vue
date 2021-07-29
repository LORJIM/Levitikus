<template>
    <section id="loginComponent">
      <div class="container">
       <input type="text" v-model="username"/>
       <input type="password" v-model="password"/>
       <button @click="login()" class="btnTransparente">Iniciar Sesión</button>
      </div>
    </section>
</template>
<script>
export default {
  name: 'LoginComponent',
  data(){
      return{
          username:null,
          password:null
      }
  },
  methods:{
      login(){
            var baseURI = '/login';
            let loader = this.$loading.show();
            //llamamos al login
            this.$http.get(baseURI) //hacemos primero un get para obtener el CSRF del form default de Spring Security
            .then((result) => { //si va bien procedemos con la autenticacion
                const {body} = new DOMParser().parseFromString(result.data, 'text/html');
                var csrf = body.getElementsByTagName('input')[2].defaultValue; // el csrf siempre es el tercer input del form
                //tenemos que obtener el csrf asi, ya que las cookies JSESSIONID Y XSRF se almacenan en una ruta de vue (no en la principal) y no podemos acceder a ellas facilmente
                var params = new URLSearchParams();
                params.append('username', this.username);
                params.append('password', this.password);
                params.append('_csrf', csrf);
                this.$http.post(baseURI, params)
                .then(() => {
                    baseURI = '/oauth2/authorize';
                    var params = {
                        'client_id': 'client1',
                        'response_type': 'code'
                    };
                    this.$http.get(baseURI, {params}) //obtener Authorization Code
                    .then((result) => {
                        baseURI = '/oauth2/token';
                        params = new URLSearchParams();
                        params.append('grant_type', 'authorization_code');
                        params.append('code', result.request.responseURL.substring(result.request.responseURL.indexOf("code=")+5));
                        const options = {
                            headers: {
                                'Authorization':'Basic Y2xpZW50MTpzZWNyZXQx'
                            }
                        };
                        this.$http.post(baseURI, params, options) //obtener Access Token
                        .then((result) => {
                            console.log(result);
                            this.$cookies.set('RT',result.data.refresh_token);
                            this.$http.defaults.headers.common['Authorization'] = 'Bearer '+result.data.access_token; //esto establece nuestro access token en el header autorizacion de todas las llamadas, siempre que estemos logeados
                            this.$router.push('/about');
                        })
                        .catch(function (error) {
                            console.log(error);
                        })
                    })
                    .catch(function (error) {
                        console.log(error);
                    })
                })
                .catch(function (error) {
                    console.log(error);
                })
            })
            .catch(function (error) {
               console.log(error);
            })
            .then(function () {
                loader.hide();
            });

            
            
      }
  }
}
</script>