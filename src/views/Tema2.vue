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
    img.col-8.centerimg(src='@/assets/curso/imgtem202.jpg')
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

    .titulo-segundo.color-acento-contenido
      h2 2.1 Características de requerimientos
    img.col-3.imgpos10(src='@/assets/curso/imgtem203.jpg') 
    p.col-7 Hacen referencia al conjunto de pasos para llevar a cabo en una organización, junto con sus miembros, con el fin de lograr las metas propuestas y los objetivos.<br/><br/>Se ha determinado, a través del tiempo e investigaciones, que lo único constante es el cambio en las organizaciones.<br/><br/> Del mismo modo, el avance tecnológico que se globaliza en los últimos tiempos obliga a las empresas a adoptar nuevas herramientas tecnológicas de gestión y capacitación de los empleados en el uso eficiente de ellas, como única alternativa para sobrevivir y mantenerse en el mercado. A continuación, se presenta algunos tipos de procesos dentro de las organizaciones:
    br
    br
    br
    br
    .tarjeta.colorblue.p-3.mb-5
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/componentes/icon1.png")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.mb-1 Tipos de procesos dentro de las organizaciones
                  p.text-small A continuación se invita al aprendiz a consultar el siguiente recurso infográfico donde se presentan algunos tipos de procesos dentro de las organizaciones. 
                .col-sm-auto
                  a.boton.color-acento-botones(:href="obtenerLink('/downloads/CF001_Anexo2_Plantilla_requerimientos_de_software.pdf')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download
    br
    .titulo-segundo.color-acento-contenido
      h2 2.2 Modelado de procesos
    img.col-3.imgpos10(src='@/assets/curso/imgtem204.jpg') 
    ul(style="list-style-type: square").col-7 
      li El gran objetivo del modelado es optimizar los procesos.
      br
      li Partir los procesos en pedazos para permitir estudiarlo, está conectado con las pruebas a realizar percibiendo las posibilidades de cada proceso.
      br
      li Permite conocer a fondo las pruebas y resultados, creando un buen comienzo para la optimización de procesos, identificando los obstáculos y puntos nulos. 
    br
    br
    br
    br
    h4.text Entre los diagramas de comportamiento se tienen:
    br
    br
    .tarjeta.fond3.col-2
      .row.justify-content-center
        img.icon2(src='@/assets/curso/guia.png' alt='AvatarTop')
      h2.text Guías:
      p.margentext4 se usan guías como la información, normas, conocimientos, recibos e informes que nos ayuden a comprender el cuándo, cómo y porqué se produce un proceso. 


    .tarjeta.fond3.col-2
      .row.justify-content-center
        img.icon2(src='@/assets/curso/car.png' alt='AvatarTop')
      h2.text Resultados:
      p.margentext4 surge con la transformación de los insumos.

    .tarjeta.fond3.col-2
      .row.justify-content-center
        img.icon2(src='@/assets/curso/manofactura.png' alt='AvatarTop')
      h2.text Facilitadores: 
      p.margentext4 se utilizan en el proceso de transformación de insumos a resultados.
      
    .tarjeta.fond3.col-2
      .row.justify-content-center
        img.icon2(src='@/assets/curso/insumo.png' alt='AvatarTop')
      h2.text Insumos:
      p.margentext4 todo lo que pasa a través de un proceso es un insumo. 
    br
    br
    .cajon.cajontitle5.col-3
      h3.text Técnicas de modelado de procesos
    br
    p Es ideal visualizar y crear un diagrama o flujo para notar la descripción de cada proceso, para lograr ver claramente el proceso, permitiendo identificar lo que se debe cambiar, mejorar y optimizar, lo cual podrían requerir algunas técnicas. Siempre es importante contar con un software fiable para realizar el modelado de los procesos.
      ul(style="list-style-type: square").col-6.textizq2
        li Recopilar información a través de entrevistas individuales.
        br
        li Sesiones facilitadoras para recopilar datos en reuniones con talento humano de diferentes áreas o dependiendo del objetivo.
        br
        li Enfoque de arriba hacia abajo analizando el proceso del todo en las partes.
        br
        li Enfoque de abajo hacia arriba analizando el proceso del nivel de flujo de trabajo, es más lento, pero se encuentran mayores detalles.
      img.icon3(src='@/assets/curso/imgtem205.jpg').col-2
    br
    .cajon.cajontitle6.col-3
      h3.text Diagrama de flujo
    br
    img.icon4(src='@/assets/curso/imgtem206.jpg').col-4
    p.col-7.textizq3 Es un diagrama que describe un proceso, sistema o algoritmo informático, es usado ampliamente en muchos campos para documentar, estudiar, mejorar, planificar y comunicar procesos que suelen ser muy complejos en algunos diagramas claros y fáciles en su comprensión.<br/><br/>En los diagramas se utilizan rectángulos, óvalos, diamantes y otras figuras más para definir el tipo de paso, junto a flechas conectoras estableciendo flujos y secuencias. Varían desde diagramas simples o hechos a mano, hasta los más complejos creados en computadora, describiendo múltiples pasos y rutas. 
    br
    br
    br
    .cajon-b.col-9.cajontitle1
      h3.col-9.text Las figuras utilizadas en un diagrama de flujo son: 
    br
    br
    PasosA.color-acento-contenido.mb-5(tipo="n")
      .row
        .col-md-8.mb-4.mb-md-0
          h3 Inicio / Final
          p Representa el inicio y el final de un proceso.
        .col-md-4
          figure
            img(src='@/assets/template/1.png')

      .row
        .col-md-4.mb-4.mb-md-0
          figure
            img(src='@/assets/template/2.png')
        
        .col-md-8
          h3 Línea de flujo 
          p Indica el orden de la ejecución de las operaciones. Las flechas indican la siguiente instrucción.

      .row
        .col-md-8.mb-4.mb-md-0
          h3 Entrada / Salida
          p Representa la lectura de datos en la entrada y la impresión de datos en la salida.

        .col-md-4
          figure
            img(src='@/assets/template/3.png')

      .row
        .col-md-4
          figure
            img(src='@/assets/template/4.png')
        
        .col-md-8.mb-4.mb-md-0
          h3 Proceso
          p Representa cualquier tipo de operación.

      .row
        .col-md-8.mb-4.mb-md-0
          h3 Decisión
          p Permite analizar una situación, con base en los valores verdadero y falso.

        .col-md-4
          figure
            img(src='@/assets/template/5.png')
            
    .cajon-b.col-9.cajontitle2
      p.col-10.text2 Los diagramas de flujo a veces los denominan con nombres más especializados, como: 
        br
        br
        img.col-2.icon5(src='@/assets/template/iconcuadro.png') 
        ul(style="list-style-type: square")
          li Mapas de procesos.
          br
          li Diagramas de flujo de procesos.
          br
          li Diagrama de flujo funcional.
          br
          li Mapa de procesos de negocio.
          br
          li BPMN, modelado de procesos de negocio. 

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
