import { DEFAULT_SCORING_RANGES } from '@/lib/default-ranges'
import { Range } from '@/types/quiz'

export const getResultLabel = (score: number, ranges: Range[] = DEFAULT_SCORING_RANGES) => {
  if (score === 13) return 'You lucky fucker! You scored 13 exactly.'
  const ranglesToUse = ranges && ranges.length > 0 ? ranges : DEFAULT_SCORING_RANGES

  const res = ranglesToUse.find(({ minScore, maxScore }) => score >= minScore && score <= maxScore)
  return res ? res.label : 'No result'
}
