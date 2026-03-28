import 'dotenv/config'
import { getPayload } from 'payload'
import config from '@config/payload.config'
import { QUIZ_QUESTIONS, SCORING_RANGES} from "@constants/questions"

async function seed() {
    const payload = await getPayload({ config })
    console.log("Seeding Questions...")
  for (const q of QUIZ_QUESTIONS) {
    try {
      await payload.create({
        collection: 'questions',
        data: q,
      })
      console.log(`✅ Added: ${q.question}`)
    } catch (error) {
      console.error(`Error adding question:`, error)
    }
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
      console.log(`Oops failed to add ranges:`,error)
    }
  }


  console.log('Seeding Completed.!')
  process.exit(0)
}

seed().catch(err => {
  console.error('Seed failed:', err)
  process.exit(1)
})