const job = {
    name: 'job',
    title: 'Job',
    type: 'document',
    fields: [
        {
            name: 'company',
            title: 'Company',
            type: 'string',
        },
        {
            name: 'position',
            title: 'Position',
            type: 'string',
        },
        {
            name: 'dates',
            title: 'Dates',
            type: 'array',
            of: [{ type: "Date" }]
        },
        {
            name: 'description',
            title: 'Content',
            type: 'array',
            of: [{ type: "block" }]
        },
    ]
}

export default job