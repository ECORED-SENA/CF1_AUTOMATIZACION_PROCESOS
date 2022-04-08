export default {
  global: {
    componenteFormativo: 'Requerimientos del proceso de automatización',
    descripcionCurso:
      'La automatización de procesos simula la inteligencia humana, por lo que las automatizaciones son utilizadas para controlar y monitorear procesos, las máquinas o los dispositivos que cumplen con tareas o funciones repetitivas. Se caracterizan por su forma de operar automáticamente, reduciendo y mejorando el trabajo humano en las industrias.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.svg'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Requerimientos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Características de requerimientos',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Documentación de requerimientos',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Notaciones de requerimientos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Procesos organizacionales',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Modelado de procesos',
            hash: 't_2_2',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Abiztar. (2019). UML - Diagrama de interacción. [Video]. YouTube.',
      link: 'https://www.youtube.com/watch?v=srn6e0nz2b4&ab_channel=Abiztar',
    },
    {
      referencia:
        'Alteco. (2021). Qué es un diagrama de flujo de proceso o flujograma.',
      link: 'https://www.aiteco.com/diagrama-de-flujo',
    },
    {
      referencia:
        'Castillo, J. M. (2017). Tutorial BPMN con Visio. [Video]. YouTube.',
      link:
        'https://www.youtube.com/watch?v=rQCzHZGiZmI&ab_channel=Jos%C3%A9MiguelCastillo',
    },
    {
      referencia:
        'Cevallos K. (2021). Diagramas UML, ingeniería del software. Re',
      link:
        'https://ingsotfwarekarlacevallos.wordpress.com/category/diagramas-uml',
    },
    {
      referencia:
        'Colaboradores de los proyectos Wikimedia. (2021). Business Process Model and Notation.',
      link:
        'https://es.wikipedia.org/w/index.php?title=Business_Process_Model_and_Notation&oldid=139122191',
    },
    {
      referencia:
        'Control Goup. (2021). Qué es y cómo elaborar un mapa de procesos. Evaluando ERP.',
      link: 'https://www.evaluandoerp.com/elaborar-mapa-procesos',
    },
    {
      referencia:
        'Digital Guide. (2020). Diagrama de componentes: modelado eficiente de sistemas con módulos de software.',
      link:
        'https://www.ionos.es/digitalguide/paginas-web/desarrollo-web/diagrama-de-componentes',
    },
    {
      referencia: 'Edukativos. (2013). Diagrama de flujo funcional.',
      link: 'https://edukativos.com/apuntes/archives/4044',
    },
    {
      referencia:
        'Fuentes, A. (2021). Diagrama de actividades - registrar venta | UML. [Video]. YouTube.',
      link:
        'https://www.youtube.com/watch?v=C2MizD1yztk&ab_channel=AlexanderTutoriales',
    },
    {
      referencia:
        'Global Suite. (2021). Mapa de procesos de una organización, ¿qué es y cómo se elabora?',
      link:
        'https://www.globalsuitesolutions.com/es/que-es-mapa-de-procesos-y-como-se-elabora',
    },
    {
      referencia: 'Ibáñez, J. (2021). Los requerimientos de un proyecto.',
      link: 'http://www.liderdeproyecto.com/manual/los_requerimientos.html',
    },
    {
      referencia:
        'Lucidchart (2021a). Tutorial sobre diagramas de estructura compuesta.',
      link:
        'https://www.lucidchart.com/pages/es/diagrama-de-estructura-compuesta-uml',
    },
    {
      referencia: 'Lucidchart. (2021b). Tutorial de diagramas de despliegue.',
      link:
        'https://www.lucidchart.com/pages/es/tutorial-de-diagramas-de-despliegue',
    },
    {
      referencia:
        'Lucidchart. (2021c). Ejemplo de diagrama de caso de uso de sistema bancario.',
      link:
        'https://www.lucidchart.com/pages/es/templates/uml-use-case/lucidchart-ejemplo-de-diagrama-de-caso-de-uso-de-sistema-bancario',
    },
    {
      referencia:
        'Montero, A. (2020). Diagrama de despliegue. [Video]. YouTube.',
      link:
        'https://www.youtube.com/watch?v=tWuZu9YLSvU&ab_channel=AnabelMontero',
    },
    {
      referencia:
        'Nicosiored. (2017). Diagrama de Objetos - 10 - Tutorial UML en español. [Video]. YouTube.',
      link: 'https://www.youtube.com/watch?v=Rhgg3hSI6I0&ab_channel=nicosiored',
    },
    {
      referencia:
        'Nicosiored. (2018). Diagrama de Paquetes I - 11 - Tutorial UML en español. [Video]. YouTube.',
      link: 'https://www.youtube.com/watch?v=ataioNckj-E&ab_channel=nicosiored',
    },
    {
      referencia: 'Ocares, O. (2020). Introducción a BPMN.',
      link: 'https://bpmn-bayard.blogspot.com/2011/03/1-introduccion-bpmn.html',
    },
    {
      referencia:
        'Penades, M. C. (2017). Diagrama de clases. [Video]. YouTube.',
      link:
        'https://www.youtube.com/watch?v=JioEGJIlg88&ab_channel=UniversitatPolit%C3%A8cnicadeVal%C3%A8ncia-UPV',
    },
    {
      referencia:
        'PMO Informática. (2021). Documento de requerimientos de software.',
      link:
        'http://www.pmoinformatica.com/2018/04/documento-de-requerimientos-de-software_37.html',
    },
    {
      referencia: 'Smartdraw.com. (2021). Símbolos de diagramas de flujo.',
      link:
        'https://www.smartdraw.com/flowchart/simbolos-de-diagramas-de-flujo.htm?web=1&wdLOR=c9E21012A-2771-4ABE-BDC6-936DB95A1A2D',
    },
    {
      referencia: 'TicNews, R. (2013). Diagrama de estados. [Video]. YouTube.',
      link:
        'https://www.youtube.com/watch?v=hbWfk_-57qc&ab_channel=RevistaTicNews',
    },
    {
      referencia:
        'Torres, I. (2020). Diagrama de flujo - Una herramienta para visualizar tus procesos.',
      link: 'https://iveconsultores.com/diagrama-de-flujo',
    },
  ],
  glosario: [
    {
      termino: 'BPMN',
      significado:
        '<i>Business Process Modeling Notation</i>, notación para el modelado de procesos de negocios.',
    },
    {
      termino: 'Diagrama',
      significado: 'representación gráfica de uno o varios procesos.',
    },
    {
      termino: 'Documentación',
      significado: 'testimonio material de los hechos.',
    },
    {
      termino: 'Procesos',
      significado: 'conjunto de fases sucesivas de un hecho.',
    },
    {
      termino: '<i>Stakeholder</i>',
      significado:
        'grupo de personas interesadas que deben influir en la aplicación.',
    },
  ],
  complementario: [
    {
      texto: 'Crear diagrama BPMN',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=rQCzHZGiZmI&ab_channel=Jos%C3%A9MiguelCastillo',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Magdi Khalifah Gamboa',
        cargo: 'Magdi Khalifah Gamboa Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Zuleidy Ruiz',
        cargo: 'Revisión guión audiovisual',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Camilo Andres Bolaño Rey',
        cargo: 'Locución',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Laura Gisselle Murcia Pardo',
        cargo: 'Revisión gráficos',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Angela María Maldonado Jaime',
        cargo: 'Storyboard',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Ludwyng Corzo García',
        cargo: 'Ludwyng Corzo García Revisión video',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodríguez Rodríguez',
        cargo: 'Ilustración',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Carlos Mauricio Gomez Delgado',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Melina Tatiana Quintero Rodriguez',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
