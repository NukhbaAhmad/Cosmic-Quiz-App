import type { CollectionConfig } from 'payload'

export const Quiz: CollectionConfig = {
  slug: 'quiz',
  admin: {
    useAsTitle: 'quizTitle',
    defaultColumns: ['quizTitle', 'createdAt', 'updatedAt'],
  },
  access: {
    create: async ({ req }) => {
      const existingQuizzes = await req.payload.find({
        collection: 'quiz',
        limit: 1,
      })
      return existingQuizzes.totalDocs === 0
    },
    read: () => true,
  },
  fields: [
    {
      name: 'quizTitle',
      type: 'text',
      required: true,
      defaultValue: 'What Cosmic Animal Are You?',
    },
    {
      name: 'quizDescription',
      type: 'textarea',
      defaultValue: 'Answer these questions.',
    },
    {
      name: 'questions',
      type: 'array',
      minRows: 1,
      required: true,
      fields: [
        {
          name: 'question',
          type: 'text',
          required: true,
        },
        {
          name: 'options',
          type: 'array',
          required: true,
          minRows: 2,
          maxRows: 4,
          fields: [
            {
              name: 'label',
              type: 'text',
              required: true,
            },
            {
              name: 'score',
              type: 'number',
              required: true,
            },
          ],
        },
      ],
    },
  ],
}
