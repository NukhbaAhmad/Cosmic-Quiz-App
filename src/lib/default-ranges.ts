// DEFAULT RANGE
export const DEFAULT_QUIZ_RESULTS = [
  { minScore: 0, maxScore: 20, label: 'Category A.' },
  { minScore: 21, maxScore: 40, label: 'Category B.' },
  { minScore: 41, maxScore: 60, label: 'Category C.' },
  { minScore: 61, maxScore: 80, label: 'Category D.' },
  { minScore: 81, maxScore: Infinity, label: 'Category E.' },
]

export const DEFAULT_SCORING_RANGES = DEFAULT_QUIZ_RESULTS.map((r) => ({
  minScore: r.minScore,
  maxScore: r.maxScore === Infinity ? 999999 : r.maxScore,
  label: r.label,
}))
