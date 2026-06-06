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

    caseStudy: `Este proyecto fue desarrollado para un estudio jurídico que necesitaba una presencia profesional en internet. El objetivo principal era presentar los servicios del estudio de manera clara, transmitir confianza a potenciales clientes y facilitar los canales de contacto.

    Me encargué del diseño y desarrollo del sitio, priorizando una experiencia intuitiva y adaptable a distintos dispositivos. La estructura fue pensada para que los usuarios pudieran acceder rápidamente a la información más relevante sin recorrer múltiples páginas.`,

    challenge: `Uno de los principales desafíos fue organizar una gran cantidad de información jurídica de forma accesible para usuarios con distintos niveles de conocimiento técnico. Además, el sitio debía transmitir profesionalismo sin resultar sobrecargado visualmente.

    Para resolverlo, se optó por una estructura de navegación simple, una jerarquía visual clara y secciones bien definidas que permitieran encontrar rápidamente la información importante. También se trabajó en la adaptación a dispositivos móviles para garantizar una experiencia consistente en cualquier pantalla.`,

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

      "En el aspecto técnico, trabajé tanto en frontend como en backend. Desarrollé gran parte de la interfaz de usuario, incluyendo la Home Page, la sección Sobre Nosotros, el formulario de contacto y el carrito de compras. En el backend implementé el CRUD completo de productos, participé en el desarrollo del CRUD de usuarios, construí la lógica del carrito y realicé la integración de Mercado Pago para el procesamiento de pagos. Además, colaboré en la integración entre frontend y backend para asegurar una experiencia consistente y funcional en toda la aplicación.",
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
      "Planificación de 2 sprints y gestión de Trello",
      "Diseño de mockups y flujo de pantallas en Excalidraw",
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
