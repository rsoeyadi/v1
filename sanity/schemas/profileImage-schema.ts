const profileImage = {
    name: 'profileImage',
    title: 'Profile Image',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string',
        },
        {
            name: 'image',
            title: 'Image (should be a perfect square)',
            type: 'image',
            options: {
                hotspot: true,
            }
        },
    ]
}

export default profileImage