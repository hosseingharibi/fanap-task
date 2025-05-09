export function formatDate(isoDateString: string): string {
  const date = new Date(isoDateString);
  
  const options = {
    year: "numeric",
    month: "long",
    day: "2-digit",
  };

  return date.toLocaleDateString("en-US", options);
}