import { createClient, groq } from "next-sanity";
import clientConfig from "./config/client-config";
import { ProfileImage } from "@/types/ProfileImage";
import { Job } from "@/types/Job";
import { Project } from "@/types/Project";

const client = createClient({ ...clientConfig, useCdn: false });
const fetchOptions = { next: { revalidate: 60 } };

export async function getAboutInformation() {
    return client.fetch(
        groq`*[_type == "aboutInformation"][0] {
            _id,
            _createAt,
            content   
        }`,
        {},
        fetchOptions
    )
}

export async function getProfileImage(): Promise<ProfileImage> {
    return client.fetch(
        groq`*[_type == "profileImage"][0]{
            _id, 
            _createAt,
            name,
            "image": image.asset->url,
        }`,
        {},
        fetchOptions
    )
}

export async function getJobs(): Promise<Job[]> {
    return client.fetch(
        groq`*[_type == "job"] | order(dates[0] desc) {
            _id, 
            _createAt,
            company,
            position,    
            dates,            
            "images": image[].asset->url, 
            description,
            "technologies": coalesce(technologies, []),
        }`,
        {},
        fetchOptions
    )
}

