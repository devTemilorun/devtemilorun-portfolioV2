import type { StaticImageData } from 'next/image';

export interface Project {
  id?: string;
  slug: string;
  title: string;
  description?: string;
  shortDescription?: string;
  image?: string | StaticImageData;
  techStack?: string[];
  githubUrl?: string;
  backendGithubUrl?: string;
  demoUrl?: string;
  liveUrl?: string;
  isCompleted?: boolean;
  fullDescription?: string;
  screenshots?: Array<string | StaticImageData>;
  features?: string[];
  challenges?: string[];
  results?: string[];

  // Legacy fields that may still be used elsewhere
  status?: string;
  role?: string;
  timeline?: string;
  overview?: string;
  tagline?: string;
  tags?: string[];
  imageUrl?: string;
}