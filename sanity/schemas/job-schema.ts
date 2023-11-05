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
            name: 'image',
            title: 'Logo',
            type: 'array',
            of: [{ type: "image" }],
            options: {
                hotspot: true,
            }
            
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
        {
            name: 'technologies',
            title: "Technologies Used",
            type: 'array',
            of: [{ type: "string" }]
        }
    ]
}

export default job