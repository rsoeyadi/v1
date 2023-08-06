import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
// import schemas from './sanity/schemas';

const config = defineConfig({
    projectId: 'l1yk2kk2',
    dataset: 'production',
    title: "Ryan Soeyadi | Software Engineer",
    apiVersion: "2023-08-06",
    basePath: "/admin",
    plugins: [deskTool()],
    schema: { types: schemas },
})