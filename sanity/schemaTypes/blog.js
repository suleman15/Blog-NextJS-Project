export default {
  name: 'blog',
  type: 'document',
  title: 'Blog',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title of the blog',
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug of the blog post',
      options: {
        source: 'title',
      },
    },
    {
      name: 'titleImage',
      type: 'image',
      title: 'Title Image of the blog post',
    },
    {
      name: 'titleSmallDescription',
      type: 'string',
      title: 'Title Small Description of the blog post',
    },
    {
      name: 'content',
      type: 'array',
      title: 'Content',
      of: [{type: 'block'}],
    },
  ],
}
