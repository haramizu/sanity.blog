export const LinkBuilder = (
  slug: string | undefined,
  publishDate?: string | null
) => {
    const formattedDate = publishDate ? publishDate.substring(0, 10).replace(/-/g, "/") : "";
      return `/${formattedDate}/${slug}/`;
    };