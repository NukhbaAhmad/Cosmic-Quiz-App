import type { CollectionConfig } from 'payload'

export const Quiz: CollectionConfig = {
    slug: "quiz",
    admin: {
    useAsTitle: 'quizTitle',
  },
  access: {
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
    name: "questions",
    type: "array",
    minRows:1,
    required:true,
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
    ]
    }
  ]
}