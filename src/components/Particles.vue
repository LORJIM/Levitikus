<template>
    <div id="app">
        <Particles
                id="tsparticles"
                :particlesInit="particlesInit"
                :particlesLoaded="particlesLoaded"
                url="http://foo.bar/particles.json"
        />

        <!-- or -->

        <Particles
                id="tsparticles"
                :particlesInit="particlesInit"
                :particlesLoaded="particlesLoaded"
                :options="{
                    background: {
                        color: {
                            value: '#000000'//'#203260'
                        }
                    },
                    fpsLimit: 60,
                    interactivity: {
                        detectsOn: 'canvas',
                        events: {
                            /*onClick: { //esto lo que hace es generar mas particulas si hacemos click, lo quito por temas de rendimiento
                                enable: true,
                                mode: 'push'
                            },*/
                            onHover: {
                                enable: true,
                                mode: 'repulse'
                            },
                            resize: true
                        },
                        modes: {
                            bubble: {
                                distance: 400,
                                duration: 2,
                                opacity: 0.8,
                                size: 40
                            },
                            push: {
                                quantity: 4
                            },
                            repulse: {
                                distance: 80,
                                duration: 0.4
                            }
                        }
                    },
                    particles: {
                        color: {
                            value: '#00FFFF'//'#00ff00'//'#ff0000'//
                        },
                        links: {
                            color: '#00FFFF',//'#00ff00',//'#ff0000',
                            distance: 150,
                            enable: true,
                            opacity: 0.5,
                            width: 0.5
                        },
                        collisions: {
                            enable: true
                        },
                        move: {
                            direction: 'none',
                            enable: true,
                            outMode: 'bounce',
                            random: false,
                            speed: 0.7,
                            straight: false
                        },
                        number: {
                            density: {
                                enable: true,
                                value_area: 800
                            },
                            value: 100
                        },
                        opacity: {
                            value: 0.5
                        },
                        shape: {
                            type: 'circle'
                        },
                        size: {
                            random: true,
                            value: 5
                        }
                    },
                    detectRetina: true
                }"
        />
    </div>
</template>