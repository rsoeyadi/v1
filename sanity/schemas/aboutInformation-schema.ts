const aboutInformation = {
    name: 'aboutInformation',
    title: 'About Information',
    type: 'document',
    fields: [
        {
            name: "content",
            title: "Content",
            type: "array",
            of: [{ type: "block" }]
        },
    ]
}

export default aboutInformation