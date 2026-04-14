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
        titulo: fields.text({ label: "Título Principal (ES)" }),
        titulo_en: fields.text({ label: "Título Principal (EN)" }),
        titulo_fr: fields.text({ label: "Título Principal (FR)" }),
        subtitulo: fields.text({ label: "Subtítulo (parte en color) (ES)" }),
        subtitulo_en: fields.text({ label: "Subtítulo (parte en color) (EN)" }),
        subtitulo_fr: fields.text({ label: "Subtítulo (parte en color) (FR)" }),
        descripcion: fields.text({ label: "Descripción (ES)", multiline: true }),
        descripcion_en: fields.text({ label: "Descripción (EN)", multiline: true }),
        descripcion_fr: fields.text({ label: "Descripción (FR)", multiline: true }),
        textoBoton: fields.text({ label: "Texto Botón Principal (ES)" }),
        textoBoton_en: fields.text({ label: "Texto Botón Principal (EN)" }),
        textoBoton_fr: fields.text({ label: "Texto Botón Principal (FR)" }),
        textoBotonSecundario: fields.text({
          label: "Texto Botón Secundario (ej: Cómo colaborar) (ES)",
        }),
        textoBotonSecundario_en: fields.text({
          label: "Texto Botón Secundario (ej: Cómo colaborar) (EN)",
        }),
        textoBotonSecundario_fr: fields.text({
          label: "Texto Botón Secundario (ej: Cómo colaborar) (FR)",
        }),
        imagen: fields.image({
          label: "Imagen de portada",
          directory: "public/images/hero",
          publicPath: "/images/hero/",
        }),
        // Datos del "Badge" flotante
        badgeTitulo: fields.text({ label: "Badge: Título (ej: +1.200 Becas) (ES)" }),
        badgeTitulo_en: fields.text({ label: "Badge: Título (ej: +1.200 Becas) (EN)" }),
        badgeTitulo_fr: fields.text({ label: "Badge: Título (ej: +1.200 Becas) (FR)" }),
        badgeDesc: fields.text({ label: "Badge: Descripción (ES)" }),
        badgeDesc_en: fields.text({ label: "Badge: Descripción (EN)" }),
        badgeDesc_fr: fields.text({ label: "Badge: Descripción (FR)" }),
      },
    }),

    // 2. SOBRE NOSOTROS
    sobreNosotros: singleton({
      label: "Sobre Nosotros",
      path: "src/content/sobre-nosotros/datos",
      schema: {
        titulo: fields.text({ label: "Título (ej: Nuestra Historia) (ES)" }),
        titulo_en: fields.text({ label: "Título (ej: Nuestra Historia) (EN)" }),
        titulo_fr: fields.text({ label: "Título (ej: Nuestra Historia) (FR)" }),
        descripcion: fields.text({ label: "Texto principal (ES)", multiline: true }),
        descripcion_en: fields.text({ label: "Texto principal (EN)", multiline: true }),
        descripcion_fr: fields.text({ label: "Texto principal (FR)", multiline: true }),
        imagen: fields.image({
          label: "Imagen del equipo o fundadores",
          directory: "public/images/about",
          publicPath: "/images/about/",
        }),
        stats: fields.object(
          {
            stat1_numero: fields.text({ label: "Dato 1: Número (ej: +50) (ES)" }),
        stat1_numero_en: fields.text({ label: "Dato 1: Número (ej: +50) (EN)" }),
        stat1_numero_fr: fields.text({ label: "Dato 1: Número (ej: +50) (FR)" }),
            stat1_label: fields.text({
              label: "Dato 1: Texto (ej: Proyectos) (ES)",
            }),
        stat1_label_en: fields.text({
              label: "Dato 1: Texto (ej: Proyectos) (EN)",
            }),
        stat1_label_fr: fields.text({
              label: "Dato 1: Texto (ej: Proyectos) (FR)",
            }),
            stat2_numero: fields.text({ label: "Dato 2: Número (ES)" }),
        stat2_numero_en: fields.text({ label: "Dato 2: Número (EN)" }),
        stat2_numero_fr: fields.text({ label: "Dato 2: Número (FR)" }),
            stat2_label: fields.text({ label: "Dato 2: Texto (ES)" }),
        stat2_label_en: fields.text({ label: "Dato 2: Texto (EN)" }),
        stat2_label_fr: fields.text({ label: "Dato 2: Texto (FR)" }),
            stat3_numero: fields.text({ label: "Dato 3: Número (ES)" }),
        stat3_numero_en: fields.text({ label: "Dato 3: Número (EN)" }),
        stat3_numero_fr: fields.text({ label: "Dato 3: Número (FR)" }),
            stat3_label: fields.text({ label: "Dato 3: Texto (ES)" }),
        stat3_label_en: fields.text({ label: "Dato 3: Texto (EN)" }),
        stat3_label_fr: fields.text({ label: "Dato 3: Texto (FR)" }),
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
        titulo: fields.text({ label: "Título Grande (ES)" }),
        titulo_en: fields.text({ label: "Título Grande (EN)" }),
        titulo_fr: fields.text({ label: "Título Grande (FR)" }),
        descripcion: fields.text({
          label: "Descripción Lateral (ES)",
          multiline: true,
        }),
        descripcion_en: fields.text({
          label: "Descripción Lateral (EN)",
          multiline: true,
        }),
        descripcion_fr: fields.text({
          label: "Descripción Lateral (FR)",
          multiline: true,
        }),
      },
    }),

    // 4. NUESTRO TRABAJO
    nuestroTrabajoIntro: singleton({
      label: "Nuestro Trabajo (Cabecera)",
      path: "src/content/nuestro-trabajo-intro/datos",
      schema: {
        titulo: fields.text({ label: "Título Grande (ES)" }),
        titulo_en: fields.text({ label: "Título Grande (EN)" }),
        titulo_fr: fields.text({ label: "Título Grande (FR)" }),
        descripcion: fields.text({ label: "Descripción (ES)", multiline: true }),
        descripcion_en: fields.text({ label: "Descripción (EN)", multiline: true }),
        descripcion_fr: fields.text({ label: "Descripción (FR)", multiline: true }),
      },
    }),

    // 5. CONTACTO
    contacto: singleton({
      label: "Contacto",
      path: "src/content/contacto/datos",
      schema: {
        titulo: fields.text({ label: "Título Grande (ES)" }),
        titulo_en: fields.text({ label: "Título Grande (EN)" }),
        titulo_fr: fields.text({ label: "Título Grande (FR)" }),
        descripcion: fields.text({
          label: "Texto descriptivo (ES)",
          multiline: true,
        }),
        descripcion_en: fields.text({
          label: "Texto descriptivo (EN)",
          multiline: true,
        }),
        descripcion_fr: fields.text({
          label: "Texto descriptivo (FR)",
          multiline: true,
        }),
        textoBoton: fields.text({ label: "Texto del Botón Enviar (ES)" }),
        textoBoton_en: fields.text({ label: "Texto del Botón Enviar (EN)" }),
        textoBoton_fr: fields.text({ label: "Texto del Botón Enviar (FR)" }),
      },
    }),

    // 6. CONFIGURACIÓN GLOBAL
    global: singleton({
      label: "Configuración Web (Logo, Redes, Footer)",
      path: "src/content/global/datos",
      schema: {
        nombreSitio: fields.text({
          label: "Nombre de la asociación (Si no subes logo se verá esto) (ES)",
        }),
        nombreSitio_en: fields.text({
          label: "Nombre de la asociación (Si no subes logo se verá esto) (EN)",
        }),
        nombreSitio_fr: fields.text({
          label: "Nombre de la asociación (Si no subes logo se verá esto) (FR)",
        }),
        logo: fields.image({
          label:
            "Logo de la asociación (Si pones un logo no se verá el nombre de la asociación, solo el logo)",
          directory: "public/images/global",
          publicPath: "/images/global/",
        }),
        redes: fields.object(
          {
            instagram: fields.text({ label: "URL Instagram (ES)" }),
        instagram_en: fields.text({ label: "URL Instagram (EN)" }),
        instagram_fr: fields.text({ label: "URL Instagram (FR)" }),
            linkedin: fields.text({ label: "URL LinkedIn (ES)" }),
        linkedin_en: fields.text({ label: "URL LinkedIn (EN)" }),
        linkedin_fr: fields.text({ label: "URL LinkedIn (FR)" }),
            twitter: fields.text({ label: "URL Twitter/X (ES)" }),
        twitter_en: fields.text({ label: "URL Twitter/X (EN)" }),
        twitter_fr: fields.text({ label: "URL Twitter/X (FR)" }),
            webExterna: fields.text({ label: "URL Web Externa (ES)" }),
        webExterna_en: fields.text({ label: "URL Web Externa (EN)" }),
        webExterna_fr: fields.text({ label: "URL Web Externa (FR)" }),
          },
          { label: "Redes Sociales" },
        ),
        footerTexto: fields.text({
          label: "Texto pie de página (Junto al Copyright) (ES)",
        }),
        footerTexto_en: fields.text({
          label: "Texto pie de página (Junto al Copyright) (EN)",
        }),
        footerTexto_fr: fields.text({
          label: "Texto pie de página (Junto al Copyright) (FR)",
        }),
      },
    }),

    // 7. CÓMO BENEFICIARTE
    comoBeneficiarte: singleton({
      label: "Cómo Beneficiarte",
      path: "src/content/como-beneficiarte/datos",
      schema: {
        tituloSmall: fields.text({
          label: "Título Pequeño (ej: Oportunidades) (ES)",
        }),
        tituloSmall_en: fields.text({
          label: "Título Pequeño (ej: Oportunidades) (EN)",
        }),
        tituloSmall_fr: fields.text({
          label: "Título Pequeño (ej: Oportunidades) (FR)",
        }),
        titulo: fields.text({ label: "Título Principal (ES)" }),
        titulo_en: fields.text({ label: "Título Principal (EN)" }),
        titulo_fr: fields.text({ label: "Título Principal (FR)" }),
        descripcion: fields.text({ label: "Descripción (ES)", multiline: true }),
        descripcion_en: fields.text({ label: "Descripción (EN)", multiline: true }),
        descripcion_fr: fields.text({ label: "Descripción (FR)", multiline: true }),
        paso1_titulo: fields.text({ label: "Paso 1: Título (ES)" }),
        paso1_titulo_en: fields.text({ label: "Paso 1: Título (EN)" }),
        paso1_titulo_fr: fields.text({ label: "Paso 1: Título (FR)" }),
        paso1_desc: fields.text({
          label: "Paso 1: Descripción (ES)",
          multiline: true,
        }),
        paso1_desc_en: fields.text({
          label: "Paso 1: Descripción (EN)",
          multiline: true,
        }),
        paso1_desc_fr: fields.text({
          label: "Paso 1: Descripción (FR)",
          multiline: true,
        }),
        paso2_titulo: fields.text({ label: "Paso 2: Título (ES)" }),
        paso2_titulo_en: fields.text({ label: "Paso 2: Título (EN)" }),
        paso2_titulo_fr: fields.text({ label: "Paso 2: Título (FR)" }),
        paso2_desc: fields.text({
          label: "Paso 2: Descripción (ES)",
          multiline: true,
        }),
        paso2_desc_en: fields.text({
          label: "Paso 2: Descripción (EN)",
          multiline: true,
        }),
        paso2_desc_fr: fields.text({
          label: "Paso 2: Descripción (FR)",
          multiline: true,
        }),
        paso3_titulo: fields.text({ label: "Paso 3: Título (ES)" }),
        paso3_titulo_en: fields.text({ label: "Paso 3: Título (EN)" }),
        paso3_titulo_fr: fields.text({ label: "Paso 3: Título (FR)" }),
        paso3_desc: fields.text({
          label: "Paso 3: Descripción (ES)",
          multiline: true,
        }),
        paso3_desc_en: fields.text({
          label: "Paso 3: Descripción (EN)",
          multiline: true,
        }),
        paso3_desc_fr: fields.text({
          label: "Paso 3: Descripción (FR)",
          multiline: true,
        }),
        botonTexto: fields.text({ label: "Texto del Botón (Ej: Solicitar ahora) (ES)" }),
        botonTexto_en: fields.text({ label: "Texto del Botón (Ej: Solicitar ahora) (EN)" }),
        botonTexto_fr: fields.text({ label: "Texto del Botón (Ej: Solicitar ahora) (FR)" }),
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
        titulo: fields.slug({ name: { label: "Título del valor (ES)" } }),
        titulo_en: fields.text({ label: "Título del valor (EN)" }),
        titulo_fr: fields.text({ label: "Título del valor (FR)" }),
        descripcion: fields.text({
          label: "Descripción breve (ES)",
          multiline: true,
        }),
        descripcion_en: fields.text({
          label: "Descripción breve (EN)",
          multiline: true,
        }),
        descripcion_fr: fields.text({
          label: "Descripción breve (FR)",
          multiline: true,
        }),
        icono: fields.text({ label: "Emoji o Icono para el valor (ej: 🎓) (ES)" }),
        icono_en: fields.text({ label: "Emoji o Icono para el valor (ej: 🎓) (EN)" }),
        icono_fr: fields.text({ label: "Emoji o Icono para el valor (ej: 🎓) (FR)" }),
      },
    }),

    // 2. PROYECTOS
    proyectos: collection({
      label: "Proyectos (Nuestro Trabajo)",
      slugField: "titulo",
      path: "src/content/proyectos/*",
      schema: {
        titulo: fields.slug({ name: { label: "Título del Proyecto (Breve) (ES)" } }),
        titulo_en: fields.text({ label: "Título del Proyecto (Breve) (EN)" }),
        titulo_fr: fields.text({ label: "Título del Proyecto (Breve) (FR)" }),
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
          label: "Descripción breve (ES)",
          multiline: true,
        }),
        descripcion_en: fields.text({
          label: "Descripción breve (EN)",
          multiline: true,
        }),
        descripcion_fr: fields.text({
          label: "Descripción breve (FR)",
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
