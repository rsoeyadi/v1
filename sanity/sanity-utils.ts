import { createClient, groq } from "next-sanity";
import clientConfig from "./config/client-config";
import { ProfileImage } from "@/types/ProfileImage";
import { Job } from "@/types/Job";
import { Project } from "@/types/Project";

export async function getAboutInformation() {
    return createClient(clientConfig).fetch(
        groq`*[_type == "aboutInformation"][0] {
            _id,
            _createAt,
            content   
        }`
    )
}

export async function getProfileImage(): Promise<ProfileImage> {
    return createClient(clientConfig).fetch(
        groq`*[_type == "profileImage"][0]{
            _id, 
            _createAt,
            name,
            "image": image.asset->url,
        }`
    )
}

export async function getJobs(): Promise<Job[]> {
    return createClient(clientConfig).fetch(
        groq`*[_type == "job"] {
            _id, 
            _createAt,
            company,
            position,    
            dates,            
            "images": image[].asset->url, 
            description,
            technologies,
        }`
    )
}

export async function getProjects(): Promise<Project[]> {
    return createClient(clientConfig).fetch(
        groq`*[_type == "project"]{
            _id,
            _createAt,
            name,
            link,
            "image": image.asset->url,
            description,
            technologies
        }`
    )
}