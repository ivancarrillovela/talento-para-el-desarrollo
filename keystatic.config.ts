// keystatic.config.ts
import { config, fields, collection, singleton } from "@keystatic/core";

export default config({
  cloud: {
    project: "ivancarrillovela/talento-desarrollo",
  },
  storage: import.meta.env.DEV ? { kind: "local" } : { kind: "cloud" },

  singletons: {
    // 1. HERO
    hero: singleton({
      label: "Portada",
      path: "src/content/hero/datos",
      schema: {
        titulo: fields.text({ label: "Título Principal" }),
        subtitulo: fields.text({ label: "Subtítulo (parte en color)" }),
        descripcion: fields.text({ label: "Descripción", multiline: true }),
        textoBoton: fields.text({ label: "Texto Botón Principal" }),
        textoBotonSecundario: fields.text({
          label: "Texto Botón Secundario (ej: Cómo colaborar)",
        }),
        imagen: fields.image({
          label: "Imagen de portada",
          directory: "public/images/hero",
          publicPath: "/images/hero/",
        }),
        // Datos del "Badge" flotante
        badgeTitulo: fields.text({ label: "Badge: Título (ej: +1.200 Becas)" }),
        badgeDesc: fields.text({ label: "Badge: Descripción" }),
      },
    }),

    // 2. SOBRE NOSOTROS
    sobreNosotros: singleton({
      label: "Sobre Nosotros",
      path: "src/content/sobre-nosotros/datos",
      schema: {
        titulo: fields.text({ label: "Título (ej: Nuestra Historia)" }),
        descripcion: fields.text({ label: "Texto principal", multiline: true }),
        imagen: fields.image({
          label: "Imagen del equipo o fundadores",
          directory: "public/images/about",
          publicPath: "/images/about/",
        }),
        stats: fields.object(
          {
            stat1_numero: fields.text({ label: "Dato 1: Número (ej: +50)" }),
            stat1_label: fields.text({
              label: "Dato 1: Texto (ej: Proyectos)",
            }),
            stat2_numero: fields.text({ label: "Dato 2: Número" }),
            stat2_label: fields.text({ label: "Dato 2: Texto" }),
            stat3_numero: fields.text({ label: "Dato 3: Número" }),
            stat3_label: fields.text({ label: "Dato 3: Texto" }),
          },
          { label: "Estadísticas de Impacto" },
        ),
      },
    }),

    // 3. LO QUE BUSCAMOS
    valoresIntro: singleton({
      label: " Lo que buscamos (Intro Valores)",
      path: "src/content/valores-intro/datos",
      schema: {
        titulo: fields.text({ label: "Título Grande" }),
        descripcion: fields.text({
          label: "Descripción Lateral",
          multiline: true,
        }),
      },
    }),

    // 4. NUESTRO TRABAJO
    nuestroTrabajoIntro: singleton({
      label: "Nuestro Trabajo",
      path: "src/content/nuestro-trabajo-intro/datos",
      schema: {
        titulo: fields.text({ label: "Título Grande" }),
        descripcion: fields.text({ label: "Descripción", multiline: true }),
      },
    }),

    // 5. CONTACTO
    contacto: singleton({
      label: "Contacto",
      path: "src/content/contacto/datos",
      schema: {
        titulo: fields.text({ label: "Título Grande" }),
        descripcion: fields.text({
          label: "Texto descriptivo",
          multiline: true,
        }),
        textoBoton: fields.text({ label: "Texto del Botón Enviar" }),
      },
    }),

    // 6. CONFIGURACIÓN GLOBAL
    global: singleton({
      label: "Configuración Web (Logo, Redes, Footer)",
      path: "src/content/global/datos",
      schema: {
        nombreSitio: fields.text({ label: "Nombre de la ONG" }),
        logo: fields.image({
          label: "Logo Principal",
          directory: "public/images/global",
          publicPath: "/images/global/",
        }),
        redes: fields.object(
          {
            instagram: fields.text({ label: "URL Instagram" }),
            linkedin: fields.text({ label: "URL LinkedIn" }),
            twitter: fields.text({ label: "URL Twitter/X" }),
          },
          { label: "Redes Sociales" },
        ),
        footerTexto: fields.text({ label: "Texto pie de página (Copyright)" }),
      },
    }),
  },

  // COLECCIONES

  // 1. VALORES
  collections: {
    valores: collection({
      label: "Valores (Tarjetas)",
      slugField: "titulo",
      path: "src/content/valores/*",
      schema: {
        titulo: fields.slug({ name: { label: "Título del Pilar" } }),
        descripcion: fields.text({
          label: "Descripción breve",
          multiline: true,
        }),
        icono: fields.text({ label: "Emoji o Icono (ej: 🎓)" }),
      },
    }),

    // 2. PROYECTOS
    proyectos: collection({
      label: "Proyectos (Nuestro Trabajo)",
      slugField: "titulo",
      path: "src/content/proyectos/*",
      schema: {
        titulo: fields.slug({ name: { label: "Título del Proyecto" } }),
        fecha: fields.date({
          label: "Fecha de publicación",
          validation: { isRequired: true },
        }), // NUEVO
        imagen: fields.image({
          label: "Imagen del Proyecto",
          directory: "public/images/proyectos",
          publicPath: "/images/proyectos/",
        }),
        descripcion: fields.text({
          label: "Descripción breve",
          multiline: true,
        }),
        pdf: fields.file({
          label: "Archivo PDF",
          directory: "public/pdfs/proyectos",
          publicPath: "/pdfs/proyectos/",
        }),
      },
    }),
  },
});
