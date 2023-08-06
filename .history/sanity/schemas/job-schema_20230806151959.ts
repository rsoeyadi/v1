const aboutInformation = {
    name: 'job',
    title: 'Job',
    type: 'document',
    fields: [
        {
            name: 'company',
            title: 'Company',
            type: 'array',
            of: [{ type: "block" }]
        },
    ]
}

export default aboutInformation