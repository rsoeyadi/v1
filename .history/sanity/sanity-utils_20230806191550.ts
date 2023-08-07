import { createClient, groq } from "next-sanity";
import clientConfig from "./config/client-config";
import { ProfileImage } from "@/types/ProfileImage";

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