/**
 * Base de datos histórica y emotiva: San José La Salle (1967 - 1968 - 1969)
 * Campeonatos de fútbol, presentaciones colegiales y vivencias de época.
 */

export const siteInfo = {
  title: "San José La Salle (1967 - 1969)",
  subtitle: "Memoria viva de una época dorada: Fútbol, Hermandad y Tradición",
  years: [1967, 1968, 1969],
  institution: "Colegio San José La Salle",
  motto: "Indivisa Manent — Permanecen Unidos"
};

export const yearsData = {
  1967: {
    year: 1967,
    title: "El Despertar de la Mística Lasallista",
    subtitle: "El inicio de una trilogía legendaria en las canchas y los desfiles",
    heroText: "En 1967, el uniforme albiazul de San José La Salle comenzó a forjar una leyenda que aún retumba en los pasillos del colegio. Con garra, disciplina y la bendición del Hermano Rector, la escuadra juvenil alcanzó el ansiado trofeo intercolegial.",
    milestones: [
      {
        icon: "trophy",
        title: "Campeonato Juvenil 1967",
        desc: "Victoria inolvidable en la final intercolegial con gol de tiro libre en el minuto 88."
      },
      {
        icon: "flag",
        title: "Gran Presentación Gimnástica",
        desc: "Más de 400 alumnos sincronizados en el patio de honor ante autoridades y familias."
      },
      {
        icon: "users",
        title: "Banda de Guerra y Clarines",
        desc: "Primer puesto en el desfile cívico institucional por precisión y marcialidad."
      }
    ],
    stats: {
      partidosJugados: 12,
      victorias: 10,
      golesFavor: 34,
      presentaciones: 6
    }
  },
  1968: {
    year: 1968,
    title: "El Año de la Consagración y la Gloria",
    subtitle: "El bicampeonato de fútbol y la presentación de gala que conmovió a la ciudad",
    heroText: "1968 quedó grabado con letras de oro. Una delantera implacable y una defensa aguerrida sellaron el bicampeonato invicto. Paralelamente, las presentaciones artísticas y cívicas marcaron un estándar de elegancia inigualable.",
    milestones: [
      {
        icon: "trophy",
        title: "Bicampeones Invicto 1968",
        desc: "Campaña perfecta sin conocer la derrota. El estadio municipal colmado de pañuelos y coros lasallistas."
      },
      {
        icon: "star",
        title: "La Gran Pirámide Humana",
        desc: "Hazaña física de los alumnos de último año durante la semana del patrono San José."
      },
      {
        icon: "music",
        title: "Noche de Gala y Velada Cultural",
        desc: "Estreno de la marcha conmemorativa interpretada por la orquesta y el coro del colegio."
      }
    ],
    stats: {
      partidosJugados: 14,
      victorias: 13,
      golesFavor: 42,
      presentaciones: 8
    }
  },
  1969: {
    year: 1969,
    title: "El Triplete Histórico y la Despedida",
    subtitle: "Cierre magistral de una generación irrepetible que dejó huella para siempre",
    heroText: "Tres años consecutivos en la cima deportiva y cultural. Aquel equipo de 1969 no solo ganó partidos; consolidó una fraternidad que se ha mantenido viva durante más de cinco décadas. El abrazo en la cancha tras el silbatazo final aún conmueve el corazón de quienes lo vivieron.",
    milestones: [
      {
        icon: "trophy",
        title: "Tricampeonato de Fútbol 1969",
        desc: "Hazaña deportiva histórica: tricampeones indiscutidos recibiendo la Copa de Oro de Honor."
      },
      {
        icon: "award",
        title: "Presentación de Despedida de Promoción",
        desc: "Cuadros vivos de historia patria y entrega solemne del estandarte a los nuevos cadetes."
      },
      {
        icon: "heart",
        title: "Pacto de Fraternidad Eterna",
        desc: "El compromiso de los egresados de volver a reunirse y mantener el espíritu lasallista."
      }
    ],
    stats: {
      partidosJugados: 15,
      victorias: 14,
      golesFavor: 48,
      presentaciones: 9
    }
  }
};

