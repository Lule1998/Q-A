class MockOpenAIService {
    constructor() {
     
      this.responses = {
      
        "zdravo": "Pozdrav! Kako vam mogu pomoci?",
        "cao": "Zdravo! Kako vam mogu pomoci?",
               
        "javascript": "JavaScript je programski jezik koji ovlašćuje web. Omogućuje vam dodavanje interaktivnih funkcija na web stranice.",
        "angular": "Angular je platforma i okvir za izgradnju klijentskih aplikacija na jednoj stranici koristeći HTML i TypeScript.",
       
        
        "kako uraditi": "Ups,morate pojasniti pitanje..",
        "zasto": "Glavni razlog za to je ..",
        
       
        "hvala": "Nema na čemu! Javite mi treba li vam još nešto.",
        "dovidjenja": "Zbogom! Prijatan dan zelim!",
        "pomoc": "Ovdje sam da pomognem! Šta biste željeli znati?"
      };
    }
  
    async generateResponse(question) {
      
      await new Promise(resolve => setTimeout(resolve, 500));
  
      
      const lowercaseQuestion = question.toLowerCase();
  
      
      for (const [keyword, response] of Object.entries(this.responses)) {
        if (lowercaseQuestion.includes(keyword)) {
          return response;
        }
      }
  
       
      return "I understand your question. Let me provide a general response since we're in development mode.";
    }
  }
  
  module.exports = new MockOpenAIService();