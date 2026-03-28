import { DEFAULT_SCORING_RANGES } from '@/lib/default-ranges'
import { Range } from '@/types/quiz'

export const getResultLabel = (
  score: number,
  ranges: Range[] | typeof DEFAULT_SCORING_RANGES = DEFAULT_SCORING_RANGES,
) => {
  if (score === 13) return 'You lucky fucker! You scored 13 exactly.'
  const res = ranges.find(({ minScore, maxScore }) => score >= minScore && score <= maxScore)
  return res ? res.label : 'No result'
}