export const galleryItems = [
  {
    id: "g1",
    year: 1968,
    category: "futbol",
    image: "./images/futbol-1968.svg",
    title: "El Once Titular del Bicampeonato",
    subtitle: "Estadio Olímpico Municipal, Noviembre de 1968",
    description: "La alineación estelar previa a la gran final. De pie: González, 'El Murallón' Paredes, Martínez, Hermano Luis (DT), Silva, Caicedo. En cuclillas: Morales, 'Flecha' Rivas, 'Tanque' Mendoza, Barreto y Salcedo.",
    tags: ["Fútbol", "Equipo Campeón", "1968"],
    aspect: "landscape",
    caption: "¡Los guerreros que nunca bajaron los brazos!"
  },
  {
    id: "g2",
    year: 1967,
    category: "presentaciones",
    image: "./images/presentacion-1967.svg",
    title: "Desfile Cívico y Cuadro de Gimnasia Rítmica",
    subtitle: "Avenida Principal y Patio de Honor, Mayo 1967",
    description: "Impecable formación de calistenia y gimnasia en la fiesta patronal de San Juan Bautista de La Salle. Alumnos con buzo blanco institucional y monograma azul bordado.",
    tags: ["Presentaciones", "Gimnasia", "1967"],
    aspect: "landscape",
    caption: "Disciplina y elegancia en cada movimiento sincronizado."
  },
  {
    id: "g3",
    year: 1969,
    category: "futbol",
    image: "./images/futbol-1969.svg",
    title: "El Gol del Tricampeonato y la Vuelta Olímpica",
    subtitle: "Cancha de Honor, Octubre de 1969",
    description: "Celebración épica del cabezazo certero de 'Tanque' Mendoza que rompió el empate y selló el tercer título consecutivo para San José La Salle.",
    tags: ["Gol Histórico", "Fútbol", "1969"],
    aspect: "landscape",
    caption: "El grito de gol que hizo temblar las gradas del colegio."
  },
  {
    id: "g4",
    year: 1968,
    category: "presentaciones",
    image: "./images/presentacion-1968.svg",
    title: "La Legendaria Pirámide Humana de 5 Niveles",
    subtitle: "Semana Lasallista, Junio de 1968",
    description: "Demostración de fuerza, confianza mutua y compañerismo. En la cúspide flameaba con orgullo la insignia con la estrella lasallista.",
    tags: ["Acrobacia", "Hermandad", "1968"],
    aspect: "portrait",
    caption: "Confianza absoluta en el hombro del hermano."
  },
  {
    id: "g5",
    year: 1967,
    category: "futbol",
    image: "./images/futbol-1967.svg",
    title: "La Charla Técnica del Hermano Miguel",
    subtitle: "Camerinos de Madera del Colegio, Septiembre 1967",
    description: "Momento íntimo de oración y estrategia antes de saltar a la cancha de tierra. 'Jueguen con el corazón limpio y el empeño de un buen cristiano'.",
    tags: ["Camerino", "Mística", "1967"],
    aspect: "landscape",
    caption: "La fe y la táctica unidas antes de cada batalla deportiva."
  },
  {
    id: "g6",
    year: 1969,
    category: "presentaciones",
    image: "./images/presentacion-1969.svg",
    title: "Banda de Guerra y Escolta de Estandarte",
    subtitle: "Plaza Central, Concurso de Bandas 1969",
    description: "Tambores templados a fuego, clarines de bronce brillante y el paso marcial que arrancó aplausos de pie en toda la avenida.",
    tags: ["Banda de Guerra", "Desfile", "1969"],
    aspect: "landscape",
    caption: "El redoble inconfundible que hacía vibrar el pecho."
  },
  {
    id: "g7",
    year: 1968,
    category: "vida-estudiantil",
    image: "./images/vida-estudiantil-1.svg",
    title: "La Barra Albiazul en las Gradas",
    subtitle: "Tribuna de Occidente, Final 1968",
    description: "Compañeros con matracas, cornetas de hojalata y pancartas pintadas a mano con témpera. Los cánticos no pararon en los 90 minutos.",
    tags: ["Barra Colegial", "Entusiasmo", "1968"],
    aspect: "landscape",
    caption: "¡La Salle, La Salle, arriba La Salle!"
  },
  {
    id: "g8",
    year: 1969,
    category: "vida-estudiantil",
    image: "./images/vida-estudiantil-2.svg",
    title: "La Entrega del Trofeo de Oro y Celebración",
    subtitle: "Salón de Actos Máximo, Diciembre 1969",
    description: "El Capitán Carlos Silva levantando la copa junto al Rector y todo el plantel. Risas, lágrimas de emoción y el abrazo de una promoción inolvidable.",
    tags: ["Trofeo", "Celebración", "1969"],
    aspect: "portrait",
    caption: "El trofeo que inmortalizó una era."
  }
];

