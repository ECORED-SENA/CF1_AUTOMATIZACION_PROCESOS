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
    br
    br
    h4.text Entre los diagramas de estructura se encuentran:
    br
    SlyderE(indicadores="derecha")
      .row
        .col-md-6.mb-4.mb-md-0
          h3 Diagrama de clases 
          p Trazan la estructura de un sistema concreto al modelar sus clases, atributos, operaciones y relaciones entre objetos.
      
        .col-md-6
          figure
            img(src='@/assets/template/esquema1.jpg', alt='Texto que describa la imagen')

      .row
        .col-md-6.mb-4.mb-md-0
          h3 Diagrama de estructura compuesta 
          p Brinda una vista general lógica en general o en parte de un software. Describe el interior de un clasificador estructurado determinado definiendo sus clases de configuración, interfaces, paquetes y relaciones entre ellos.
       
        .col-md-6
          figure
            img(src='@/assets/template/esquema2.jpg', alt='Texto que describa la imagen')

      .row
        .col-md-6.mb-4.mb-md-0
          h3 Diagrama de componentes 
          p Representan las relaciones entre los componentes individuales del sistema por medio de una vista de diseño estática. Ilustran modelado de aspecto lógico y físico. Muestra las organizaciones y dependencias entre componentes y artefactos (Digital Guide, 2020)

        .col-md-6
          figure
            img(src='@/assets/template/esquema3.jpg', alt='Texto que describa la imagen')

      .row
        .col-md-6.mb-4.mb-md-0
          h3 Diagrama de despliegue
          p Llamado también diagrama de implementación, ubicado dentro de los diagramas estructurales porque describe aspectos del sistema (Lucidchart, 2021b).

        .col-md-6
          figure
            img(src='@/assets/template/esquema4.jpg', alt='Texto que describa la imagen')

      .row
        .col-md-6.mb-4.mb-md-0
          h3 Diagrama de objeto
          p Representa una instancia específica de un diagrama de clases en un momento determinado en el tiempo, es muy similar al diagrama de clases. Se enfoca en los atributos de un conjunto de objetos y la relación entre estos objetos.<br/><br/>Los objetos se conectan por medio de una línea que es nombrada, cuando hay una relación entre objetos o clases, esta debe de mostrarse en ambos diagramas.
        .col-md-6
          figure
            img(src='@/assets/template/esquema5.jpg', alt='Texto que describa la imagen')

      .row
        .col-md-6.mb-4.mb-md-0
          h3 Diagrama de paquetes
          p Se emplean para mostrar la organización y disposición de diversos elementos de un modelo en forma de paquetes. El paquete es la agrupación de elementos UML relacionados, como diagramas, clases, documentos, e incluyendo otros paquetes.
        .col-md-6
          figure
            img(src='@/assets/template/esquema6.jpg', alt='Texto que describa la imagen')

    br
    h4.text Entre los diagramas de comportamiento se tienen:
    br

    SlyderE(indicadores="derecha")
      .row
        .col-md-4.mb-4.mb-md-0
          h3 Diagrama de actividades
          p Describen lo que debe suceder en el sistema que se está modelando.

        .col-md-8
          figure
            img(src='@/assets/template/Grupo1.jpg', alt='Texto que describa la imagen')

      .row
        .col-md-4.mb-4.mb-md-0
          h3 Diagrama de interacción o secuencia
          p Se emplea para captar el comportamiento interactivo de un sistema, describiendo el flujo de mensajes dentro de un sistema.

        .col-md-8
          figure
            img(src='@/assets/template/Grupo2.jpg', alt='Texto que describa la imagen')

      .row
        .col-md-4.mb-4.mb-md-0
          h3 Diagrama de caso de uso
          p Describen o especifican lo que hace el sistema desde un punto de vista externo. Plantea en su diagrama escenarios lo que sucede cuando alguien interactúa con el sistema, suministrando un resumen de una determinada tarea u objetivo.<br/><br/>Ejemplo de un caso de uso de un sistema bancario.
        .col-md-8
          figure
            img(src='@/assets/template/Grupo3.jpg', alt='Texto que describa la imagen')

      .row
        .col-md-4.mb-4.mb-md-0
          h3 Diagrama de máquina de estado
          p Es también conocido como diagrama de estados, es un tipo de diagrama de comportamiento en el UML, que muestra transiciones entre diversos objetos.<br/><br/>Ejemplo de diagrama de estado de un aeropuerto.
        .col-md-8
          figure
            img(src='@/assets/template/Grupo4.jpg', alt='Texto que describa la imagen')





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
