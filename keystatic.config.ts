// keystatic.config.ts
import { config, fields, collection, singleton } from "@keystatic/core";

export default config({
  cloud: {
    project: "ivancarrillovela/talento-desarrollo",
  },
  storage: import.meta.env.DEV ? { kind: "local" } : { kind: "cloud" },

  singletons: {
    // 1. HERO (Añadimos lo que faltaba)
    hero: singleton({
      label: "Sección Hero (Portada)",
      path: "src/content/hero/datos",
      schema: {
        etiquetaSuperior: fields.text({
          label: "Etiqueta Superior (ej: Inversión en Talento)",
        }), // NUEVO
        titulo: fields.text({ label: "Título Principal" }),
        subtitulo: fields.text({ label: "Subtítulo (parte en color)" }),
        descripcion: fields.text({ label: "Descripción", multiline: true }),
        textoBoton: fields.text({ label: "Texto Botón Principal" }),
        textoBotonSecundario: fields.text({
          label: "Texto Botón Secundario (ej: Cómo colaborar)",
        }), // NUEVO
        imagen: fields.image({
          label: "Imagen de portada",
          directory: "public/images/hero",
          publicPath: "/images/hero/",
        }),
        // Datos del "Badge" flotante (La cajita blanca sobre la foto)
        badgeTitulo: fields.text({ label: "Badge: Título (ej: +1.200 Becas)" }), // NUEVO
        badgeDesc: fields.text({ label: "Badge: Descripción" }), // NUEVO
      },
    }),

    // 2. PILARES INTRO (Nueva sección para el texto introductorio)
    pilaresIntro: singleton({
      label: "Sección Pilares (Intro)",
      path: "src/content/pilares-intro/datos",
      schema: {
        etiqueta: fields.text({
          label: "Etiqueta pequeña (ej: Nuestro Enfoque)",
        }),
        titulo: fields.text({ label: "Título Grande" }),
        descripcion: fields.text({
          label: "Descripción Lateral",
          multiline: true,
        }),
      },
    }),

    // 3. CONTACTO (Nueva sección)
    contacto: singleton({
      label: "Sección Contacto",
      path: "src/content/contacto/datos",
      schema: {
        etiqueta: fields.text({ label: "Etiqueta pequeña (ej: Hablemos)" }),
        titulo: fields.text({ label: "Título Grande" }),
        descripcion: fields.text({
          label: "Texto descriptivo",
          multiline: true,
        }),
        textoBoton: fields.text({ label: "Texto del Botón Enviar" }),
      },
    }),
    // 4. QUIENES SOMOS (Nueva Sección)
    quienesSomos: singleton({
      label: 'Sección Quiénes Somos',
      path: 'src/content/quienes-somos/datos',
      schema: {
        titulo: fields.text({ label: 'Título (ej: Nuestra Historia)' }),
        descripcion: fields.text({ label: 'Texto principal', multiline: true }),
        imagen: fields.image({
          label: 'Imagen del equipo o fundadores',
          directory: 'public/images/about',
          publicPath: '/images/about/',
        }),
        stats: fields.object({
          label: 'Estadísticas de Impacto',
          fields: {
            stat1_numero: fields.text({ label: 'Dato 1: Número (ej: +50)' }),
            stat1_label: fields.text({ label: 'Dato 1: Texto (ej: Proyectos)' }),
            stat2_numero: fields.text({ label: 'Dato 2: Número' }),
            stat2_label: fields.text({ label: 'Dato 2: Texto' }),
            stat3_numero: fields.text({ label: 'Dato 3: Número' }),
            stat3_label: fields.text({ label: 'Dato 3: Texto' }),
          }
        })
      },
    }),

    // 5. CONFIGURACIÓN GLOBAL (Navbar y Footer)
    global: singleton({
      label: 'Configuración Web (Logo, Redes, Footer)',
      path: 'src/content/global/datos',
      schema: {
        nombreSitio: fields.text({ label: 'Nombre de la ONG' }),
        logo: fields.image({
          label: 'Logo Principal',
          directory: 'public/images/global',
          publicPath: '/images/global/',
        }),
        redes: fields.object({
          label: 'Redes Sociales',
          fields: {
            instagram: fields.text({ label: 'URL Instagram' }),
            linkedin: fields.text({ label: 'URL LinkedIn' }),
            twitter: fields.text({ label: 'URL Twitter/X' }),
          }
        }),
        footerTexto: fields.text({ label: 'Texto pie de página (Copyright)' }),
      },
    }),
  },

  // Las colecciones se quedan igual
  collections: {
    pilares: collection({
      label: "Pilares (Tarjetas)",
      slugField: "titulo",
      path: "src/content/pilares/*",
      schema: {
        titulo: fields.slug({ name: { label: "Título del Pilar" } }),
        descripcion: fields.text({
          label: "Descripción breve",
          multiline: true,
        }),
        icono: fields.text({ label: "Emoji o Icono (ej: 🎓)" }),
      },
    }),
  },
});
