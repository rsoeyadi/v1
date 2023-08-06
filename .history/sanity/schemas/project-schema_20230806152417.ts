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
      name: 'portrait',
      title: 'Portrait',
      type: 'image',
      options: {
        hotspot: true,
      }
    }
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