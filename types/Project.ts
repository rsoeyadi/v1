import { PortableTextBlock } from "sanity";

export type Project = {
  _id: string;
  createdAt: Date;
  name: string;
  link: string;
  image: string;
  technologies: string[];
  description: PortableTextBlock[];
}