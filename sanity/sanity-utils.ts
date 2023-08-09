import { createClient, groq } from "next-sanity";
import clientConfig from "./config/client-config";
import { ProfileImage } from "@/types/ProfileImage";
import { Job } from "@/types/Job";
import { Project } from "@/types/Project";
import { SocialImage } from "@/types/SocialImage";

export async function getAboutInformation() {
    return createClient(clientConfig).fetch(
        groq`*[_type == "aboutInformation"][0]{
            _id,
            _createAt,
            content
        }`
    )
}

export async function getSocialMediaIcons() {
    return createClient(clientConfig).fetch(
        groq`*[_type == "link"]{
            _id,
            _createAt,
            link
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

export async function getSocialImage(): Promise<SocialImage> {
    return createClient(clientConfig).fetch(
        groq`*[_type == "socialImage"][0]{
            _id,
            _createAt,
            "image": image.asset->url,
        }`
    )
}

export async function getJobs(): Promise<Job[]> {
    return createClient(clientConfig).fetch(
        groq`*[_type == "job"]{
            _id,
            _createAt,
            company,
            "image": image.asset->url,
            position,
            dates,
            description,
            technologies
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