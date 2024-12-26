// export default {
//     name: 'homepage',
//     title: 'Homepage',
//     type: 'document',
//     fields: [
//       {
//         name: 'heading',
//         title: 'Heading',
//         type: 'string',
        
//       },
//       {
//         name: 'paragraph',
//         title: 'Paragraph',
//         type: 'text',
        
//       },
//       {
//         name: 'buttonText',
//         title: 'Button Text',
//         type: 'string',
        
//       },
//       {
//         name: 'image',
//         title: 'Image',
//         type: 'image',
//         description: 'An image to display on the homepage.',
        
//       },
//     ],
//   };
  




export default {
    name: 'blog',
    title: 'Blog Post',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
      },
      {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
          source: 'title',
          maxLength: 96,
        },
      },
      {
        name: 'image',
        title: 'Image',
        type: 'image',
        options: {
          hotspot: true,
        },
      },
      {
        name: 'body',
        title: 'Body',
        type: 'text',
      },
    ],
  };
  



  