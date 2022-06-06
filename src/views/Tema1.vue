<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span.text-white 1
      h1 Requerimientos

    .row.mb-4
      .col-lg-6
        .cajon.color-primario.p-4.mb-4.mb-lg-0(style='background-color: #ECF7FF')
          p.mb-0 Los requerimientos son las peticiones o solicitudes que se consideran necesarias o importantes para satisfacer una o varias necesidades, ante un problema o mejora de un proceso.    
        p.m-2 Es decir, son las condiciones o capacidades que deben tener los sistemas, productos o servicios para lograr satisfacer un contrato, estándar o algunas otras especificaciones o documentos que se hayan establecido formalmente.<br><br>Los requerimientos no indican el diseño que debe tener el producto, indican las funciones y contenidos que se espera que tenga y la manera cómo los usuarios interactúan con él; los requerimientos varían con el tiempo, puesto que, con la puesta en marcha del producto, se podrán generar nuevos requerimientos (diferentes o complementarios a los iniciales).
      .col-lg-6
        .imagen        
          img(src='@/assets/curso/imgtem01.jpg', style="width: 400px") 
    
    .row.align-items-center.mb-3
      .col-lg-5
        .imagen        
          img.m-2(src='@/assets/curso/imgtem02.jpg', style="width: 400px") 
      .col-lg-7
        .cajon.color-acento-botones.p-4.mb-4.mb-lg-0(style='background-color: #FEF4D6')
          p.mb-0 El propósito principal de los requerimientos es asegurar la satisfacción de las expectativas de los clientes y sus interesados (<i> stakeholders </i>), internos y externos, relacionando de manera eficiente, los vínculos que esperan los clientes y usuarios, y lo que el grupo del proyecto tiende a desarrollar.
        p.m-2 Ahora bien, los requerimientos son adaptados a todo tipo de proyectos, así, se trata de garantizar el óptimo funcionamiento de los procesos, sirviendo de referencia para el aseguramiento y control de los cambios que se pueden presentar en el proyecto (trazabilidad).
      
    .row.justify-content-start.align-items-center
      .col-lg-3.cajontitle2.mb-4(data-aos="zoom-in")      
        h3.text.mb-0 Control de cambios
    
    .row.mb-4
      .col-lg-7
        p.align-center(data-aos="zoom-in-right") Durante la ejecución del proyecto se encuentran muchas situaciones, en las que se identifican nuevas necesidades, las cuales ni siquiera se habían pensado, pero se hace necesario anexarlas a la aplicación.<br><br>Estos cambios imprevistos, hacen que se replanteen nuevos requerimientos e incluso requerimientos ya documentados.<br><br>Se debe definir desde un principio la forma en que se gestionarán dichos cambios, debido a que pueden generar retrocesos en el desarrollo y en la planeación.<br><br>Se deben incluir cláusulas contractuales claras para que las partes a intervenir lo tengan en cuenta, y no se tenga que retroceder en lo que se ha desarrollado.
      .col-lg-3
        img.imgpos3.m-4(src='@/assets/curso/imgtem03.jpg')(data-aos="zoom-in-left")    
    
    .row.mb-4
      h3(data-aos="zoom-out-right") Técnicas en el levantamiento de requerimientos
    
    .row.mb-5
      p.col12(data-aos="zoom-out-right") La etapa fundamental para la creación de un sistema, dentro de un proyecto informático, es la identificación y documentación de los requerimientos del sistema al iniciar el proyecto, puesto que en muchas situaciones se plantean ideas y se ayudan a prevenir ciertos errores que se puedan presentar, evitando así el fracaso del mismo.<br><br>El levantamiento de requerimientos hace referencia a la identificación y documentación del sistema, partiendo de usuarios, clientes o interesados; también se le llama recopilación de requerimientos.<br><br>A continuación, se muestran algunas técnicas para obtener requerimientos en los proyectos de <i>software</i>:
    
    .row.mb-5
      .col-lg-7
        .row.mb-5(data-aos="fade-up")
          .col-md-12.mb-4.mb-md-0
            LineaTiempoD.color-acento-contenido.text-bold
              p.text-small(numero="1" titulo="Análisis de documentación").m-3
                ul.lista-ul(style="list-style-type: square").lista-ul.lista-ul--color
                  li 
                    i.fas.fa-angle-right 
                    p Es donde se obtiene la información sobre los requerimientos funcionales y requerimientos no funcionales partiendo de documentos ya elaborados.
                  li 
                    i.fas.fa-angle-right 
                    p Se utiliza cuando los expertos en el desarrollo no están disponibles para ser interrogados o ya no forman parte del proceso o la empresa.
                  li 
                    i.fas.fa-angle-right 
                    p Evitar riesgos al no tener documentación. En el momento de necesitarla, se tendrá que hacer en el momento menos oportuno y sin recordar nada, perdiendo información valiosa y tiempo, buscando las soluciones.
              
              p.text-small(numero="2" titulo="Observación").m-3
                ul.lista-ul(style="list-style-type: square").lista-ul.lista-ul--color
                  li 
                    i.fas.fa-angle-right 
                    p Siempre será necesario analizar el entorno de trabajo de los usuarios, clientes e interesados en el proyecto (<i>stakeholders</i>).
                  li 
                    i.fas.fa-angle-right 
                    p Esta técnica es muy útil al documentar la situación actual del proceso de negocio.
                  li 
                    i.fas.fa-angle-right 
                    p Puede ser activa o pasiva.
                  li 
                    i.fas.fa-angle-right 
                    p En la observación pasiva el observador no hace preguntas, solo se limita a tomar notas y no interfiere en el desempeño de las operaciones.
                  li 
                    i.fas.fa-angle-right 
                    p En la observación activa, el observador habla con los usuarios.
              
              p.text-small(numero="3" titulo="Entrevistas").m-3
                ul.lista-ul(style="list-style-type: square").lista-ul.lista-ul--color
                  li 
                    i.fas.fa-angle-right 
                    p Se realiza con los directos interesados o usuarios clave.
                  li 
                    i.fas.fa-angle-right 
                    p Direccionan a los usuarios hacia aspectos específicos a tener en cuenta.
                  li 
                    i.fas.fa-angle-right 
                    p Son demasiado útiles para obtener y documentar datos o información sobre los requerimientos y sus niveles de importancia.
                  li 
                    i.fas.fa-angle-right 
                    p Deben ser entrevistas formales e informales para recolectar mucha más información. 
                  li 
                    i.fas.fa-angle-right 
                    p Se deben enfocar los objetivos de la entrevista.
                  li 
                    i.fas.fa-angle-right 
                    p Las preguntas cerradas son útiles y ayudan a confirmar y validar información. 
                  li 
                    i.fas.fa-angle-right 
                    p Las preguntas abiertas son útiles y ayudan a identificar información faltante.
                  li 
                    i.fas.fa-angle-right 
                    p El éxito de las entrevistas depende del grado de conocimiento del entrevistador y el entrevistado. El entrevistado debe tener muy buena disposición, suministrar toda la información, de igual forma debe existir un muy buen registro de la documentación de la discusión y una excelente relación entre las partes involucradas.
              
              p.text-small(numero="4" titulo="Encuestas o cuestionarios").m-3
                ul.lista-ul(style="list-style-type: square").lista-ul.lista-ul--color
                  li 
                    i.fas.fa-angle-right 
                    p Técnica útil para recolectar requerimientos eficientes y necesarios de muchas personas.
                  li 
                    i.fas.fa-angle-right 
                    p Deben tener identificado el propósito y la audiencia, definir fechas precisas, preguntas claras y precisas.
                  li 
                    i.fas.fa-angle-right 
                    p Enfocarse en los objetivos de negocio necesarios a identificar.
                  li 
                    i.fas.fa-angle-right 
                    p Apoyarse en entrevistas de seguimiento e individualizar usuarios.
                  li 
                    i.fas.fa-angle-right 
                    p En su contenido debe haber preguntas abiertas y cerradas.

              p.text-small(numero="5" titulo="Mesas de trabajo <i>(workshops)</i>").m-3
                ul.lista-ul(style="list-style-type: square").lista-ul.lista-ul--color
                  li 
                    i.fas.fa-angle-right 
                    p Técnica efectiva para analizar información rápida de varias personas.
                  li 
                    i.fas.fa-angle-right 
                    p Es necesario agendarse en tareas predefinidas y preseleccionar participantes, ajustando buenas prácticas y mejoras continuas de los procesos.
                  li 
                    i.fas.fa-angle-right 
                    p Es conveniente utilizar un facilitador y un transcriptor.
                  li 
                    i.fas.fa-angle-right 
                    p Se pueden analizar los resultados en diagramas o flujogramas, en reuniones.

              p.text-small(numero="6" titulo="Lluvia de ideas").m-3
                ul.lista-ul(style="list-style-type: square").lista-ul.lista-ul--color
                  li 
                    i.fas.fa-angle-right 
                    p Sesión de trabajo estructurada encaminada a obtener una cantidad de ideas posibles.
                  li 
                    i.fas.fa-angle-right 
                    p Es ideal limitarlas en tiempo y utilizar ayudas visuales con un facilitador.
                  li 
                    i.fas.fa-angle-right 
                    p Definir reglas de participación, criterios para evaluar ideas, asignarles un puntaje, no permitir críticas y con límite de tiempo de discusión.
                  li 
                    i.fas.fa-angle-right 
                    p Identificar la mayor cantidad de ideas y evaluarlas, considerar todas las ideas y respetar las de los demás.

              p.text-small(numero="7" titulo="Historias de usuario").m-3
                ul.lista-ul(style="list-style-type: square").lista-ul.lista-ul--color
                  li 
                    i.fas.fa-angle-right 
                    p Son simples conversaciones con los usuarios pero muy importantes para levantar requerimientos.
                  li 
                    i.fas.fa-angle-right 
                    p Es recomendable que sean escritas por los mismos usuarios o interesados, enfatizando en lo que el sistema debe realizar.
                  li 
                    i.fas.fa-angle-right 
                    p Al momento de redactar una historia deben tenerse en cuenta los roles o cargos de los usuarios, las funcionalidades y los resultados esperados de la aplicación.
                  li 
                    i.fas.fa-angle-right 
                    p Las historias de usuario son una de las técnicas más importantes al momento de levantar requerimientos.
      .col-lg-5  
        img(src='@/assets/curso/imgtem04.jpg')(data-aos="fade-up")
  
    .row.mb-5
      .col-lg-10.caj
        .cajon.color-acento-botones.p-4.mb-4.mb-lg-0(style='background-color: #FEF4D6')
          h4 Los requerimientos:
          ul.lista-ul(style="list-style-type: square").lista-ul.lista-ul--color.lup
            li 
              i.fas.fa-angle-right 
              | Son las condiciones o capacidades que debe conservar un sistema, producto, servicio o componente para satisfacer las necesidades mediante un contrato, cumplir con estándares, especificaciones y demás documentos de manera formal.
            br
            li 
              i.fas.fa-angle-right 
              | También se definen como las capacidades necesarias para que un cliente o usuario solucione un problema u objetivo ya preestablecido.
            br
            li 
              i.fas.fa-angle-right 
              | Así mismo, se pueden relacionar los requisitos como las restricciones impuestas a un usuario por algunos interesados, definiendo objetivos precisos de un proyecto.
    
    .row.mb-2
      p(data-aos="zoom-in") Las restricciones siempre serán necesarias para lograr manipular o editar el manejo de la aplicación de manera controlada, efectiva y funcional, para que se lleven a cabo los procesos de manera eficaz en la operación de las tareas.

    .row.justify-content-start.align-items-center
      .col-lg-3.cajontitle2.mb-4(data-aos="zoom-in")      
        h3.text.mb-0 Restricciones
    
    .row.mb-2
      p(data-aos="zoom-in") Hacen énfasis, por ejemplo, en los permisos de accesos a usuarios en el sistema.
      br
      p(data-aos="zoom-in") Todos los usuarios del sistema lo podrán operar, pero no todos tienen los mismos derechos en la aplicación.
      br
      p(data-aos="zoom-in") Así como existen operadores de la aplicación, habrá usuarios con permisos de administradores que podrán manipular más a fondo la aplicación. 
    Separador

    .titulo-segundo.color-acento-contenido(data-aos="zoom-in")
      #t_1_1.h2 1.1 Características de requerimientos
    .row.mb-4
      p(data-aos="zoom-in") Los requerimientos deben cumplir con cierto tipo de características y criterios:
    
    .row.mb-4
      .col-lg-7
        .row.mb-5(data-aos="zoom-in-right")
          .col-md-12.mb-5.mb-md-0
            LineaTiempoD.color-acento-contenido.text-bold
              p.text-small(numero="1" titulo="Verificable").m-3
                ul(style="list-style-type: square")
                  p El requisito debe tener una implementación precisa y comprobada, la prueba de consulta debe ser correcto o incorrecto.
                  
              p.text-small(numero="2" titulo="Único").m-3
                ul(style="list-style-type: square")
                  p Debe ser interpretado de manera exclusiva, de una sola manera.

              p.text-small(numero="3" titulo="Claro").m-3
                ul(style="list-style-type: square")
                  p Los requerimientos deben ser precisos, sin más terminologías, de forma clara y simple.

              p.text-small(numero="4" titulo="Viable").m-3
                ul(style="list-style-type: square")
                  p El objetivo de los requerimientos es que sea realizable según restricciones de tiempo, dinero, recursos y demás elementos a tener en cuenta.

              p.text-small(numero="5" titulo="Necesario").m-3
                ul(style="list-style-type: square")
                  p Si al omitirlo no se tiene ningún efecto, entonces no será necesario.

              p.text-small(numero="6" titulo="Independiente").m-3
                ul(style="list-style-type: square")
                  p Para comprender los requerimientos no deben ser necesarios el conocimiento de otros.

              p.text-small(numero="7" titulo="Consistente").m-3
                ul(style="list-style-type: square")
                  p No deben existir conflicto entre ellos. 

              p.text-small(numero="8" titulo="Redundancia").m-3
                ul(style="list-style-type: square")
                  p Deben ser formulados una sola vez, y no sobreponerse o relacionarse de la misma forma con otro requerimiento.

              p.text-small(numero="9" titulo="Completo").m-3
                ul(style="list-style-type: square")
                  p También debe ser específico, se deben tener en cuenta todas las condiciones que se pueden llegar a presentar.
      .col-lg-5
        img.imgpos3(src='@/assets/curso/imgtem05.jpg')(data-aos="zoom-in-left")

    .row.justify-content-start.align-items-center
      .col-lg-4.cajontitle3.mb-4(data-aos="zoom-in")      
        h3.text.mb-0 Estructura de los requerimientos 
  
    p.mb-5(data-aos="zoom-in") Los requisitos se pueden dividir, según su origen y características, se pueden representar mediante una gráfica, situando las necesidades de los <i>stakeholders</i> como se muestra en la siguiente imagen:
    
    .row.mb-5
      img.col-10.imgpos4(src='@/assets/curso/requerimientos.svg')(data-aos="zoom-in")
    

    p(data-aos="zoom-in") Para estos tipos de necesidades dependerá mucho del analista de negocio decidir cuál será el nivel de detalle de cada nivel, aunque es adecuado, en algunos casos, detallar con más precisión algunos requerimientos en el nivel de las necesidades.
    
    .row.justify-content-start.align-items-center
      .col-lg-3.cajontitle4.mb-4(data-aos="zoom-in")
        h3.text.mb-0 ¿Qué es la trazabilidad?
    
    .row.mb-5
      .col-lg-7(data-aos="zoom-in-right")
        p Es la documentación de la vida de cada uno de los requerimientos, permitiendo el historial de su formulación original hasta el documento final
        p <b>Se debe documentar cada paso de manera estricta para conseguir la trazabilidad.</b>
        p Los requerimientos y necesidades surgen de diversas fuentes, como el cliente, el manager, los usuarios, etc., todos y cada uno comprenden de diferentes formas los requerimientos, y es en este momento, donde los requerimientos se deben precisar para poder planear y llevarlo a la ejecución.<br><br>Utilizando la trazabilidad se sigue el historial de cada característica implementada hasta las personas o grupos que solicitaron la generación de los requerimientos, de esta manera, se permite un análisis más rápido en cada fase del proyecto.
      .col-lg-5
        img.imgpos5(src='@/assets/curso/imgtem07.jpg')(data-aos="zoom-in-left")
    
    .row.justify-content-start.align-items-center
      .col-lg-3.cajontitle4.mb-4(data-aos="zoom-in")
        h3.text.mb-0 Tipos de requerimientos
    
    .row.mb-4
      p(data-aos="zoom-in") Los requerimientos se clasifican en:
    
    .row.mb-3
      .titulo_principal(data-aos="zoom-in")
        h3 Requerimientos funcionales
    
    .row.align-items-center.mb-5
      .col-lg-8
        .cajon.color-primario.p-4.mb-4.mb-lg-0(style='background-color: #ECF7FF')
          p.mb-0 Son las declaraciones de los servicios que prestará el sistema, es la forma como reacciona a determinadas funciones. Del mismo modo, podrían ser la manera de interactuar con otros sistemas, el tipo de respuestas automáticas y los procesos predefinidos. En otros casos también los requisitos funcionales establecen de manera precisa lo que el sistema no debe hacer, es decir también puede ser una declaración negativa.    
        p.m-2 De igual forma, los requerimientos funcionales también son las características que tendrá el sistema o aplicación, son las funciones que actúan directamente con los usuarios, por ejemplo, las pantallas que permiten utilizar dicha aplicación, lo que se puede visualizar, como Facebook, Instagram, etc., sus menús, diseños, botones, colores y demás funcionalidades que hacen muy amigable la interacción con el usuario.<br><br/>Por otra parte, los mayores problemas se encuentran cuando existen especificaciones de requisitos inexactas o incoherentes. Si un analista de los requerimientos del sistema <b>toma suposiciones como conocimientos universales, podría conllevar un riesgo para el sistema</b>, es mejor siempre ser preciso y definirlo. Estos problemas se pueden encontrar en las funciones comunes relacionadas con las experiencias de usuario.
      .col-lg-4
        .imagen        
          img(src='@/assets/curso/imgtem08.jpg', style="width: 400px")     
    
    .row.cajon.p-4.mb-5(data-aos="zoom-in")(style='background-color: #FEF4D6')
        .col-2
          img(src='@/assets/curso/imgtem09.png' style="width: 90px")
        .col-10
          p.m-1 El analista es el responsable de la documentación, por lo tanto, el mismo deberá tratar de asegurarse que no hay lagunas de comprensión, por eso es importante tener en cuenta las historias de usuario, asegurándose de que todo el equipo está sincronizado respecto a los requisitos, objetivos e implementación.
    
    .row.mb-5
      p(data-aos="zoom-in") Algunos ejemplos de requerimientos funcionales con características que permiten utilizar la aplicación de manera cómoda y visual, ya sea en el diseño, menú, botones, entre otros, son:
    
    .row.mb-5
      SlyderE(indicadores="derecha")(data-aos="zoom-in")
        .row
          .col-md-4.mb-2.mb-md-0
            h3 Interfaz de captura
            br
            p Incluye:
            br
            ul.lista-ul(style="list-style-type: square").lista-ul.lista-ul--color
                li 
                  i.fas.fa-angle-right 
                  p Las funciones que actúan directamente con el usuario.
                li 
                  i.fas.fa-angle-right 
                  p Las pantallas y opciones que permiten utilizar la aplicación.        
          .col-md-8
            figure
              img(src='@/assets/curso/imgtem10.jpg')
            
        .row
          .col-md-4.mb-2.mb-md-0
            h3 Funcionalidad específica
            br
            p Por ejemplo, pedir un taxi:
            br
            ul.lista-ul(style="list-style-type: square").lista-ul.lista-ul--color.lup2
              li 
                i.fas.fa-angle-right 
                p Seleccionar el punto de partida y punto de llegada.
              li 
                i.fas.fa-angle-right 
                p Seleccionar el tipo de vehículo, forma de pago.
              li 
                i.fas.fa-angle-right 
                p Confirmar el número de teléfono.
              li 
                i.fas.fa-angle-right 
                p Completar el viaje.

            p En este tipo de aplicaciones, se puede también calificar a los conductores y compartir los viajes, cada uno de estos sería un requerimiento funcional.

          .col-md-8
            figure
              img(src='@/assets/curso/imgtem11.jpg')
    
    .row.mb-4
      .titulo_principal(data-aos="zoom-in")
        h3 Requerimientos no funcionales
  
    .row.align-items-center.mb-4
      .col-lg-8    
        p.m-2 Son los requerimientos que no interfieren con las funciones específicas que entrega el sistema, asegurando la fiabilidad, tiempos de respuesta y capacidad de almacenamiento. En otras palabras, no habla de lo que hace el sistema, sino de cómo lo hace, define restricciones de entrada y salida, representando datos utilizados en las interfaces del sistema.<br><br>Puede ser con lenguaje de programación Java, con alta velocidad de procesamiento de datos, para un óptimo funcionamiento de la aplicación, disponibilidad, entre otros. Son los requisitos que debe tener la aplicación para que funcione adecuadamente, se encargan de que la aplicación cumpla con lo que tiene que hacer.
        .cajon.color-acento-botones.p-4.mb-5.mb-lg-0
            p.mb-0 <b>Los requerimientos no funcionales</b> son los requisitos que debe tener la aplicación para que funcione adecuadamente; estos se encargan de que la aplicación cumpla con lo que se quiere hacer, por otro lado, los requerimientos funcionales son todo lo que el usuario ve y manipula.    
      .col-lg-4
        .imagen        
          img(src='@/assets/curso/imgtem12.jpg', style="width: 450px")    

    p.mb-4(data-aos="zoom-in-right") A continuación, se muestran ejemplos de requisitos no funcionales dentro de una aplicación para pedir un taxi:
    
    .row.mb-4
      .col-lg-12
        .row.justify-content-center
          .col-lg-4.p-0.m-3.tarjeta-apilado.azul1
            img(src='@/assets/curso/tar1.jpg', alt='', class='img-fluid')
            h3.text-center.m-4 Operación 7x24
            p.m-5.y-4 La aplicación debe operar las 24 horas del día durante todo el año.<br><br/>Hace referencia a la disponibilidad, nunca debe fallar y estar siempre disponible.
          
          .col-lg-4.p-0.m-3.tarjeta-apilado.azul1
            img(src='@/assets/curso/tar2.jpg', alt='', class='img-fluid')
            h3.text-center.m-4 Registro de usuario
            p.m-5.y-4 Para su uso se requieren datos de registro.<br><br/>Esta opción de seguridad es un requisito que no se puede ver, pero es necesario para que la aplicación funcione; es un requisito no funcional. 
    
    .row.mb-4
      .cajon-b.colorcajon7(data-aos="zoom-in")
        p 
          span.text-bold Los requerimientos no funcionales no se pueden ver ni tocar
          span , porque están “detrás” de la aplicación, para que funcione de manera rápida, segura y en cualquier momento. 
    separador

    .row.mb-5
      .titulo-segundo.color-acento-contenido(data-aos="zoom-in")
        #t_1_2.h2 1.2 Documentación de requerimientos
    
    .row.mb-4(data-aos="zoom-in-right")
      .col-lg-8
        p <b>El documento de requerimientos es el lugar donde se describen las características y requisitos de un <i>software</i>, programa, conjunto de programas o productos.</b> Son expresados en lenguaje natural, sin términos técnicos ni consideraciones.<br><br/>La especificación de los requisitos es el resultado del levantamiento de información, junto con el cliente y/o usuario de los productos. Es el método de comunicación más precisa y clara entre los que se encargan de desarrollar <i>el software</i> y los clientes o usuarios finales que utilizarán el mismo.
      .col-lg-4       
        img.ali3(src='@/assets/curso/imgtem13.jpg', style="width: 240px") 
    
    .row.mb-4
      .tarjeta.colorblue.p-4.mb-4(data-aos="zoom-in")
        .row.justify-content-around.align-items-center
          .col-2.col-sm-2.col-lg-1.mb-5
            img(src="@/assets/componentes/icon1.png")
          .col
            .row.justify-content-between.align-items-center
              .col.mb-1.mb-sm-0
                h5.mb-2 Llamado a la acción
                p.text-small Se comparte una plantilla para la descripción de los requerimientos. Esta plantilla sigue los requerimientos establecidos en el estándar IEEE 830, (Instituto de Ingenieros Eléctricos y Electrónicos), es la sociedad técnica profesional más grande y prestigiosa del mundo. Del mismo modo, se menciona que la especificación de requisitos debe contener la descripción de las funcionalidades de la aplicación, relacionamiento con los sistemas externos y requerimientos no funcionales, de rendimiento, disponibilidad, tiempos de respuesta y mantenibilidad. 
              .col-sm-auto.mb-4
                a.boton.color-acento-botones(:href="obtenerLink('/downloads/CF001_Anexo2_Plantilla_requerimientos_de_software.pdf')" target="_blank")
                  span Descargar
                  i.fas.fa-file-download
    
    .row.mb-4
      p(data-aos="zoom-in") Es importante mencionar que, de acuerdo con las necesidades de cada proyecto, podría ser necesario incluir elementos o información complementaria a este documento. A continuación, se comparte un esquema descriptivo de una plantilla de documento de requerimientos de <i>software</i>:
    

    ImagenInfografica.color-acento-contenido.col-lg-8.mb-5.caj
      template(v-slot:imagen)
        figure.center
          img(src='@/assets/template/imgmap.svg', alt='Texto que describa la imagen')

      .tarjeta.bg-tarjeta-infografia-o.p-3(x="83.5%" y="4.5%" numero="+")
          p.mb-2 Nombre o título del <i>software</i> que está especificado en el documento, incluyendo su número de versión o release. También se describen cuáles componentes o partes del alcance del producto están incluidas en el documento, estableciendo si cubre la totalidad del <i>software</i>, solo una parte del sistema, subsistema o subgrupo de procesos.

      .tarjeta.bg-tarjeta-infografia-o.p-3(x="97.8%" y="15.8%" numero="+")
          p.mb-2 Descripción corta del alcance del <i>software</i> que se está especificando, incluyendo: propósito u objetivo general, beneficios que brinda al área de negocio y organización, relación de los objetivos del <i>software</i> con los objetivos corporativos y estrategias de negocio. Se puede hacer referencia a otros documentos.

      .tarjeta.bg-tarjeta-infografia-o.p-3(x="83.5%" y="27.2%" numero="+")
          p.mb-2 Aquí se puede incluir otros documentos impresos, documentos o direcciones electrónicas que complementen la documentación de requerimientos de <i>software</i>.

      .tarjeta.bg-tarjeta-infografia-o.p-3(x="97.7%" y="38.6%" numero="+")
          p.mb-2 Lista de las funcionalidades del <i>software</i> que se está especificando en el documento de requerimientos. Cada funcionalidad puede estar compuesta por uno o varios requerimientos funcionales de <i>software</i>. Solo se incluye una lista numerada de las principales funcionalidades.<br/><br/>Clases y características de usuarios<br/><br/>Se clasifican los usuarios que utilizaran el producto. La clasificación puede ser en función a la frecuencia de uso, grupo de funcionalidades utilizadas, privilegios de seguridad, nivel de experiencia y otros parámetros.

      .tarjeta.bg-tarjeta-infografia-o.p-3(x="83.7%" y="50.2%" numero="+")
          p.mb-2 Se describe el entorno operativo en el que se desenvolverá el sistema, <i>software</i>, módulo o grupo de funcionalidades, mencionando aspectos como la plataforma de <i>hardware</i>, versiones de sistema operativo y otros sistemas o componentes con los que debe coexistir.

      .tarjeta.bg-tarjeta-infografia-o.p-3(x="97.6%" y="61.5%" numero="+")
          p.mb-2 Los requerimientos no funcionales son los que especifican criterios para evaluar la operación de un servicio de tecnología de información, en contraste con los requerimientos funcionales que especifican los comportamientos específicos. 

      .tarjeta.bg-tarjeta-infografia-o.p-3(x="83.5%" y="73%" numero="+")
          p.mb-2 Describe las características y atributos de las interfaces con el usuario (GUI), interfaces con el <i>hardware</i>, interfaces con otros sistemas de las interfaces de comunicaciones.

      .tarjeta.bg-tarjeta-infografia-o.p-3(x="97.6%" y="84.5%" numero="+")
          p.mb-2 Listado de reglas y principios que aplican a todo el conjunto de requerimientos de <i>software</i> contenidos en el documento. Un ejemplo es cuáles individuos o roles pueden desempeñar cierta función bajo ciertas circunstancias. 

      .tarjeta.bg-tarjeta-infografia-o.p-3(x="83.5%" y="95.7%" numero="+")
          p.mb-2 En esta sección de la plantilla, se ilustra cómo organizar los requerimientos funcionales de <i>software</i> por funcionalidad de producto o sistema. Aquí se listan las funcionalidades para cada una y a su vez se listan los requerimientos funcionales. Los requerimientos funcionales también se pueden documentar en una matriz de trazabilidad de requerimientos.

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
