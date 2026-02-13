export const formatDate = (date: Date | string) => {
  const d = new Date(date);
  return new Intl.DateTimeFormat("es-ES", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(d);
};
