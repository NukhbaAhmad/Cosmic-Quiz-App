import 'dotenv/config'
import { getPayload } from 'payload'
import config from '@config/payload.config'
import { QUIZ_QUESTIONS, SCORING_RANGES } from "@constants/questions"

async function seed() {
  const payload = await getPayload({ config })
  
  console.log("Seeding the Quiz (Title and all Questions)...")

  try {
    await payload.create({
      collection: 'quiz',
      data: {
        quizTitle: 'What Cosmic Animal Are You?',
        quizDescription: 'Answer these questions to find your universal spirit.',
        questions: QUIZ_QUESTIONS, 
      },
    })
    console.log(`✅ Successfully added the Quiz and all ${QUIZ_QUESTIONS.length} questions!`)
  } catch (error) {
    console.error(`Error adding quiz:`, error)
  }

  console.log('Seeding ranges...')

  for (const range of SCORING_RANGES) {
    try {
      await payload.create({
        collection: 'quiz-ranges',
        data: range,
      })
      console.log(`✅ Added range: ${range.minScore}-${range.maxScore}`)
    } catch (error) {
      console.log(`Oops failed to add ranges:`, error)
    }
  }

  console.log('Seeding Completed!')
  process.exit(0)
}

seed().catch(err => {
  console.error('Seed failed:', err)
  process.exit(1)
})