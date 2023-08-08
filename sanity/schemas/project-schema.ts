const project = {
    name: 'project',
    title: 'Project',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string',
        },
        {
            name: 'link',
            title: 'Link to project',
            type: 'string',
        },
        {
            name: 'image',
            title: 'Image (should be around 835x835)',
            type: 'image',
            options: {
                hotspot: true,
            }
        },
        {
            name: 'technologies',
            title: "Technologies Used",
            type: 'array',
            of: [{ type: "string" }]
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