import { defineCollection, z } from "astro:content";

// 1. Colección de VALORES
const valores = defineCollection({
  type: "data",
  schema: z.object({
    titulo: z.string(),
    descripcion: z.string(),
    icono: z.string(),
  }),
});

// 2. Colección de PORTADA
const hero = defineCollection({
  type: "data",
  schema: z.object({
    etiquetaSuperior: z.string().optional(),
    titulo: z.string().optional(),
    subtitulo: z.string().optional(),
    descripcion: z.string().optional(),
    textoBoton: z.string().optional(),
    textoBotonSecundario: z.string().optional(),
    imagen: z.string().optional(),
    badgeTitulo: z.string().optional(),
    badgeDesc: z.string().optional(),
  }),
});

// 3. Colección de VALORES INTRO
const valoresIntro = defineCollection({
  type: "data",
  schema: z.object({
    etiqueta: z.string().optional(),
    titulo: z.string().optional(),
    descripcion: z.string().optional(),
  }),
});

// 4. Colección de CONTACTO
const contacto = defineCollection({
  type: "data",
  schema: z.object({
    etiqueta: z.string().optional(),
    titulo: z.string().optional(),
    descripcion: z.string().optional(),
    textoBoton: z.string().optional(),
  }),
});

// 5. Colección de NUESTRO TRABAJO INTRO
const nuestroTrabajoIntro = defineCollection({
  type: "data",
  schema: z.object({
    etiqueta: z.string().optional(),
    titulo: z.string().optional(),
    descripcion: z.string().optional(),
  }),
});

// 6. Colección de PROYECTOS
const proyectos = defineCollection({
  type: "data",
  schema: z.object({
    titulo: z.string(),
    fecha: z.coerce.date(), // Para poder ordenar
    descripcion: z.string(),
    imagen: z.string().optional(),
    pdf: z.string().optional(),
  }),
});

// 7. Colección de GLOBAL
const global = defineCollection({
  type: "data",
  schema: z.object({
    nombreSitio: z.string().optional(),
    logo: z.string().optional(),
    redes: z
      .object({
        instagram: z.string().optional(),
        linkedin: z.string().optional(),
        twitter: z.string().optional(),
        webExterna: z.string().optional(),
      })
      .optional(),
    footerTexto: z.string().optional(),
  }),
});

// 8. Colección de SOBRE NOSOTROS
const sobreNosotros = defineCollection({
  type: "data",
  schema: z.object({
    titulo: z.string().optional(),
    descripcion: z.string().optional(),
    imagen: z.string().optional(),
    stats: z
      .object({
        stat1_numero: z.string().optional(),
        stat1_label: z.string().optional(),
        stat2_numero: z.string().optional(),
        stat2_label: z.string().optional(),
        stat3_numero: z.string().optional(),
        stat3_label: z.string().optional(),
      })
      .optional(),
  }),
});

// 9. Colección de CÓMO BENEFICIARTE
const comoBeneficiarte = defineCollection({
  type: "data",
  schema: z.object({
    tituloSmall: z.string().optional(),
    titulo: z.string().optional(),
    descripcion: z.string().optional(),
    paso1_titulo: z.string().optional(),
    paso1_desc: z.string().optional(),
    paso2_titulo: z.string().optional(),
    paso2_desc: z.string().optional(),
    paso3_titulo: z.string().optional(),
    paso3_desc: z.string().optional(),
    botonTexto: z.string().optional(),
  }),
});

export const collections = {
  valores,
  hero,
  "valores-intro": valoresIntro,
  contacto,
  "nuestro-trabajo-intro": nuestroTrabajoIntro,
  proyectos,
  global,
  "sobre-nosotros": sobreNosotros,
  "como-beneficiarte": comoBeneficiarte,
};
