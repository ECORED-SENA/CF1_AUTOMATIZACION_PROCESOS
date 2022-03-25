<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span.text-white 1
      h1 Requerimientos

    img.imgpos(src='@/assets/curso/imgtem01.jpg')(data-aos="fade-left")
    .cajon-b.colorcajon.col-5(data-aos="zoom-out")  
      p.align-center.margentext Los requerimientos son las peticiones o solicitudes que se consideran necesarias o importantes para satisfacer una o varias necesidades, ante un problema o mejora de un proceso.    
    br
    p.col-6(data-aos="zoom-out") Es decir, son las condiciones o capacidades que deben tener los sistemas, productos o servicios para lograr satisfacer un contrato, estándar o algunas otras especificaciones o documentos que se hayan establecido formalmente.<br><br>Los requerimientos no indican el diseño que debe tener el producto, indican las funciones y contenidos que se espera que tenga y la manera cómo los usuarios interactúan con él; los requerimientos varían con el tiempo, puesto que, con la puesta en marcha del producto, se podrán generar nuevos requerimientos (diferentes o complementarios a los iniciales).
    br

    img.imgpos2(src='@/assets/curso/imgtem02.jpg')(data-aos="fade-right")
    .cajon-b.colorcajon2.col-5(data-aos="zoom-out")  
      p.align-center.margentext El propósito principal de los requerimientos es asegurar la satisfacción de las expectativas de los clientes y sus interesados (<i> stakeholders </i>), internos y externos, relacionando de manera eficiente, los vínculos que esperan los clientes y usuarios, y lo que el grupo del proyecto tiende a desarrollar    
      p.posctext Ahora bien, los requerimientos son adaptados a todo tipo de proyectos, así, se trata de garantizar el óptimo funcionamiento de los procesos, sirviendo de referencia para el aseguramiento y control de los cambios que se pueden presentar en el proyecto (trazabilidad). 
    br
    br
    br
    br
    br
    br
    br
    br
    br
    br
    br
    br
    br
    br
    br
    br
    .cajon.cajontitle2.col-2(data-aos="zoom-in-right")
      h3.text Control de cambios
    <br>
    <br>
      img.imgpos3(src='@/assets/curso/imgtem03.jpg')(data-aos="zoom-in-left")
      p.align-center.col-7(data-aos="zoom-in-right") Durante la ejecución del proyecto se encuentran muchas situaciones, en las que se identifican nuevas necesidades, las cuales ni siquiera se habían pensado, pero se hace necesario anexarlas a la aplicación.<br><br>Estos cambios imprevistos, hacen que se replanteen nuevos requerimientos e incluso requerimientos ya documentados.<br><br>Se debe definir desde un principio la forma en que se gestionaran dichos cambios, debido a que pueden generar retrocesos en el desarrollo y en la planeación.<br><br>Se deben incluir cláusulas contractuales claras para que las partes a intervenir lo tengan en cuenta, y no se tenga que retroceder en lo que se ha desarrollado.
    <br>
    <br>
    <br>
    br
    h3(data-aos="zoom-out-right") Técnicas en el levantamiento de requerimientos
    <br>
    p.col12(data-aos="zoom-out-right") La etapa fundamental para la creación de un sistema, dentro de un proyecto informático, es la identificación y documentación de los requerimientos del sistema al iniciar el proyecto, puesto que en muchas situaciones se plantean ideas y se ayudan a prevenir ciertos errores que se puedan presentar, evitando así el fracaso del mismo.<br><br>El levantamiento de requerimientos hace referencia a la identificación y documentación del sistema, partiendo de usuarios, clientes o interesados (); también se le llama recopilación de requerimientos.<br><br>A continuación, se muestran algunas técnicas para obtener requerimientos en los proyectos de software:
    <br>
    <br>   
    img.imgpos3(src='@/assets/curso/imgtem04.jpg')(data-aos="fade-up")
    .row.mb-5(data-aos="fade-up")
      .col-md-12.mb-4.mb-md-0
        LineaTiempoD.color-acento-contenido.text-bold
          p.text-small(numero="1" titulo="Análisis de documentación").m-3
            ul.lista-ul(style="list-style-type: square").lista-ul.lista-ul--color
              li 
                i.fas.fa-angle-right 
                p Es donde se obtiene la información sobre los requerimientos funcionales y requerimientos no funcionales partiendo de documentos ya elaborados.
              br
              li 
                i.fas.fa-angle-right 
                p Se utiliza cuando los expertos en el desarrollo no están disponibles para ser interrogados o ya no forman parte del proceso o la empresa.
              br
              li 
                i.fas.fa-angle-right 
                p Evitar riesgos al no tener documentación.En el momento de necesitarla, se tendrá que hacer en el momento menos oportuno y sin recordar nada, perdiendo información valiosa y tiempo, buscando las soluciones.
          
          p.text-small(numero="2" titulo="Observación").m-3
            ul.lista-ul(style="list-style-type: square").lista-ul.lista-ul--color
              li 
                i.fas.fa-angle-right 
                p Siempre será necesario analizar el entorno de trabajo de los usuarios, clientes e interesados en el proyecto (<i>stakeholders</i>).
              br
              li 
                i.fas.fa-angle-right 
                p Esta técnica es muy útil al documentar la situación actual del proceso de negocio.
              br
              li 
                i.fas.fa-angle-right 
                p Puede ser activa o pasiva.
              br
              li 
                i.fas.fa-angle-right 
                p En la observación pasiva el observador no hace preguntas, solo se limita a tomar notas y no interfiere en el desempeño de las operaciones.
              br
              li 
                i.fas.fa-angle-right 
                p En la observación activa, el observador habla con los usuarios.
          
          p.text-small(numero="3" titulo="Entrevistas").m-3
            ul.lista-ul(style="list-style-type: square").lista-ul.lista-ul--color
              li 
                i.fas.fa-angle-right 
                p Se realiza con los directos interesados o usuarios clave.
              br
              li 
                i.fas.fa-angle-right 
                p Direccionan a los usuarios hacia aspectos específicos a tener en cuenta.
              br
              li 
                i.fas.fa-angle-right 
                p Son demasiado útiles para obtener y documentar datos o información sobre los requerimientos y sus niveles de importancia.
              br
              li 
                i.fas.fa-angle-right 
                p Deben ser entrevistas formales e informales para recolectar mucha más información. 
              br
              li 
                i.fas.fa-angle-right 
                p Se deben enfocar los objetivos de la entrevista.
              br
              li 
                i.fas.fa-angle-right 
                p Las preguntas cerradas son útiles y ayudan a confirmar y validar información. 
              br
              li 
                i.fas.fa-angle-right 
                p Las preguntas abiertas son útiles y ayudan a identificar información faltante.
              br
              li 
                i.fas.fa-angle-right 
                p El éxito de las entrevistas depende del grado de conocimiento del entrevistador y el entrevistado. El entrevistado debe tener muy buena disposición, suministrar toda la información, de igual forma debe existir un muy buen registro de la documentación de la discusión y una excelente relación entre las partes involucradas.
          
          p.text-small(numero="4" titulo="Encuestas o cuestionarios").m-3
            ul.lista-ul(style="list-style-type: square").lista-ul.lista-ul--color
              li 
                i.fas.fa-angle-right 
                p Técnica útil para recolectar requerimientos eficientes y necesarios de muchas personas.
              br
              li 
                i.fas.fa-angle-right 
                p Deben tener identificado el propósito y la audiencia, definir fechas precisas, preguntas claras y precisas.
              br
              li 
                i.fas.fa-angle-right 
                p Enfocarse en los objetivos de negocio necesarios a identificar.
              br
              li 
                i.fas.fa-angle-right 
                p Apoyarse en entrevistas de seguimiento e individualizar usuarios.
              br
              li 
                i.fas.fa-angle-right 
                p En su contenido debe haber preguntas abiertas y cerradas.

          p.text-small(numero="5" titulo="Mesas de trabajo <i>(workshops)</i>").m-3
            ul.lista-ul(style="list-style-type: square").lista-ul.lista-ul--color
              li 
                i.fas.fa-angle-right 
                p Técnica efectiva para analizar información rápida de varias personas.
              br
              li 
                i.fas.fa-angle-right 
                p Es necesario agendarse en tareas predefinidas y preseleccionar participantes, ajustando buenas prácticas y mejoras continuas de los procesos.
              br
              li 
                i.fas.fa-angle-right 
                p Es conveniente utilizar un facilitador y un transcriptor.
              br
              li 
                i.fas.fa-angle-right 
                p Se pueden analizar los resultados en diagramas o flujogramas, en reuniones.

          p.text-small(numero="6" titulo="Lluvia de ideas.").m-3
            ul.lista-ul(style="list-style-type: square").lista-ul.lista-ul--color
              li 
                i.fas.fa-angle-right 
                p Sesión de trabajo estructurada encaminada a obtener una cantidad de ideas posibles.
              br
              li 
                i.fas.fa-angle-right 
                p Es ideal limitarlas en tiempo y utilizar ayudas visuales con un facilitador.
              br
              li 
                i.fas.fa-angle-right 
                p Definir reglas de participación, criterios para evaluar ideas, asignarles un puntaje, no permitir críticas y con límite de tiempo de discusión.
              br
              li 
                i.fas.fa-angle-right 
                p Identificar la mayor cantidad de ideas y evaluarlas, considerar todas las ideas y respetar las de los demás.

          p.text-small(numero="7" titulo="Historias de usuario.").m-3
            ul.lista-ul(style="list-style-type: square").lista-ul.lista-ul--color
              li 
                i.fas.fa-angle-right 
                p Son simples conversaciones con los usuarios pero muy importantes para levantar requerimientos.
              br
              li 
                i.fas.fa-angle-right 
                p Es recomendable que sean escritas por los mismos usuarios o interesados, enfatizando en lo que el sistema debe realizar.
              br
              li 
                i.fas.fa-angle-right 
                p Al momento de redactar una historia deben tenerse en cuenta los roles o cargos de los usuarios, las funcionalidades y los resultados esperados de la aplicación.
              br
              li 
                i.fas.fa-angle-right 
                p Las historias de usuario son una de las técnicas más importantes al momento de levantar requerimientos.

    .cajon-b.colorcajon3.col-10(data-aos="zoom-in")
      h3 Los requerimientos:
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
    br
    p(data-aos="zoom-in") Las restricciones siempre serán necesarias para lograr manipular o editar el manejo de la aplicación de manera controlada, efectiva y funcional, para que se lleven a cabo los procesos de manera eficaz en la operación de las tareas.

    .cajon.cajontitle21.col-2(data-aos="zoom-in")
      h3.text(data-aos="zoom-in") Restricciones
    br
    br
    p(data-aos="zoom-in") Hacen énfasis, por ejemplo, en los permisos de accesos a usuarios en el sistema.
    br
    p(data-aos="zoom-in") Todos los usuarios del sistema lo podrán operar, pero no todos tienen los mismos derechos en la aplicación.
    br
    p(data-aos="zoom-in") Así como existen operadores de la aplicación, habrá usuarios con permisos de administradores que podrán manipular más a fondo la aplicación. 

    Separador
    br
    .titulo-segundo.color-acento-contenido(data-aos="zoom-in")
      #t_1_1.h2 1.1 Características de requerimientos
    p(data-aos="zoom-in") Los requerimientos deben cumplir con cierto tipo de características y criterios:
    br
    img.imgpos3(src='@/assets/curso/imgtem05.jpg')(data-aos="zoom-in-left")
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

    .cajon.cajontitle3.col-3(data-aos="zoom-in")
      h3.text(data-aos="zoom-in") Estructura de los requerimientos
    br
    p(data-aos="zoom-in") Los requisitos se pueden dividir, según su origen y características, se pueden representar mediante una gráfica, situando las necesidades de los <i>stakeholders</i> como se muestra en la siguiente imagen:
    br
    img.col-10.imgpos4(src='@/assets/curso/requerimientos.svg')(data-aos="zoom-in")
    br
    p(data-aos="zoom-in") Para estos tipos de necesidades dependerá mucho del analista de negocio decidir cuál será el nivel de detalle de cada nivel, aunque es adecuado, en algunos casos, detallar con más precisión algunos requerimientos en el nivel de las necesidades.
    br

    .cajon.cajontitle4.col-3(data-aos="zoom-in")
      h3.text ¿Qué es la trazabilidad?
    img.imgpos5(src='@/assets/curso/imgtem07.jpg')(data-aos="zoom-in-left")
    br
    p(data-aos="zoom-in-right") Es la documentación de la vida de cada uno de los requerimientos, permitiendo el historial de su formulación original hasta el documento final
    b(data-aos="zoom-in-right") Se debe documentar cada paso de manera estricta para conseguir la trazabilidad.
    br
    br
    p(data-aos="zoom-in-right") Los requerimientos y necesidades surgen de diversas fuentes, como el cliente, el manager, los usuarios, etc., todos y cada uno comprenden de diferentes formas los requerimientos, y es en este momento, donde los requerimientos se deben precisar para poder planear y llevarlo a la ejecución.<br><br>Utilizando la trazabilidad se sigue el historial de cada característica implementada hasta las personas o grupos que solicitaron la generación de los requerimientos, de esta manera, se permite un análisis más rápido en cada fase del proyecto.
    br 
    br
    .cajon.cajontitle4.col-3(data-aos="zoom-in")
      h3.text Tipos de requerimientos
    br
    p(data-aos="zoom-in") Los requerimientos se clasifican en:
    br

    .titulo_principal(data-aos="zoom-in")
      h3 Requerimientos funcionales
    br
    img.imgpos7(src='@/assets/curso/imgtem08.jpg')(data-aos="zoom-in-left")
    .cajon-b.colorcajon4.col-10(data-aos="zoom-in-right")
      p.align-center.margentext(data-aos="zoom-in-right") Son las declaraciones de los servicios que prestará el sistema, es la forma como reacciona a determinadas funciones. Del mismo modo, podrían ser la manera de interactuar con otros sistemas, el tipo de respuestas automáticas y los procesos predefinidos. En otros casos también los requisitos funcionales establecen de manera precisa lo que el sistema no debe hacer, es decir también puede ser una declaración negativa.     
    br
    p(data-aos="zoom-in-right") De igual forma, los requerimientos funcionales también son las características que tendrá el sistema o aplicación, son las funciones que actúan directamente con los usuarios, por ejemplo, las pantallas que permiten utilizar dicha aplicación, lo que se puede visualizar, como Facebook, Instagram, etc., sus menús, diseños, botones, colores y demás funcionalidades que hacen muy amigable la interacción con el usuario.
    br
    p(data-aos="zoom-in-right") Por otra parte, los mayores problemas se encuentran cuando existen especificaciones de requisitos inexactas o incoherentes. Si un analista de los requerimientos del sistema
      span.text-bold toma suposiciones como conocimientos universales, podría conllevar un riesgo para el sistema
      span , es mejor siempre ser preciso y definirlo. Estos problemas se pueden encontrar en las funciones comunes relacionadas con las experiencias de usuario.
    br
    .cajon-b.colorcajon5.col-12(data-aos="zoom-in")
      p.textizq.col-10.m-4 El analista es el responsable de la documentación, por lo tanto, el mismo deberá tratar de asegurarse que no hay lagunas de comprensión, por eso es importante tener en cuenta las historias de usuario, asegurándose de que todo el equipo está sincronizado respecto a los requisitos, objetivos e implementación.
      img(src='@/assets/curso/imgtem09.png').col-1.m-3
    br
    p(data-aos="zoom-in") Algunos ejemplos de requerimientos funcionales con características que permiten utilizar la aplicación de manera cómoda y visual, ya sea en el diseño, menú, botones, entre otros, son:
    br
    br
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
    br
    br
    .titulo_principal(data-aos="zoom-in")
      h3 Requerimientos no funcionales
    br
    img.imgpos8(src='@/assets/curso/imgtem12.jpg')(data-aos="zoom-in-left") 
    br
    p.col-7(data-aos="zoom-in-right") Son los requerimientos que no interfieren con las funciones específicas que entrega el sistema, asegurando la fiabilidad, tiempos de respuesta y capacidad de almacenamiento. En otras palabras, no habla de lo que hace el sistema, sino de cómo lo hace, define restricciones de entrada y salida, representando datos utilizados en las interfaces del sistema. <br><br>Puede ser con lenguaje de programación Java, con alta velocidad de procesamiento de datos, para un óptimo funcionamiento de la aplicación, disponibilidad, entre otros. Son los requisitos que debe tener la aplicación para que funcione adecuadamente, se encargan de que la aplicación cumpla con lo que tiene que hacer.
    .cajon-b.colorcajon6.col-7(data-aos="zoom-in-right") 
      p.align-center.margentext Los 
        span.text-bold requerimientos no funcionales 
        span son los requisitos que debe tener la aplicación para que funcione adecuadamente; estos se encargan de que la aplicación cumpla con lo que se quiere hacer, por otro lado, los 
        span.text-bold requerimientos funcionales 
        span son todo lo que el usuario ve y manipula.
    br
    p(data-aos="zoom-in-right") A continuación, se muestran ejemplos de requisitos no funcionales dentro de una aplicación para pedir un taxi:
    br 
    .col-12
      .row.justify-content-center
        .col-10.col-lg-4.p-0.m-2.tarjeta-apilado.curuba
          img(src='@/assets/curso/tar1.jpg', alt='', class='img-fluid')
          h3.text-center.m-3 Operación 7x24
          p.m-4 La aplicación debe operar las 24 horas del día durante todo el año.<br><br/>Hace referencia a la disponibilidad, nunca debe fallar y estar siempre disponible.
        .col-10.col-lg-4.p-0.m-2.tarjeta-apilado.verde
          img(src='@/assets/curso/tar2.jpg', alt='', class='img-fluid')
          h3.text-center.m-3 Registro de usuario
          p.m-4 Para su uso se requieren datos de registro.<br><br/>Esta opción de seguridad es un requisito que no se puede ver, pero es necesario para que la aplicación funcione; es un requisito no funcional. 
    br
    .cajon-b.colorcajon7(data-aos="zoom-in")
      p 
        span.text-bold Los requerimientos no funcionales no se pueden ver ni tocar
        span , porque están “detrás” de la aplicación, para que funcione de manera rápida, segura y en cualquier momento. 

    separador

    .titulo-segundo.color-acento-contenido(data-aos="zoom-in")
      #t_1_2.h2 1.2 Documentación de requerimientos
    img.imgpos9(src='@/assets/curso/imgtem13.jpg')(data-aos="zoom-in-right")
    br
    span.text-bold(data-aos="zoom-in-left") El documento de requerimientos es el lugar donde se describen las características y requisitos de un software, programa, conjunto de programas o productos.
    span(data-aos="zoom-in-left")  Son expresados en lenguaje natural, sin términos técnicos ni consideraciones.
    br
    br  
    p(data-aos="zoom-in-left") La especificación de los requisitos es el resultado del levantamiento de información, junto con el cliente y/o usuario de los productos. Es el método de comunicación más precisa y clara entre los que se encargan de desarrollar <i>el software</i> y los clientes o usuarios finales que utilizarán el mismo.
    br
    br
    br
    .tarjeta.colorblue.p-3.mb-3(data-aos="zoom-in")
      .row.justify-content-around.align-items-center
        .col-2.col-sm-1.col-lg-1
          img(src="@/assets/componentes/icon1.png")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-2.mb-sm-0
              h3.mb-1 Llamado a la acción
              p.text-small Se comparte una plantilla para la descripción de los requerimientos. Esta plantilla sigue los requerimientos establecidos en el estándar IEEE 830, (Instituto de Ingenieros Eléctricos y Electrónicos), es la sociedad técnica profesional más grande y prestigiosa del mundo. Del mismo modo, se menciona que la especificación de requisitos debe contener la descripción de las funcionalidades de la aplicación, relacionamiento con los sistemas externos y requerimientos no funcionales, de rendimiento, disponibilidad, tiempos de respuesta y mantenibilidad. 
            .col-sm-auto
              a.boton.color-acento-botones(:href="obtenerLink('/downloads/CF001_Anexo2_Plantilla_requerimientos_de_software.pdf')" target="_blank")
                span Descargar
                i.fas.fa-file-download

    p(data-aos="zoom-in") Es importante mencionar que, de acuerdo con las necesidades de cada proyecto, podría ser necesario incluir elementos o información complementaria a este documento. A continuación, se comparte un esquema descriptivo de una plantilla de documento de requerimientos de software:
    br
    br
    br
    ImagenInfografica.color-acento-contenido.mb-5.col-6.alinearcuadro(data-aos="zoom-in")
      template(v-slot:imagen)
        figure
          img(src='@/assets/template/imgmap.svg', alt='Texto que describa la imagen')

      .tarjeta.colorfondo1.p-4(x="83.6%" y="4.5%" numero="+")
        p Nombre o título del software que está especificado en el documento, incluyendo su número de versión o release. También se describen cuáles componentes o partes del alcance del producto están incluidas en el documento, estableciendo si cubre la totalidad del software, solo una parte del sistema, subsistema o subgrupo de procesos.

      .tarjeta.colorfondo2.p-4(x="97.7%" y="15.8%" numero="+")
        p Descripción corta del alcance del software que se está especificando, incluyendo: propósito u objetivo general, beneficios que brinda al área de negocio y organización, relación de los objetivos del software con los objetivos corporativos y estrategias de negocio. Se puede hacer referencia a otros documentos.

      .tarjeta.colorfondo3.p-4(x="83.5%" y="27.2%" numero="+")
        p Aquí se puede incluir otros documentos impresos, documentos o direcciones electrónicas que complementen la documentación de requerimientos de software.

      .tarjeta.colorfondo4.p-4(x="97.8%" y="38.6%" numero="+")
        p Lista de las funcionalidades del software que se está especificando en el documento de requerimientos. Cada funcionalidad puede estar compuesta por uno o varios requerimientos funcionales de software. Solo se incluye una lista numerada de las principales funcionalidades.<br/><br/>Clases y características de usuarios<br/><br/>Se clasifican los usuarios que utilizaran el producto. La clasificación puede ser en función a la frecuencia de uso, grupo de funcionalidades utilizadas, privilegios de seguridad, nivel de experiencia y otros parámetros.

      .tarjeta.colorfondo5.p-4(x="83.7%" y="50.2%" numero="+")
        p Se describe el entorno operativo en el que se desenvolverá el sistema, software, módulo o grupo de funcionalidades, mencionando aspectos como la plataforma de hardware, versiones de sistema operativo y otros sistemas o componentes con los que debe coexistir.

      .tarjeta.colorfondo6.p-4(x="97.6%" y="61.5%" numero="+")
        p Los requerimientos no funcionales son los que especifican criterios para evaluar la operación de un servicio de tecnología de información, en contraste con los requerimientos funcionales que especifican los comportamientos específicos. 

      .tarjeta.colorfondo7.p-4(x="83.7%" y="73%" numero="+")
        p Describe las características y atributos de las interfaces con el usuario (GUI), interfaces con el hardware, interfaces con otros sistemas de las interfaces de comunicaciones.

      .tarjeta.colorfondo8.p-4(x="97.8%" y="84.3%" numero="+")
        p Listado de reglas y principios que aplican a todo el conjunto de requerimientos de software contenidos en el documento. Un ejemplo es cuáles individuos o roles pueden desempeñar cierta función bajo ciertas circunstancias. 

      .tarjeta.colorfondo9.p-4(x="83.7%" y="95.5%" numero="+")
        p En esta sección de la plantilla, se ilustra cómo organizar los requerimientos funcionales de software por funcionalidad de producto o sistema. Aquí se listan las funcionalidades para cada una y a su vez se listan los requerimientos funcionales. Los requerimientos funcionales también se pueden documentar en una matriz de trazabilidad de requerimientos.

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