export const lineup1968 = {
  formation: "4-2-4 (Clásica de Época)",
  title: "Alineación Histórica — La Maquinaria Albiazul de 1968",
  coach: "Hno. Luis Gonzaga (Director Técnico y Formador Moral)",
  players: [
    { number: 1, name: "Roberto 'El Candado' Paredes", pos: "Arquero", desc: "Seguridad bajo los tres palos, reflejos felinos y despejes con puño de hierro." },
    { number: 2, name: "Carlos Silva (C)", pos: "Lateral Derecho", desc: "Capitán ejemplar, temperamento sereno y marca implacable por la banda." },
    { number: 3, name: "Héctor 'Murallón' González", pos: "Defensa Central", desc: "Impracticable por arriba, cabeceador potente y líder de la zaga." },
    { number: 4, name: "Guillermo Martínez", pos: "Defensa Central", desc: "Anticipación milimétrica y salida limpia con balón dominado." },
    { number: 6, name: "Jorge Caicedo", pos: "Lateral Izquierdo", desc: "Veloz en los repliegues y centros templados al corazón del área rival." },
    { number: 5, name: "Alfonso 'Cerebro' Morales", pos: "Volante de Contención", desc: "El reloj del equipo. Robaba balones y distribuía con precisión quirúrgica." },
    { number: 8, name: "Ernesto Barreto", pos: "Volante Mixto", desc: "Dinámica incansable, despliegue físico de arco a arco." },
    { number: 7, name: "Fernando 'Flecha' Rivas", pos: "Puntero Derecho", desc: "Desborde vertiginoso por la raya, gambeta corta y centros venenosos." },
    { number: 9, name: "Alberto 'Tanque' Mendoza", pos: "Centrodelantero", desc: "Goleador implacable del torneo con 19 tantos. Pura potencia y remate letal." },
    { number: 10, name: "Mauricio Salcedo", pos: "Media Punta / 10", desc: "Magia pura con la zurda, tiros libres teledirigidos y visión de juego adelantada a su tiempo." },
    { number: 11, name: "Luis 'Chispa' Valdés", pos: "Puntero Izquierdo", desc: "Impredecible en el mano a mano, definidor de zurda al ángulo." }
  ]
};

export const sampleMemories = [
  {
    id: "m1",
    author: "Carlos Alberto Silva (Promoción 1969)",
    date: "Ayer a las 4:35 pm",
    yearRole: "Capitán del equipo 1968-1969",
    content: "Volver a ver estas fotos me ha llenado los ojos de lágrimas. Me acuerdo clarito del olor al pasto mojado y de cómo el Hermano Luis nos daba agua con limón y panela antes de salir a la cancha. Éramos más que compañeros, éramos hermanos de verdad. ¡Un abrazo fraterno a todos!",
    likes: 24
  },
  {
    id: "m2",
    author: "Ing. Fernando Rivas M.",
    date: "Hace 2 días",
    yearRole: "Puntero derecho '67 - '68",
    content: "¡Qué emoción tan grande! Todavía guardo en mi baúl el banderín que nos dieron en la final contra el colegio San Gabriel. Mis nietos siempre me preguntaban si de verdad fui campeón y ahora con esta página van a ver que el abuelo no les mentía.",
    likes: 19
  },
  {
    id: "m3",
    author: "María Elena Mendoza (Hija del 'Tanque' Mendoza)",
    date: "Hace 3 días",
    yearRole: "Familiar Lasallista",
    content: "Mi papá nos hablaba siempre de aquellos tres años, de cómo celebraron en la plaza con bocinas y banderas. Verlo en la foto con su número 9 me parte el alma de orgullo. ¡Gracias de todo corazón por rescatar esta historia!",
    likes: 31
  }
];
