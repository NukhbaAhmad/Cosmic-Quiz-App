export const isEmailValid = (email: string) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return regex.test(email)
}

export const validateNotes = (notes: string): boolean => {
  return notes.length >= 3 && notes.length <= 500
}

export const validateQuizSubmission = (email: string, notes: string) => {
  if (!email) {
    return 'Please enter email address to save scores.'
  }
  if (email && !isEmailValid(email)) {
    return 'Please enter a valid cosmic email address.'
  }
  if (notes && !validateNotes(notes)) {
    return 'Notes should be between 3 and 500 characters.'
  }
  return null
}
