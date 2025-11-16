import { createClient } from "next-sanity";

export const client = createClient({
  projectId: process.env.SANITY_STUDIO_PROJECT_ID || "your_project_id",
  dataset: process.env.SANITY_STUDIO_DATASET || "production",
  apiVersion: process.env.SANITY_API_VERSION || "2024-01-01",
  useCdn: false,
});