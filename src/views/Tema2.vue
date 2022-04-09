<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal.color-acento-contenido(data-aos="zoom-in")
      .titulo-principal__numero
        span.text-white 2
      h1 Notaciones de requerimientos

    
    .row.align-items-center.mb-3(data-aos="zoom-in-left") 
      .col-lg-7
        p.m-2 La notación textual de los requerimientos es necesaria para la relación de la comunicación efectiva entre clientes, usuarios e interesados, deben lograr interpretar lo que queda plasmado en figuras.<br/><br/>La notación gráfica que se utiliza en la especificación de los requerimientos por excelencia es UML (Lenguaje de Modelado Unificado), específicamente en los diagramas de casos de uso, estados y actividades, que describen en detalles los usos del sistema.<br/><br/>Como se muestra a continuación, para los diagramas UML existen diferentes versiones aprobadas por la ISO, cuentan con diferentes tipos, clasificándolos según su estructura o comportamiento:
      .col-lg-5
        .imagen        
          img(src='@/assets/curso/imgtem201.jpg', style="width: 350px") 
    br
    .row
      h4.text(data-aos="zoom-in") Entre los diagramas de estructura se encuentran:
    br
    .row
      SlyderE(indicadores="derecha")(data-aos="zoom-in-left") 
        .row
          .col-md-4.mb-4.mb-md-0
            h3 Diagrama de clases 
            p Trazan la estructura de un sistema concreto al modelar sus clases, atributos, operaciones y relaciones entre objetos.
        
          .col-md-8
            figure
              img(src='@/assets/template/esquema1.svg', alt='Texto que describa la imagen')

        .row
          .col-md-4.mb-4.mb-md-0
            h3 Diagrama de estructura compuesta 
            p Brinda una vista general lógica en general o en parte de un software. Describe el interior de un clasificador estructurado determinado definiendo sus clases de configuración, interfaces, paquetes y relaciones entre ellos.
        
          .col-md-8
            figure
              img(src='@/assets/template/esquema2.svg', alt='Texto que describa la imagen')

        .row
          .col-md-4.mb-4.mb-md-0
            h3 Diagrama de componentes 
            p Representan las relaciones entre los componentes individuales del sistema por medio de una vista de diseño estática. Ilustran modelado de aspecto lógico y físico.<br><br/> Muestra las organizaciones y dependencias entre componentes y artefactos (Digital Guide, 2020).

          .col-md-8
            figure
              img(src='@/assets/template/esquema3.svg', alt='Texto que describa la imagen')

        .row
          .col-md-4.mb-4.mb-md-0
            h3 Diagrama de despliegue
            p Llamado también diagrama de implementación, ubicado dentro de los diagramas estructurales porque describe aspectos del sistema (Lucidchart, 2021b).

          .col-md-8
            figure
              img(src='@/assets/template/esquema4.svg', alt='Texto que describa la imagen')

        .row
          .col-md-4.mb-4.mb-md-0
            h3 Diagrama de objeto
            p Representa una instancia específica de un diagrama de clases en un momento determinado en el tiempo, es muy similar al diagrama de clases. Se enfoca en los atributos de un conjunto de objetos y la relación entre estos objetos.<br/><br/>Los objetos se conectan por medio de una línea que es nombrada, cuando hay una relación entre objetos o clases, esta debe de mostrarse en ambos diagramas.
          .col-md-8
            figure
              img(src='@/assets/template/esquema5.svg', alt='Texto que describa la imagen')

        .row
          .col-md-4.mb-4.mb-md-0
            h3 Diagrama de paquetes
            p Se emplean para mostrar la organización y disposición de diversos elementos de un modelo en forma de paquetes. El paquete es la agrupación de elementos UML relacionados, como diagramas, clases, documentos, e incluyendo otros paquetes.
          .col-md-8
            figure
              img(src='@/assets/template/esquema6.svg', alt='Texto que describa la imagen')
    br
    .row
      h4.text(data-aos="zoom-in") Entre los diagramas de comportamiento se tienen:
    br
    .row
      SlyderE(indicadores="derecha")(data-aos="zoom-in-left") 
        .row
          .col-md-4.mb-4.mb-md-0
            h3 Diagrama de actividades
            p Describen lo que debe suceder en el sistema que se está modelando.

          .col-md-8
            figure
              img(src='@/assets/template/Grupo1.svg', alt='Texto que describa la imagen')

        .row
          .col-md-4.mb-4.mb-md-0
            h3 Diagrama de interacción o secuencia
            p Se emplea para captar el comportamiento interactivo de un sistema, describiendo el flujo de mensajes dentro de un sistema.

          .col-md-8
            figure
              img(src='@/assets/template/Grupo2.svg', alt='Texto que describa la imagen')

        .row
          .col-md-4.mb-4.mb-md-0
            h3 Diagrama de caso de uso
            p Describen o especifican lo que hace el sistema desde un punto de vista externo. Plantea en su diagrama escenarios lo que sucede cuando alguien interactúa con el sistema, suministrando un resumen de una determinada tarea u objetivo.<br/><br/>Ejemplo de un caso de uso de un sistema bancario.
          .col-md-8
            figure
              img(src='@/assets/template/Grupo3.svg', alt='Texto que describa la imagen')

        .row
          .col-md-4.mb-4.mb-md-0
            h3 Diagrama de máquina de estado
            p Es también conocido como diagrama de estados, es un tipo de diagrama de comportamiento en el UML, que muestra transiciones entre diversos objetos.<br/><br/>Ejemplo de diagrama de estado de un aeropuerto.
          .col-md-8
            figure
              img(src='@/assets/template/Grupo4.svg', alt='Texto que describa la imagen')
    separador
    
    .titulo-segundo.color-acento-contenido(data-aos="zoom-in")
      #t_2_1.h2 2.1 Procesos organizacionales
    br
    .row.align-items-center.mb-3(data-aos="zoom-in-left") 
      .col-lg-7
        p.m-2 Hacen referencia al conjunto de pasos para llevar a cabo en una organización, junto con sus miembros, con el fin de lograr las metas propuestas y los objetivos.<br/><br/>Se ha determinado, a través del tiempo e investigaciones, que lo único constante es el cambio en las organizaciones.<br/><br/> Del mismo modo, el avance tecnológico que se globaliza en los últimos tiempos obliga a las empresas a adoptar nuevas herramientas tecnológicas de gestión y capacitación de los empleados en el uso eficiente de ellas, como única alternativa para sobrevivir y mantenerse en el mercado. A continuación, se presenta algunos tipos de procesos dentro de las organizaciones:
      .col-lg-5
        .imagen        
          img(src='@/assets/curso/imgtem203.jpg', style="width: 420px") 
    br
    .row
      .tarjeta.colorblue.p-4.mb-5(data-aos="zoom-in")(style='background-color: #F3F9FF')
            .row.justify-content-around.align-items-center
              .col-3.col-sm-2.col-lg-1
                img(src="@/assets/componentes/icon1.png")
              .col
                .row.justify-content-between.align-items-center
                  .col.mb-3.mb-sm-0
                    h4.mb-3 Tipos de procesos dentro de las organizaciones
                    p.text-small A continuación se invita al aprendiz a consultar el siguiente recurso infográfico donde se presentan algunos tipos de procesos dentro de las organizaciones. 
                  .col-sm-auto
                    a.boton.color-acento-botones(:href="obtenerLink('/downloads/CF001_Anexo2_Plantilla_requerimientos_de_software.pdf')" target="_blank")
                      span Descargar
                      i.fas.fa-file-download
    separador
    
    .titulo-segundo.color-acento-contenido(data-aos="zoom-in-right")
      #t_2_2.h2 2.2 Modelado de procesos
    br
    .row.align-items-center.mb-3(data-aos="zoom-in-left") 
      .col-lg-7
        ul(style="list-style-type: square").lista-ul.lista-ul--color
          li 
            i.fas.fa-angle-right 
            p El gran objetivo del modelado es optimizar los procesos.
          li 
            i.fas.fa-angle-right 
            p Partir los procesos en pedazos para permitir estudiarlo, está conectado con las pruebas a realizar percibiendo las posibilidades de cada proceso.
          li 
            i.fas.fa-angle-right 
            p Permite conocer a fondo las pruebas y resultados, creando un buen comienzo para la optimización de procesos, identificando los obstáculos y puntos nulos. 
      .col-lg-5
        .imagen        
          img(src='@/assets/curso/imgtem204.jpg', style="width: 500px") 
    br
    .row
      h4.text(data-aos="zoom-in") Las categorías de información para tener en cuenta para el modelado de procesos son:
    br
    .row.col-12
      .col-3.tarjeta-apilado.verde.p-0
        img(src='@/assets/curso/tar3.png', alt='', class='img-fluid', style="width: 290px")
        h4.text-center.m-2 Insumos
        p.m-4.text-center Todo lo que pasa a través de un proceso es un insumo.

      .col-3.tarjeta-apilado.verde.p-0
        img(src='@/assets/curso/tar4.png', alt='', class='img-fluid', style="width: 290px")
        h4.text-center.m-2 Resultados
        p.m-4.text-center Surge con la transformación de los insumos. 

      .col-3.tarjeta-apilado.verde.p-0
        img(src='@/assets/curso/tar5.png', alt='', class='img-fluid', style="width: 290px")
        h4.text-center.m-2 Facilitadores
        p.m-4.text-center Se utilizan en el proceso de transformación de insumos a resultados.

      .col-3.tarjeta-apilado.verde.p-0
        img(src='@/assets/curso/tar6.png', alt='', class='img-fluid', style="width: 290px")
        h4.text-center.m-2 Guías
        p.m-4.text-center se usan guías como la información, normas, conocimientos, recibos e informes que nos ayuden a comprender el cuándo, cómo y porqué se produce un proceso. 
      br
    .row
      .cajon.cajontitle5.col-3(data-aos="zoom-in")
        h3.text Técnicas de modelado de procesos
    br
    .row
      p(data-aos="zoom-in") Es ideal visualizar y crear un diagrama o flujo para notar la descripción de cada proceso, para lograr ver claramente el proceso, permitiendo identificar lo que se debe cambiar, mejorar y optimizar, lo cual podrían requerir algunas técnicas. Siempre es importante contar con un software fiable para realizar el modelado de los procesos.
    br
    .row.align-items-center.m-4(data-aos="zoom-in-left").justify-content-center
      .col-md-3
        .imagen.m-3       
          img(src='@/assets/curso/imgtem205.jpg', style="width: 280px") 
      .col-md-8
        ul(style="list-style-type: square").lista-ul.lista-ul--color
          li 
            i.fas.fa-angle-right 
            p Recopilar información a través de entrevistas individuales.
          li 
            i.fas.fa-angle-right 
            p Sesiones facilitadoras para recopilar datos en reuniones con talento humano de diferentes áreas o dependiendo del objetivo.
          li 
            i.fas.fa-angle-right 
            p Enfoque de arriba hacia abajo analizando el proceso del todo en las partes.
          li 
            i.fas.fa-angle-right 
            p Enfoque de abajo hacia arriba analizando el proceso del nivel de flujo de trabajo, es más lento, pero se encuentran mayores detalles.
    br
    .row
      .cajon.cajontitle6.col-3(data-aos="zoom-in")
        h3.text Diagrama de flujo
    br
    .row.align-items-center.mb-3
      .col-lg-7
        p.m-2 Es un diagrama que describe un proceso, sistema o algoritmo informático, es usado ampliamente en muchos campos para documentar, estudiar, mejorar, planificar y comunicar procesos que suelen ser muy complejos en algunos diagramas claros y fáciles en su comprensión.<br><br/>En los diagramas se utilizan rectángulos, óvalos, diamantes y otras figuras más para definir el tipo de paso, junto a flechas conectoras estableciendo flujos y secuencias. Varían desde diagramas simples o hechos a mano, hasta los más complejos creados en computadora, describiendo múltiples pasos y rutas. 
      .col-lg-4
        .imagen.m-4        
          img(src='@/assets/curso/imgtem206.jpg', style="width: 400px")
    br
    .row
      .cajon-b.col-9.cajontitle7(data-aos="zoom-in")
        h3.col-9.text Las figuras utilizadas en un diagrama de flujo son: 
    br
    br
    .row.col-lg-9.caj
      PasosA.color-acento-contenido(tipo="n")(data-aos="zoom-in").pasos-a__linea__esquina__linea
        .row
          .col-8
            h3 Inicio / Final
            p Representa el inicio y el final de un proceso.
          .col-4
            figure
              img.m-2(src='@/assets/template/1.png')

        .row
          .col-4
            figure
              img.m-2(src='@/assets/template/2.png')
          
          .col-8
            h3 Línea de flujo 
            p Indica el orden de la ejecución de las operaciones. Las flechas indican la siguiente instrucción.

        .row
          .col-8
            h3 Entrada / Salida
            p Representa la lectura de datos en la entrada y la impresión de datos en la salida.

          .col-4
            figure
              img.m-2(src='@/assets/template/3.png')

        .row
          .col-4
            figure
              img.m-2(src='@/assets/template/4.png')
          
          .col-8
            h3 Proceso
            p Representa cualquier tipo de operación.

        .row
          .col-8
            h3 Decisión
            p Permite analizar una situación, con base en los valores verdadero y falso.

          .col-4
            figure
              img.m-2(src='@/assets/template/5.png')
    br
    .row.justify-content-center
      .col-md-7.cajon-a.color-primario(style='background-color: #ECF7FF')(data-aos="zoom-in").p-4
        .col-12
          p Los diagramas de flujo a veces los denominan con nombres más especializados, como:
        .col-12
          .col-3
            img.icon5(src='@/assets/template/iconcuadro.png') 
          .col-12
            ul.lista-ul(style="list-style-type: square").lista-ul.lista-ul--color
              li 
                i.fas.fa-angle-right 
                p Mapas de procesos.
              li 
                i.fas.fa-angle-right 
                p Diagramas de flujo de procesos.
              li 
                i.fas.fa-angle-right 
                p Diagrama de flujo funcional.
              li 
                i.fas.fa-angle-right 
                p Mapa de procesos de negocio.
              li 
                i.fas.fa-angle-right 
                p BPMN, modelado de procesos de negocio. 
    br
    .row
      h3.text2(data-aos="zoom-in") Se relacionan con otros diagramas populares, como: 
    br
    .row
      SlyderE(indicadores="derecha")(data-aos="zoom-in")
        .row
          .col-md-4.mb-4.mb-md-0
            h3 Mapa de procesos
            p Es un diagrama de valor que representa una manera de inventario gráfico de los procesos de una organización en forma relacionada.

          .col-md-8
            figure
              img(src='@/assets/template/Diagrama1.svg')

        .row
          .col-md-4.mb-4.mb-md-0
            h3 Diagrama de flujo
            p Es la representación gráfica de cada proceso y sus pasos se representan por un símbolo diferente que contiene una descripción de la etapa del proceso.

          .col-md-8
            figure
              img(src='@/assets/template/Diagrama2.svg')

        .row
          .col-md-4.mb-4.mb-md-0
            h3 Diagrama de flujo funcional
            p Es un tipo de diagrama de flujo, que muestra el movimiento entre unidades de trabajo. Puede utilizar símbolos de los diagramas de flujo estándares (Edukativos, 2013).

          .col-md-8
            figure
              img(src='@/assets/template/Diagrama3.svg')

        .row
          .col-md-4.mb-4.mb-md-0
            h3 Mapas de proceso de negocio
            p Describen los pasos que una empresa debe realizar para completar un proceso, por ejemplo, contratar a un empleado, solicitar productos y transportarlos.

          .col-md-8
            figure
              img(src='@/assets/template/Diagrama4.svg')

        .row
          .col-md-4.mb-4.mb-md-0
            h3 Símbolos y notación de diagrama BPMN
            p El diagrama de modelo y notación de procesos de negocio es también llamado diagrama BPMN, utilizado para crear diagramas de flujo de modelos de procesos de negocio, que sean fáciles de leer.
          
          .col-md-8
            figure
              img(src='@/assets/template/Diagrama5.svg')
    br
    .row
      .cajon.cajontitle6.col-3(data-aos="zoom-in")
        h3.text El modelo BPMN
    br
    .row.align-items-center.mb-3
      .col-lg-7
        p.m-2 Se denomina así por su sigla en inglés <i>Business Process Modeling Notation</i>, notación para el modelado de procesos de negocios, es el estándar internacional para modelar procesos, la notación gráfica que describe la lógica de los pasos de un proceso de negocio.<br/><br/> Los principales elementos de BPMN son:
        ul.lista-ul(style="list-style-type: square").lista-ul.lista-ul--color
          li 
            i.fas.fa-angle-right 
            p Eventos.
          li 
            i.fas.fa-angle-right 
            p Actividades.
          li 
            i.fas.fa-angle-right 
            p Compuertas (control de flujo).
      
      .col-lg-4
        .imagen.m-2        
          img(src='@/assets/curso/imgtem207.jpg', style="width: 420px")
    br
    .row
      p.col-12.text3(data-aos="zoom-in-right") Se representan gráficamente por un círculo y van describiendo algo que sucede, a diferencia de las actividades que son algo que se realiza o se hace. A continuación, se muestra su representación gráfica y su definición:
    br 
    .row
      .col-12
        .row
          .col-4.p-0.m-2.tarjeta-apilado.azul
            img(src='@/assets/curso/tar7.png', alt='', class='img-fluid')
            h3.text-center.m-3 Eventos
            p.m-4.text-center Representan algo que ocurre o que puede ocurrir durante el curso de un proceso.

          .col-4.p-0.m-2.tarjeta-apilado.azul
            img(src='@/assets/curso/tar8.png', alt='', class='img-fluid')
            h3.text-center.m-3 Actividades
            ul.lista-ul(style="list-style-type: square").lista-ul.lista-ul--color(data-aos="zoom-in-left").m-4.text-center
              li 
                i.fas.fa-angle-right  
                p Representan el trabajo realizado dentro de una organización.
              li 
                i.fas.fa-angle-right 
                p Consumen recursos.
              li 
                i.fas.fa-angle-right    
                p Pueden ser simples o compuestas.
  
          .col-4.p-0.m-2.tarjeta-apilado.azul
            img(src='@/assets/curso/tar9.png', alt='', class='img-fluid')
            h3.text-center.m-3 Compuertas
            p.m-4.text-center Son los elementos para controlar los puntos de divergencia y convergencia del flujo. 
    br
    .row
      p.col-12.text4(data-aos="zoom-in") El siguiente es un ejemplo de modelo BPMN:
    br
    .row
      img(src='@/assets/curso/modelo.svg')(data-aos="zoom-in")
      .col-lg-10.m-t1-top.p-2.caj
        .tarjeta.coloramarillo.p-4(data-aos="zoom-in")
          .row.justify-content-around.align-items-center
            .col-lg-1
              img(src="@/assets/componentes/video.png")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  p.text-small Para mayor comprensión de los diagramas BPMN y aprender a hacer uno se invita al aprendiz a ver el Video ayuda para hacer un diagrama BPMN ubicado en la sección de material complementario.


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
