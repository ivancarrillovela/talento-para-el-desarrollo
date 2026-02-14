// keystatic.config.ts
import { config, fields, collection, singleton } from "@keystatic/core";

export default config({
  cloud: {
    project: "ivancarrillovela/talento-desarrollo",
  },
  storage: import.meta.env.DEV ? { kind: "local" } : { kind: "cloud" },

  singletons: {
    // 1. PORTADA
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
      label: " Lo que buscamos (Cabecera)",
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
      label: "Nuestro Trabajo (Cabecera)",
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
        nombreSitio: fields.text({
          label: "Nombre de la asociación (Si no subes logo se verá esto)",
        }),
        logo: fields.image({
          label:
            "Logo de la asociación (Si pones un logo no se verá el nombre de la asociación, solo el logo)",
          directory: "public/images/global",
          publicPath: "/images/global/",
        }),
        redes: fields.object(
          {
            instagram: fields.text({ label: "URL Instagram" }),
            linkedin: fields.text({ label: "URL LinkedIn" }),
            twitter: fields.text({ label: "URL Twitter/X" }),
            webExterna: fields.text({ label: "URL Web Externa" }),
          },
          { label: "Redes Sociales" },
        ),
        footerTexto: fields.text({
          label: "Texto pie de página (Junto al Copyright)",
        }),
      },
    }),

    // 7. CÓMO BENEFICIARTE
    comoBeneficiarte: singleton({
      label: "Cómo Beneficiarte",
      path: "src/content/como-beneficiarte/datos",
      schema: {
        tituloSmall: fields.text({
          label: "Título Pequeño (ej: Oportunidades)",
        }),
        titulo: fields.text({ label: "Título Principal" }),
        descripcion: fields.text({ label: "Descripción", multiline: true }),
        paso1_titulo: fields.text({ label: "Paso 1: Título" }),
        paso1_desc: fields.text({
          label: "Paso 1: Descripción",
          multiline: true,
        }),
        paso2_titulo: fields.text({ label: "Paso 2: Título" }),
        paso2_desc: fields.text({
          label: "Paso 2: Descripción",
          multiline: true,
        }),
        paso3_titulo: fields.text({ label: "Paso 3: Título" }),
        paso3_desc: fields.text({
          label: "Paso 3: Descripción",
          multiline: true,
        }),
        botonTexto: fields.text({ label: "Texto del Botón (Ej: Solicitar ahora)" }),
      },
    }),
  },

  // COLECCIONES

  // 1. VALORES
  collections: {
    valores: collection({
      label: "Valores (Lo que buscamos)",
      slugField: "titulo",
      path: "src/content/valores/*",
      schema: {
        titulo: fields.slug({ name: { label: "Título del valor" } }),
        descripcion: fields.text({
          label: "Descripción breve",
          multiline: true,
        }),
        icono: fields.text({ label: "Emoji o Icono para el valor (ej: 🎓)" }),
      },
    }),

    // 2. PROYECTOS
    proyectos: collection({
      label: "Proyectos (Nuestro Trabajo)",
      slugField: "titulo",
      path: "src/content/proyectos/*",
      schema: {
        titulo: fields.slug({ name: { label: "Título del Proyecto (Breve)" } }),
        fecha: fields.date({
          label: "Fecha de publicación",
          validation: { isRequired: true },
        }),
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
