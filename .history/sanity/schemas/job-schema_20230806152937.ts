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
            of: [{ type: "date" }]
        },
        {
            name: 'description',
            title: 'Description',
            type: 'array',
            of: [{ type: "block" }]
        },
    ]
}

export default job