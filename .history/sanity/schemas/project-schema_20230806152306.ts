const project = {
    name: 'project',
    title: 'Project',
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
            title: 'Description',
            type: 'array',
            of: [{ type: "block" }]
        },
    ]
}

export default project