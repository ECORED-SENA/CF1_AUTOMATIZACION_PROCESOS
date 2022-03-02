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
    br

    img.imgpos2(src='@/assets/curso/imgtem02.jpg')
    .cajon-b.colorcajon2.col-5  
      p.align-center.margentext El propósito principal de los requerimientos es asegurar la satisfacción de las expectativas de los clientes y sus interesados (stakeholders), internos y externos, relacionando de manera eficiente, los vínculos que esperan los clientes y usuarios, y lo que el grupo del proyecto tiende a desarrollar    
      p.posctext Ahora bien, los requerimientos son adaptados a todo tipo de proyectos, así, se trata de garantizar el óptimo funcionamiento de los procesos, sirviendo de referencia para el aseguramiento y control de los cambios que se pueden presentar en el proyecto (trazabilidad). 
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    .cajon.cajontitle2.col-2
      h3.text Control de cambios
    <br>
    <br>
      img.imgpos3(src='@/assets/curso/imgtem03.jpg')
      p.align-center.col-7 Durante la ejecución del proyecto se encuentran muchas situaciones, en las que se identifican nuevas necesidades, las cuales ni siquiera se habían pensado, pero se hace necesario anexarlas a la aplicación.<br><br>Estos cambios imprevistos, hacen que se replanteen nuevos requerimientos e incluso requerimientos ya documentados.<br><br>Se debe definir desde un principio la forma en que se gestionaran dichos cambios, debido a que pueden generar retrocesos en el desarrollo y en la planeación.<br><br>Se deben incluir cláusulas contractuales claras para que las partes a intervenir lo tengan en cuenta, y no se tenga que retroceder en lo que se ha desarrollado.
    <br>
    <br>
    <br>
    h3 Técnicas en el levantamiento de requerimientos
    <br>
    <br>
    p.col12 La etapa fundamental para la creación de un sistema, dentro de un proyecto informático, es la identificación y documentación de los requerimientos del sistema al iniciar el proyecto, puesto que en muchas situaciones se plantean ideas y se ayudan a prevenir ciertos errores que se puedan presentar, evitando así el fracaso del mismo.<br><br>El levantamiento de requerimientos hace referencia a la identificación y documentación del sistema, partiendo de usuarios, clientes o interesados (stakeholders); también se le llama recopilación de requerimientos.<br><br>A continuación, se muestran algunas técnicas para obtener requerimientos en los proyectos de software:
    <br>
    <br>   
    img.imgpos3(src='@/assets/curso/imgtem04.jpg')
    .row.mb-5
      .col-md-12.mb-5.mb-md-0
        LineaTiempoD.color-acento-contenido
          p.text-small(numero="1" titulo="Praesent luctus") Lorem ipsum dolor sit amet, consectetur adipiscvinar. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sit amet fermentum ex, in cursus nulla. Ut in sapien et enim suscipit accumsan at eu tellus. Integer faucibus finibus augue, vel aliquam dolor elementum et. Donec viverra leo quam, a lacinia quam cursus in. Donec feugiat volutpat metus at pulvinar.
          
          p.text-small(numero="2" titulo="Praesent luctus") Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sit amet fermentum ex, in cursus nulla. Ut in sapien et enim suscipit accumsan at eu tellus. Integer faucibus finibus augue, vel aliquam dolor elementum et. Donec viverra leo quam, a lacinia quam cursus in. Donec feugiat volutpat metus at pulvinar. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sit amet fermentum ex, in cursus nulla. Ut in sapien et enim suscipit accumsan at eu tellus. Integer faucibus finibus augue, vel aliquam dolor elementum et. Donec viverra leo quam, a lacinia quam cursus in. Donec feugiat volutpat metus at pulvinar.
          
          p.text-small(numero="3" titulo="Praesent luctus") Donec feugiat volutpat metus at pulvinar. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sit amet fermentum ex, in cursus nulla. Ut in sapien et enim suscipit accumsan at eu tellus. Integer faucibus finibus augue, vel aliquam dolor elementum et. Donec viverra leo quam, a lacinia quam cursus in. Donec feugiat volutpat metus at pulvinar.
          
          p.text-small(numero="4" titulo="Praesent luctus") quam cursus in. Donec feugiat volutpat metus at pulvinar.

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
