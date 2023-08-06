import { createClient, groq } from "next-sanity";
import clientConfig from "./config/client-config";

export async function getAboutInformation() {
    return createClient(clientConfig).fetch(
        groq`*[_type == "aboutInformation"]{
            _id,
            _createAt,
            content
        }`
    )
}