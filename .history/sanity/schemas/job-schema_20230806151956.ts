const aboutInformation = {
    name: 'job',
    title: 'Job',
    type: 'document',
    fields: [
        {
            name: 'company',
            title: 'Content',
            type: 'array',
            of: [{ type: "block" }]
        },
    ]
}

export default aboutInformation