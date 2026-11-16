export type WorkCategory = 'digital' | 'marca';

export interface WorkItem {
  id: string;
  index: string;
  title: string;
  category: WorkCategory;
  categoryLabel: string;
  summary: string;
  approach: string;
  deliverables: string[];
  artVariant: 'browser' | 'social' | 'content' | 'strategy';
}

export interface ExperienceItem {
  index: string;
  title: string;
  description: string;
}

export interface EducationItem {
  level: string;
  title: string;
  description: string;
}

export interface PracticalTrajectoryItem {
  company: string;
  role: string;
  summary: string;
  tasks: string[];
}

export interface InterestItem {
  id: string;
  index: string;
  title: string;
  shortDescription: string;
  detail: string;
  focusPoints: string[];
}

export type SkillFocus = 'digital' | 'creativo' | 'perfil';

export interface SkillGroup {
  id: string;
  index: string;
  title: string;
  focus: SkillFocus;
  items: string[];
}

export const MARQUEE_ITEMS = [
  'Mirar las cosas con perspectiva',
  'Marcas con personalidad',
  'Ideas que se hacen realidad',
  'Pensar en lo que viene',
];

export const WORK_ITEMS: WorkItem[] = [
  {
    id: 'paginas-web',
    index: '01',
    title: 'Páginas web',
    category: 'digital',
    categoryLabel: 'Digital',
    summary:
      'Diseño, estructura y mejora de páginas web orientadas a claridad visual, lectura cómoda y buena experiencia de usuario.',
    approach:
      'Organizar el contenido con jerarquía clara para que cualquier visitante entienda qué ofrece un proyecto en los primeros segundos, cuidando tanto el diseño como la usabilidad en móvil y ordenador.',
    deliverables: [
      'Arquitectura de información y estructura clara',
      'Revisión de textos y llamadas a la acción',
      'Adaptación visual y coherencia con la marca',
    ],
    artVariant: 'browser',
  },
  {
    id: 'redes-sociales',
    index: '02',
    title: 'Redes sociales',
    category: 'digital',
    categoryLabel: 'Contenido',
    summary:
      'Creación de piezas visuales y mensajes consistentes para conectar con la audiencia de forma cercana y reconocible.',
    approach:
      'Mantener una voz coherente y un ritmo visual reconocible en cada publicación, equilibrando contenido de valor, identidad gráfica y objetivos de comunicación.',
    deliverables: [
      'Planificación de calendario editorial',
      'Piezas gráficas y copys adaptados a cada canal',
      'Seguimiento de interacción y mejora continua',
    ],
    artVariant: 'social',
  },
  {
    id: 'comunicacion-visual',
    index: '03',
    title: 'Comunicación visual',
    category: 'marca',
    categoryLabel: 'Marca',
    summary:
      'Alineación de identidad gráfica y mensaje para que la personalidad de una marca se perciba con claridad.',
    approach:
      'Traducir la idea central de un proyecto a decisiones visuales concretas —tipografía, color, tono y composición— evitando elementos innecesarios que distraigan.',
    deliverables: [
      'Coherencia entre identidad visual y tono verbal',
      'Sistemas de piezas modulares reutilizables',
      'Presentación cuidada en soportes digitales',
    ],
    artVariant: 'content',
  },
  {
    id: 'planificacion-marketing',
    index: '04',
    title: 'Planificación de marketing',
    category: 'marca',
    categoryLabel: 'Estrategia',
    summary:
      'Del concepto inicial a un plan ejecutable: entender al público, definir prioridades y dar pasos medibles.',
    approach:
      'Conectar la investigación previa del público con acciones prácticas: pasar de una idea abstracta a objetivos claros, mensajes definidos y seguimiento realista.',
    deliverables: [
      'Definición de público y propuesta de valor',
      'Hoja de ruta por fases: idea, plan y acción',
      'Coordinación entre canales digitales y marca',
    ],
    artVariant: 'strategy',
  },
];

export const EXPERIENCE_ITEMS: ExperienceItem[] = [
  {
    index: '01',
    title: 'Experiencia en agencias y empresas',
    description:
      'He tenido la oportunidad de conocer de cerca el entorno profesional a través de mis periodos de formación práctica, acercándome a distintas tareas relacionadas con el marketing y la comunicación.',
  },
  {
    index: '02',
    title: 'Trabajo con herramientas digitales',
    description:
      'He podido utilizar herramientas digitales y participar en tareas relacionadas con páginas web y redes sociales, ampliando lo aprendido durante mi formación.',
  },
  {
    index: '03',
    title: 'Ganas de seguir aprendiendo',
    description:
      'Busco seguir ganando experiencia, mejorar mis habilidades y formar parte de proyectos donde pueda aportar creatividad, organización e interés por hacer bien las cosas.',
  },
];

export const EDUCATION_ITEMS: EducationItem[] = [
  {
    level: 'Grado superior',
    title: 'Marketing y Publicidad',
    description: 'Formación en marketing, comunicación y publicidad.',
  },
  {
    level: 'Grado medio',
    title: 'Actividades Comerciales',
    description: 'Formación en el ámbito comercial y la relación con el cliente.',
  },
];

