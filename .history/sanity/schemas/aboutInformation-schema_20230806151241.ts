const aboutInformation = {
    name: 'about',
    title: 'About',
    type: 'document',
    fields: [
        {
            name: 'content',
            title: 'Content',
            type: 'array',
            of: [{ type: "block" }]
        },
    ]
}

export default aboutInformation