import { GET_QUIZ_QUERY, GET_USER_RESULTS_QUERY,SAVE_RESULT_MUTATION } from "./quiz-queries";

const GQL_URL = `${process.env.NEXT_PUBLIC_PAYLOAD_URL}/api/graphql`;

export const QuizService = {
  async fetchQuiz() {
    const res = await fetch(GQL_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query: GET_QUIZ_QUERY }),
    });
    const { data } = await res.json();
    return data?.Quizzes?.docs[0];
  },

    async submitResult(resultData: { email?: string; score: number; label: string; notes?: string }) {
    const res = await fetch(GQL_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ 
        query: SAVE_RESULT_MUTATION, 
        variables: resultData 
      }),
    });
    const { data, errors } = await res.json();
    
    if (errors) {
      throw new Error(errors[0].message);
    }
    return data?.createQuizResult; 
    },
    
  async fetchUserHistory(email: string) {
    const res = await fetch(GQL_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ 
        query: GET_USER_RESULTS_QUERY, 
        variables: { email } 
      }),
    });
    const { data } = await res.json();
    return data?.QuizResults?.docs;
  }
};