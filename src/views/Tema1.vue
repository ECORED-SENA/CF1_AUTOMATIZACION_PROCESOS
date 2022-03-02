<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span.text-white 1
      h1 Requerimientos

    img.imgpos(src='@/assets/curso/imgtem01.jpg') 
    .cajon-b.colorcajon.col-5 
      p.align-center.margentext Los requerimientos son las peticiones o solicitudes que se consideran necesarias o importantes para satisfacer una o varias necesidades, ante un problema o mejora de un proceso.    
    br
    p.col-6 Es decir, son las condiciones o capacidades que deben tener los sistemas, productos o servicios para lograr satisfacer un contrato, estándar o algunas otras especificaciones o documentos que se hayan establecido formalmente.<br><br>Los requerimientos no indican el diseño que debe tener el producto, indican las funciones y contenidos que se espera que tenga y la manera cómo los usuarios interactúan con él; los requerimientos varían con el tiempo, puesto que, con la puesta en marcha del producto, se podrán generar nuevos requerimientos (diferentes o complementarios a los iniciales).
    


</template>

<script>
import Muestras from '../components/Muestras' // borrar una vez el componente "Muestras" no se necesite
export default {
  name: 'Tema1',
  components: {
    Muestras, // borrar una vez el componente "Muestras" no se necesite
  },
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
