import type { CollectionConfig } from 'payload'

export const QuizRanges: CollectionConfig = {
  slug: 'quiz-ranges',
  admin: {
    useAsTitle: 'label',
    defaultColumns: ['label', 'minScore', 'maxScore', 'createdAt','updatedAt'],
    },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'minScore',
      type: 'number',
      required: true,
    },
    {
      name: 'maxScore',
      type: 'number',
      required: true,
    },
    {
      name: 'label',
      type: 'text',
      required: true,
      admin: {
        placeholder: '🌙 Mooncat — Mysterious, calm, and observant.',
      },
    },
  ],
}