export const PRACTICAL_TRAJECTORY_ITEMS: PracticalTrajectoryItem[] = [
  {
    company: 'LYNX DEVS',
    role: 'Prácticas formativas · Marketing Digital',
    summary:
      'Participación en tareas de marketing digital, gestión web y comunicación en redes sociales.',
    tasks: [
      'Optimización SEO básica de páginas web.',
      'Gestión y actualización de contenidos con WordPress y PrestaShop.',
      'Planificación de calendarios de publicaciones.',
      'Preparación de publicaciones y stories para Instagram.',
      'Propuestas de mejora para páginas web.',
      'Formación complementaria en Google Ads.',
    ],
  },
  {
    company: 'TUSUPER',
    role: 'Prácticas formativas · Marketing y Comunicación',
    summary:
      'Apoyo en tareas de comunicación digital y gestión de la presencia online de la empresa.',
    tasks: [
      'Edición básica de imágenes.',
      'Apoyo en la gestión de redes sociales.',
      'Revisión y respuesta a comentarios y reseñas de Google.',
      'Colaboración en tareas de contenido y comunicación digital.',
    ],
  },
  {
    company: 'CORTEFIEL (TENDAM)',
    role: 'Vendedor · Experiencia laboral · 3 meses',
    summary:
      'Desarrollo de funciones de atención al cliente y apoyo en la actividad comercial de la tienda.',
    tasks: [
      'Atención y asesoramiento personalizado.',
      'Reposición y colocación de prendas.',
      'Organización y mantenimiento de la tienda.',
      'Presentación y orden de los productos.',
      'Trabajo en equipo y apoyo en las tareas diarias.',
    ],
  },
];

export const INTEREST_ITEMS: InterestItem[] = [
  {
    id: 'interes-web',
    index: '01',
    title: 'Páginas web',
    shortDescription: 'Mejorar su aspecto, organización y facilidad de uso.',
    detail:
      'Me interesa analizar cómo navega una persona por una web, detectar puntos de fricción y reorganizar secciones para que el mensaje principal llegue sin ruido.',
    focusPoints: ['Estructura legible', 'Diseño responsive', 'Jerarquía visual'],
  },
  {
    id: 'interes-seo',
    index: '02',
    title: 'Posicionamiento SEO',
    shortDescription: 'Aprender a mejorar la visibilidad de una web en buscadores.',
    detail:
      'Trabajar la semántica HTML, la intención de búsqueda y la claridad de los encabezados y metadatos para facilitar que los usuarios encuentren el proyecto de forma orgánica.',
    focusPoints: ['Semántica y metadatos', 'Intención de búsqueda', 'Arquitectura de contenidos'],
  },
  {
    id: 'interes-redes',
    index: '03',
    title: 'Contenidos y redes sociales',
    shortDescription: 'Preparar contenidos y mantener una comunicación cercana y coherente.',
    detail:
      'Crear piezas que representen fielmente al proyecto y mantengan una conversación natural con el público, cuidando tanto el texto como el acabado visual.',
    focusPoints: ['Consistencia editorial', 'Formatos visuales', 'Comunicación cercana'],
  },
  {
    id: 'interes-marca',
    index: '04',
    title: 'Comunicación de marca',
    shortDescription: 'Conseguir que la imagen y el mensaje de una empresa vayan en la misma dirección.',
    detail:
      'Unificar lo que una marca dice y lo que muestra para generar confianza y ser fácilmente reconocible en cada punto de contacto.',
    focusPoints: ['Tono e identidad', 'Coherencia entre canales', 'Propuesta clara'],
  },
];

export const SKILL_GROUPS: SkillGroup[] = [
  {
    id: 'marketing-digital',
    index: '01',
    title: 'Marketing digital',
    focus: 'digital',
    items: [
      'SEO básico y posicionamiento orgánico',
      'Optimización de páginas web',
      'Marketing de contenidos',
      'Marketing digital',
      'Comercio electrónico (Ecommerce)',
      'Planificación de acciones de marketing',
    ],
  },
  {
    id: 'gestion-web-ecommerce',
    index: '02',
    title: 'Gestión web y Ecommerce',
    focus: 'digital',
    items: [
      'WordPress',
      'PrestaShop',
      'Actualización y gestión de contenidos web',
      'Edición de páginas y fichas de producto',
      'Gestión básica de tiendas online',
      'Optimización de contenidos digitales',
    ],
  },
  {
    id: 'redes-comunicacion',
    index: '03',
    title: 'Redes sociales y comunicación',
    focus: 'creativo',
    items: [
      'Gestión de redes sociales',
      'Planificación de calendarios editoriales',
      'Creación de publicaciones y stories',
      'Gestión de contenidos para Instagram',
      'Comunicación digital',
      'Gestión de comentarios y reseñas online',
    ],
  },
  {
    id: 'diseno-visual',
    index: '04',
    title: 'Diseño y contenido visual',
    focus: 'creativo',
    items: [
      'Edición básica de imágenes',
      'Preparación de materiales gráficos para redes sociales',
      'Composición y presentación visual de contenidos',
      'Criterio estético y visual',
      'Adaptación de contenidos a formatos digitales',
    ],
  },
  {
    id: 'herramientas-digitales',
    index: '05',
    title: 'Herramientas digitales',
    focus: 'perfil',
    items: [
      'WordPress',
      'PrestaShop',
      'Microsoft Excel',
      'Google Ads (formación y conocimientos iniciales)',
      'Herramientas de gestión de redes sociales',
    ],
  },
  {
    id: 'habilidades-personales',
    index: '06',
    title: 'Habilidades personales',
    focus: 'perfil',
    items: [
      'Organización y planificación',
      'Trabajo en equipo',
      'Responsabilidad',
      'Capacidad de adaptación',
      'Aprendizaje continuo',
      'Atención al detalle',
      'Iniciativa',
      'Comunicación interpersonal',
    ],
  },
];

