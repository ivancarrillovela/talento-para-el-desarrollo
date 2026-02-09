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

// 2. Colección de HERO
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

export const collections = {
  valores,
  hero,
  "valores-intro": valoresIntro,
  contacto,
  "nuestro-trabajo-intro": nuestroTrabajoIntro,
  proyectos,
};
