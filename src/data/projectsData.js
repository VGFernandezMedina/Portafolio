const proyectos = [
  {
    id: 1,
    title: "Estudio Jurídico",
    imgMain: "/Portada-EstudioJuridico.png",
    img: "/Estudio Juridico.png",
    img2: "/Estudio Juridico2.png",
    img3: "/Estudio Juridico3.png",
    description:
      "Sitio web institucional desarrollado para un estudio jurídico. Permite presentar información del estudio, áreas de práctica y medios de contacto, ofreciendo una presencia profesional y accesible para clientes potenciales.",

    caseStudy: [
      "Este proyecto fue desarrollado para un estudio jurídico que necesitaba una presencia profesional en internet. El objetivo principal era presentar los servicios del estudio de manera clara, transmitir confianza a potenciales clientes y facilitar los canales de contacto.",

      "Me encargué del diseño y desarrollo completo del sitio, trabajando directamente sobre las necesidades del cliente y adaptando la estructura de la información para que resultara clara y accesible para los visitantes.",

      "La experiencia fue orientada a ofrecer una navegación intuitiva y totalmente responsive, permitiendo acceder rápidamente a la información más relevante desde cualquier dispositivo.",
    ],

    challenge: [
      "Uno de los principales desafíos fue organizar una gran cantidad de información jurídica de forma accesible para usuarios con distintos niveles de conocimiento técnico.",

      "A su vez, el sitio debía transmitir profesionalismo sin resultar sobrecargado visualmente.",
    ],

    solution: [
      "Se desarrolló una aplicación web moderna utilizando React y Bootstrap, priorizando el rendimiento, la accesibilidad y la adaptación a distintos dispositivos.",

      "Se implementó un diseño visual profesional alineado con la identidad del cliente, buscando transmitir confianza y credibilidad sin sacrificar la experiencia de usuario.",

      "Además, se optimizó la experiencia responsive para garantizar una visualización consistente tanto en computadoras como en dispositivos móviles.",
    ],

    highlights: [
      "Diseño completamente responsive",
      "Navegación clara e intuitiva",
      "Organización estratégica del contenido",
      "Interfaz moderna y profesional",
      "Canales de contacto accesibles",
      "Sitio publicado en producción",
    ],

    badgeImg: "Frontend",
    technologies: ["React", "Bootstrap", "Javascript", "CSS"],
    techIcon: [
      { src: "/html.svg", name: "HTML", color: "#E34F26" },
      { src: "/css.svg", name: "CSS", color: "#1572B6" },
      { src: "/js.svg", name: "JavaScript", color: "#F7DF1E" },
      { src: "/react.svg", name: "React", color: "#61DAFB" },
      { src: "/bootstrap.svg", name: "Bootstrap", color: "#7952B3" },
    ],
    toolsIcon: [
      { src: "/git.svg", name: "Git", color: "#F05032" },
      { src: "/npm.svg", name: "npm", color: "#CB3837" },
      { src: "/vsc.svg", name: "VSCode", color: "#007ACC" },
      { src: "/figma.svg", name: "Figma", color: "#F24E1E" },
    ],
    date: "Febrero 2026",
    category: "Proyecto Freelance",
    web: "https://silviamedinaabogada.com.ar/",
    repoFront: "https://github.com/VGFernandezMedina/estudio-juridico",
    repoBack: null,
    span: "Prod",
    status: "prod",
  },

  {
    id: 2,
    title: "Veterinaria RollingVet",
    imgMain: "/Portada-Rollingvet.png",
    img: "/Veterinaria.png",
    img2: "/Veterinaria2.png",
    img3: "/Veterinaria3.png",
    description:
      "Aplicación web para la gestión de una veterinaria desarrollada en equipo. Permite administrar usuarios, mascotas, servicios y pagos en línea mediante integración con Mercado Pago.",

    caseStudy: [
      "RollingVet fue desarrollado como proyecto final del curso FullStack de RollingCode por un equipo de cuatro integrantes. El objetivo era crear una plataforma para la gestión de una veterinaria, permitiendo administrar usuarios, veterinarios, mascotas, servicios, productos y turnos desde una única aplicación.",

      "Mi participación abarcó tanto responsabilidades técnicas como de coordinación del equipo. Asumí el rol de Scrum Master durante las cuatro semanas de desarrollo, organizando dos sprints, gestionando el tablero de Trello mediante etiquetas y prioridades, coordinando reuniones de seguimiento y distribuyendo tareas entre los integrantes.",

      "También participé en la etapa de planificación y diseño, elaborando los mockups iniciales de las principales pantallas utilizando Excalidraw para definir la experiencia de usuario antes del desarrollo.",

      "En el aspecto técnico, trabajé tanto en frontend como en backend. Participé activamente tanto en frontend como en backend, desarrollando funcionalidades clave como la Home Page, el carrito de compras, el formulario de contacto, el CRUD de productos y la integración de Mercado Pago.",
    ],

    challenge: [
      "Uno de los principales desafíos fue coordinar el desarrollo de una aplicación FullStack en equipo, manteniendo una arquitectura organizada y escalable. Además, fue necesario gestionar relaciones complejas entre usuarios, mascotas, servicios y productos dentro de la base de datos.",

      "Otro reto importante fue la integración de Mercado Pago para procesar pagos de servicios y compras de productos, garantizando que las operaciones se registraran correctamente y que el estado de cada transacción se actualizara de forma segura mediante webhooks.",
    ],

    solution: [
      "Para abordar estos desafíos se implementó una arquitectura basada en API REST utilizando Node.js, Express y MongoDB. Se organizaron las responsabilidades en rutas, controladores, servicios y middlewares, facilitando el mantenimiento y la escalabilidad del proyecto.",

      "La gestión de datos se resolvió mediante modelos de Mongoose con relaciones entre usuarios y mascotas, mientras que la integración de Mercado Pago permitió automatizar los pagos y validar su estado mediante notificaciones webhook. Además, se aplicaron validaciones, control de roles y autenticación para mejorar la seguridad de la plataforma.",
    ],

    highlights: [
      "Rol de Scrum Master durante todo el proyecto",
      "Coordinación de equipo mediante metodología Scrum",
      "Planificación de 2 sprints y gestión de Trello",
      "Planificación y diseño de la experiencia de usuario",
      "Desarrollo de la Homepage y secciones institucionales",
      "Implementación completa del CRUD de productos",
      "Desarrollo de funcionalidades de carrito de compras",
      "Integración de Mercado Pago para pagos online",
      "Participación en frontend y backend con stack MERN",
    ],

    badgeImg: "Fullstack",
    technologies: ["MongoDB", "Express", "React", "Node.js"],
    techIcon: [
      { src: "/html.svg", name: "HTML", color: "#E34F26" },
      { src: "/css.svg", name: "CSS", color: "#1572B6" },
      { src: "/js.svg", name: "JavaScript", color: "#F7DF1E" },
      { src: "/react.svg", name: "React", color: "#61DAFB" },
      { src: "/bootstrap.svg", name: "Bootstrap", color: "#7952B3" },
      { src: "/node-js.svg", name: "NodeJS", color: "#339933" },
      { src: "/express-js.svg", name: "ExpressJS", color: "#FFFFFF" },
      { src: "/mongodb.svg", name: "MongoDB", color: "#47A248" },
    ],
    toolsIcon: [
      { src: "/git.svg", name: "Git", color: "#F05032" },
      { src: "/github.svg", name: "GitHub", color: "#FFFFFF" },
      { src: "/npm.svg", name: "npm", color: "#CB3837" },
      { src: "/trello.svg", name: "Trello", color: "#0052CC" },
      { src: "/vsc.svg", name: "VSCode", color: "#007ACC" },
      { src: "/figma.svg", name: "Figma", color: "#F24E1E" },
    ],
    date: "Agosto 2025",
    category: "Proyecto Académico",
    web: "https://vet-rolling.vercel.app/",
    repoFront: "https://github.com/VGFernandezMedina/vet-rolling-frontend",
    repoBack: "https://github.com/VGFernandezMedina/vet-rolling-backend",
    span: "Dev",
    status: "dev",
  },

  {
    id: 3,
    title: "E-commerce",
    imgMain: "/Portada-Ecommerce.png",
    img: "/Ecommerce.png",
    img2: "/Ecommerce2.png",
    img3: "/Ecommerce3.png",
    description:
      "Proyecto frontend de un ecommerce desarrollado en equipo con React. Incluye catálogo de productos, localstorage, filtros por categorías y marcas, y un diseño responsivo con Bootstrap.",

    caseStudy: [
      "Este proyecto fue desarrollado en equipo como parte de la formación Full Stack, con el objetivo de construir una experiencia de compra moderna e interactiva utilizando React.",

      "Durante el desarrollo asumí el rol de Scrum Master, organizando el tablero de Trello, coordinando tareas entre los integrantes y participando en la planificación general del proyecto. También realicé los mockups iniciales para definir la estructura y el flujo de navegación de la aplicación.",

      "Mi participación estuvo centrada principalmente en el desarrollo de la Home Page, incluyendo la integración de componentes, secciones publicitarias, filtros por categorías, diseño responsive y la implementación de elementos compartidos como el navbar y el footer.",

      "La aplicación permite explorar un catálogo de productos, aplicar filtros dinámicos, consultar detalles de cada artículo y gestionar información mediante LocalStorage y SessionStorage.",
    ],

    challenge: [
      "Uno de los principales desafíos fue coordinar el trabajo en equipo mientras se desarrollaban distintas funcionalidades de forma paralela, manteniendo una experiencia consistente en toda la aplicación.",

      "También fue necesario integrar información proveniente de APIs externas, conectar componentes desarrollados por distintos integrantes y garantizar que los filtros y la navegación funcionaran correctamente en diferentes dispositivos.",
    ],

    solution: [
      "Se implementó una arquitectura basada en componentes reutilizables utilizando React, permitiendo una interfaz modular y fácil de mantener.",

      "La información de los productos fue obtenida mediante APIs externas y presentada dinámicamente mediante filtros por categorías y marcas, mejorando la navegación dentro del catálogo.",

      "Para optimizar la experiencia del usuario se utilizaron LocalStorage y SessionStorage, permitiendo conservar información relevante entre distintas sesiones y páginas de la aplicación.",

      "Además, se desarrolló una interfaz responsive utilizando Bootstrap para garantizar una correcta visualización en diferentes tamaños de pantalla.",
    ],

    highlights: [
      "Rol de Scrum Master durante el proyecto",
      "Planificación y gestión del tablero de Trello",
      "Diseño de mockups y estructura inicial de la aplicación",
      "Desarrollo completo de la Home Page",
      "Implementación de filtros por categorías",
      "Integración de componentes reutilizables",
      "Persistencia de datos con LocalStorage y SessionStorage",
      "Diseño responsive para múltiples dispositivos",
    ],

    badgeImg: "Frontend",
    technologies: ["React", "Bootstrap", "Javascript", "CSS"],
    techIcon: [
      { src: "/html.svg", name: "HTML", color: "#E34F26" },
      { src: "/css.svg", name: "CSS", color: "#1572B6" },
      { src: "/js.svg", name: "JavaScript", color: "#F7DF1E" },
      { src: "/react.svg", name: "React", color: "#61DAFB" },
      { src: "/bootstrap.svg", name: "Bootstrap", color: "#7952B3" },
    ],
    toolsIcon: [
      { src: "/git.svg", name: "Git", color: "#F05032" },
      { src: "/github.svg", name: "GitHub", color: "#FFFFFF" },
      { src: "/npm.svg", name: "npm", color: "#CB3837" },
      { src: "/trello.svg", name: "Trello", color: "#0052CC" },
      { src: "/vsc.svg", name: "VSCode", color: "#007ACC" },
    ],
    date: "Mayo 2025",
    category: "Proyecto Académico",
    web: "https://ecommerce-2doe.netlify.app/",
    repoFront: "https://github.com/VGFernandezMedina/Ecommerce-2doE",
    repoBack: null,
    span: "Dev",
    status: "dev",
  },

  {
    id: 4,
    title: "HDS Esports",
    imgMain: "/Portada-HDS.png",
    img: "/HDS.png",
    description:
      "Aplicación web en desarrollo con el stack MERN. Incluye gestión de usuarios, productos y carrito, autenticación y pagos en línea mediante Mercado Pago. Proyecto con arquitectura basada en API REST.",
    badgeImg: "FullStack",
    technologies: ["MongoDB", "Express", "React", "Node.js"],
    techIcon: [
      { src: "/html.svg", name: "HTML", color: "#E34F26" },
      { src: "/css.svg", name: "CSS", color: "#1572B6" },
      { src: "/js.svg", name: "JavaScript", color: "#F7DF1E" },
      { src: "/react.svg", name: "React", color: "#61DAFB" },
      { src: "/bootstrap.svg", name: "Bootstrap", color: "#7952B3" },
      { src: "/node-js.svg", name: "NodeJS", color: "#339933" },
      { src: "/express-js.svg", name: "ExpressJS", color: "#FFFFFF" },
      { src: "/mongodb.svg", name: "MongoDB", color: "#47A248" },
    ],
    toolsIcon: [
      { src: "/git.svg", name: "Git", color: "#F05032" },
      { src: "/npm.svg", name: "npm", color: "#CB3837" },
      { src: "/vsc.svg", name: "VSCode", color: "#007ACC" },
    ],
    date: "2026",
    category: "Proyecto Personal",
    web: null,
    repoFront: "https://github.com/VGFernandezMedina/HDS-Frontend",
    repoBack: "https://github.com/VGFernandezMedina/HDS-Backend",
    span: "Beta",
    status: "beta",
  },
];

export default proyectos;
