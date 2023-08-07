import { createClient, groq } from "next-sanity";
import clientConfig from "./config/client-config";

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
        groq`*[_type == "link"][0]{
            _id,
            _createAt,
            content
        }`
    )
}