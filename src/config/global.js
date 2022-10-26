export default {
  global: {
    componenteFormativo:
      'Clasificación aparatos dentales de ortopedia funcional',
    descripcionCurso:
      'En la elaboración de aparatología, es importante tener presente el uso de las buenas prácticas en la confección de los aparatos y uso de los materiales para diseñar, reparar y confeccionar todo lo relacionado con la aparatología de la cavidad oral, basados en la prescripción clínica del aparato, garantizando la calidad del producto.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
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
        titulo: 'Tipos de aparatos',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Biomateriales ortodóncicos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Clasificación aparatología',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Alambres',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Polímeros',
            hash: 't_2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo: 'Manipulación',
            hash: 't_2_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.5',
            titulo: 'Propiedades físicas',
            hash: 't_2_5',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.6',
            titulo: 'Propiedades químicas',
            hash: 't_2_6',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.7',
            titulo: 'Propiedades mecánicas',
            hash: 't_2_7',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Tipos de oclusión, movimientos mandibulares',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
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
  complementario: [
    {
      tema: 'Manipulación / Ejemplo ficha técnica ',
      referencia:
        'New Stetic. (2009). Ficha técnica resina acrílica autopolimerizable.',
      tipo: 'Documento',
      link: 'https://newstetic.com/documents_products/ft_acrilico_auto.pdf',
    },
    {
      tema: 'Tipos de oclusión, movimientos mandibulares',
      referencia:
        'Pacheco, G., N., y  Morales, G., J. (2015). Oclusión (2a. ed.). Universidad Nacional Autónoma de México.',
      tipo: 'Libro leer páginas 91 a 104.',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/74467',
    },
  ],
  glosario: [
    {
      termino: 'Dureza de Knoop',
      significado:
        'técnica estándar de la industria para explorar la dureza mecánica de materiales quebradizos o muestras delgadas.',
    },
    {
      termino: 'Ficha técnica',
      significado:
        'documento puramente informativo que se utiliza para detallar las características y especificaciones técnicas, sobre un producto determinado.',
    },
    {
      termino: 'Modelo yeso',
      significado:
        'registros construidos en yeso que reproducen la oclusión anatómica, bucal y dental del paciente que constituyen un elemento de primer orden para el tratamiento ortodóntico.',
    },
    {
      termino: 'Polímero',
      significado:
        'grandes moléculas (macromoléculas) compuestas por la unión de moléculas más pequeñas denominadas “monómeros”.',
    },
    {
      termino: 'Resistencia a la abrasión',
      significado:
        'habilidad de la superficie a resistir el desgaste realizado por el alto uso.',
    },
    {
      termino: 'Resistencia a la tracción',
      significado:
        'esfuerzo máximo desarrollado en un material en un ensayo de tracción.',
    },
  ],
  referencias: [
    {
      referencia:
        'Caero, B., M. (2009). Ortodoncia dental y sus tipos. El Cid Editor. https://elibro.net/es/lc/elibrocom/titulos/28232',
      link: 'https://elibro.net/es/lc/elibrocom/titulos/28232',
    },
    {
      referencia:
        'Esponda, V., R. (2019). Anatomía dental. Universidad Nacional Autónoma de México (UNAM).',
      link: 'https://elibro.net/es/lc/elibrocom/titulos/187393',
    },
    {
      referencia:
        'Gill, D., y Naini, F. (2014). Ortodoncia: principios y práctica. Editorial El Manual Moderno. ',
      link: 'https://elibro.net/es/lc/elibrocom/titulos/39664',
    },
    {
      referencia:
        'Matiz, C., J. (2014). Temas de rehabilitación oral: acrílicos dentales. 1: Clínica-laboratorio. Ecoe Ediciones. ',
      link: 'https://elibro.net/es/lc/elibrocom/titulos/122433',
    },
    {
      referencia:
        'Navas, C., E. (Coord.). (2018). Prevención de riesgos laborales, sector sanitario: riesgos específicos del trabajo de protésicos dentales. Editorial ICB.',
      link: '',
    },
    {
      referencia:
        'Nayib, R., L. J., y Álvarez, G. G. J. (2017). Aspectos claves: alteraciones del desarrollo dental. Fondo Editorial CIB.',
      link: 'https://elibro.net/es/lc/elibrocom/titulos/186732',
    },
    {
      referencia:
        'Rojas, G., M. T. (2014). Anatomía dental. Editorial El Manual Moderno. ',
      link: 'https://elibro.net/es/lc/elibrocom/titulos/39706',
    },
    {
      referencia:
        'Uribe, R., G. A., y Uribe, T., P. (2019). Fundamentos de odontología: ortodoncia: teoría y clínica "énfasis en biomecánica". Fondo Editorial CIB.',
      link: 'https://elibro.net/es/lc/elibrocom/titulos/186719',
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
        cargo: 'Responsable del equipo de Diseño Instruccional',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Daniel L. Toro A.',
        cargo: 'Experto temático ',
        centro: 'Regional Antioquia - Centro de Servicios de Salud',
      },
      {
        nombre: 'Paola Alexandra Moya Peralta',
        cargo: 'Diseñadora instruccional',
        centro:
          'Regional Norte de Santander - Centro de la Industria, la Empresa y los Servicios',
      },
      {
        nombre: 'Carolina Coca Salazar',
        cargo: 'Asesora Metodológica',
        centro: 'Regional Distrito Capital- Centro de Diseño y Metrología',
      },
      {
        nombre: 'José Gabriel Ortiz Abella',
        cargo: 'Corrector de estilo',
        centro: 'Regional Distrito Capital - Centro de Diseño y Metrología.',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Eulises Orduz',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Lizeth Karina Manchego',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Veimar Celis',
        cargo: 'Validación de contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Responsable del equipo de Gestión de Repositorio',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
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
