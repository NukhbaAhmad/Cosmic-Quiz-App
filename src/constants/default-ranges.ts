// DEFAULT RANGE
export const DEFAULT_QUIZ_RESULTS = [
  { minScore: 0, maxScore: 20, label: "🌙 Mooncat — Mysterious, calm, and observant." },
  { minScore: 21, maxScore: 40, label: "🦊 Solar Fox — Clever, curious, and adaptable." },
  { minScore: 41, maxScore: 60, label: "🐻 Cosmic Bear — Grounded, strong, and thoughtful." },
  { minScore: 61, maxScore: 80, label: "🐉 Galactic Dragon — Wild, bold, and unstoppable." },
  { minScore: 81, maxScore: Infinity, label: "✨ Cosmic Deity — Beyond all comprehension." },
]

export const DEFAULT_SCORING_RANGES = DEFAULT_QUIZ_RESULTS.map(r => ({
  minScore: r.minScore,  
  maxScore: r.maxScore === Infinity ? 999999 : r.maxScore,  // For DB storage
  label: r.label,
}))