<template>
    <footer id="footerComponent">
        <div class="cajaNegra" @click="volverArriba">
            <i class="fa fa-chevron-up fa-2x"></i>
        </div>
        <div class="container2">
            <br/><br/>
            <h1>¡Síguenos en las redes sociales!</h1>
            <br/>
            <div class="social-media cajas">
                    <a href="https://twitter.com" class="link cajapeque">
                        <i class="fab fa-twitter"></i>
                    </a>
                    <a href="https://t.me" class="link cajapeque">
                        <i class="fab fa-telegram"></i>
                    </a>
                    <a href="https://www.facebook.com" class="link cajapeque">
                        <i class="fab fa-facebook"></i>
                    </a>
                    <a href="https://www.reddit.com" class="link cajapeque">
                        <i class="fab fa-reddit"></i>
                    </a>
                    <a href="https://medium.com" class="link cajapeque">
                        <i class="fab fa-medium"></i>
                    </a>
                    <a href="https://www.youtube.com/channel/MrToons3" class="link cajapeque">
                        <i class="fab fa-youtube"></i>
                    </a>
                    <a href="https://github.com/LORJIM" class="link cajapeque">
                        <i class="fab fa-github"></i>
                    </a>
            </div>
        </div>
        <div class="container2" id="copyright">
            Copyright LORJIM. Todos los derechos reservados.
        </div>
    </footer>    
</template>


<script>
export default {
    name: 'FooterComponent',
    methods: {
        volverArriba(){
            window.scroll({
                  top: 0,
                  left: 0,
                  behavior: 'smooth'
                });
        }
    }
}
</script>