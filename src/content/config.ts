import { defineCollection, z } from 'astro:content';

// 1. Colección de PILARES (Tarjetas)
const pilares = defineCollection({
  type: 'data', 
  schema: z.object({
    titulo: z.string(),
    descripcion: z.string(),
    icono: z.string(),
  }),
});

// 2. Colección de HERO (Actualizada con los campos nuevos)
const hero = defineCollection({
  type: 'data',
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

// 3. Colección de PILARES INTRO (Nueva)
const pilaresIntro = defineCollection({
  type: 'data',
  schema: z.object({
    etiqueta: z.string().optional(),
    titulo: z.string().optional(),
    descripcion: z.string().optional(),
  }),
});

// 4. Colección de CONTACTO (Nueva)
const contacto = defineCollection({
  type: 'data',
  schema: z.object({
    etiqueta: z.string().optional(),
    titulo: z.string().optional(),
    descripcion: z.string().optional(),
    textoBoton: z.string().optional(),
  }),
});

export const collections = {
  pilares,
  hero,
  'pilares-intro': pilaresIntro,
  contacto,
};