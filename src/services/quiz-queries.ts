export const GET_QUIZ_QUERY = `
  query {
    Quizzes {
      docs {
        quizTitle
        questions {
          question
          options { label score }
        }
      }
    }
  }`;

export const GET_USER_RESULTS_QUERY = `
  query($email: EmailAddress) {
    QuizResults(where: { email: { equals: $email } }) {
      docs {
        id
        score
        label
        notes
        createdAt
      }
    }
  }
`;
export const SAVE_RESULT_MUTATION = `
  mutation($email: String, $score: Float!, $label: String!, $notes: String) {
    createQuizResult(data: { email: $email, score: $score, label: $label, notes: $notes }) {
      id
    }
  }`;