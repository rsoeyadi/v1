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
        }
    ]
}

export default job