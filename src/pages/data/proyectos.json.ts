import type { APIRoute } from "astro";
import { getCollection } from "astro:content";

export const GET: APIRoute = async () => {
  const allProjects = await getCollection("proyectos");

  const projectsData = allProjects.map((project) => ({
    titulo: project.data.titulo,
    descripcion: project.data.descripcion,
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
