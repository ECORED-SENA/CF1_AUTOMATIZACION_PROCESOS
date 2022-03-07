<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span.text-white 2
      h1 Notaciones de requerimientos

    img.col-3.imgpos10(src='@/assets/curso/imgtem201.jpg') 
    p.col-8 La notación textual de los requerimientos es necesaria para la relación de la comunicación efectiva entre clientes, usuarios e interesados, deben lograr interpretar lo que queda plasmado en figuras.<br/><br/>La notación gráfica que se utiliza en la especificación de los requerimientos por excelencia es UML (Lenguaje de Modelado Unificado), específicamente en los diagramas de casos de uso, estados y actividades, que describen en detalles los usos del sistema.<br/><br/>Como se muestra a continuación, para los diagramas UML existen diferentes versiones aprobadas por la ISO, cuentan con diferentes tipos, clasificándolos según su estructura o comportamiento:
    br
    br
    img.col-10.centerimg(src='@/assets/curso/imgtem202.jpg')
    

    
</template>

<script>
export default {
  name: 'Tema2',
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
