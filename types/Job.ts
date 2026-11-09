import { PortableTextBlock } from "sanity";

export type Job = {
  _id: string;
  createdAt: Date;
  company: string;
  position: string;
  dates: string[];
  images: string[];
  description: PortableTextBlock[];
  technologies: string[];
};
