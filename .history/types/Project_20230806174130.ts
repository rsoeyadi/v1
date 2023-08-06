import { PortableTextBlock } from "sanity";

export type Project = {
  _id: string;
  createdAt: Date;
  company: string;
  position: string;
  dates: Date[];
  image: string;
  description: PortableTextBlock[];
}