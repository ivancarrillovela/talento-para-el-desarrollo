import type { APIRoute } from "astro";
import { getCollection } from "astro:content";

export const GET: APIRoute = async () => {
  const allProjects = await getCollection("proyectos");

  const projectsData = allProjects.map((project) => ({
    titulo: project.data.titulo,
    titulo_en: project.data.titulo_en,
    titulo_fr: project.data.titulo_fr,
    descripcion: project.data.descripcion,
    descripcion_en: project.data.descripcion_en,
    descripcion_fr: project.data.descripcion_fr,
    imagen: project.data.imagen,
    fecha: project.data.fecha.toISOString(),
    pdf: project.data.pdf,
    id: project.id,
  }));

  // Sort initially by date desc
  projectsData.sort(
    (a, b) => new Date(b.fecha).getTime() - new Date(a.fecha).getTime(),
  );

  return new Response(JSON.stringify(projectsData), {
    headers: {
      "Content-Type": "application/json",
    },
  });
};
