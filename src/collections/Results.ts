import { CollectionConfig } from 'payload'
import { encrypt, decrypt } from '@/utils/crypto'

export const QuizResults: CollectionConfig = {
  slug: 'quiz-results',
  access: {
    create: () => true, 
    read: ({ req: { user } }) => Boolean(user), 
  },
  admin: {
    useAsTitle: 'email',
    defaultColumns: ['email', 'score', 'label', 'createdAt'],
  },
  fields: [
    {
      name: 'email',
      type: 'email',
    },
    {
      name: 'score',
      type: 'number',
      required: true,
    },
    {
      name: 'label',
      type: 'text',
      required: true,
    },
    {
      name: 'notes',
      type: 'textarea',
      hooks: {
        beforeChange: [({ value }) => (value ? encrypt(value) : value)],
        afterRead: [({ value }) => (value ? decrypt(value) : value)],
      },
    }
  ],
}