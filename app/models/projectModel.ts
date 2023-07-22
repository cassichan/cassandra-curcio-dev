import { StaticImport } from "next/dist/shared/lib/get-img-props";

export interface ProjectModel {
  id: number,
  title: string;
  subtitle: string;
  description: string;
  image_url: string | StaticImport | undefined;
  live_url: string;
  github_url: string;
}
