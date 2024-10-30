export interface QuestionRequest {
    question: string;
  }
  
  export interface AnswerResponse {
    success: boolean;
    answer?: string;
    error?: string;
    details?: string;
    timestamp: Date;
  }