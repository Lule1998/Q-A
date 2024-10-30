const express = require('express');
const cors = require('cors');
const mockOpenAI = require('./services/mockOpenAI');
require('dotenv').config();

const app = express();


app.use(cors());
app.use(express.json());


app.get('/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date() });
});


app.post('/api/ask', async (req, res) => {
  try {
    const { question } = req.body;

    
    if (!question || question.trim().length === 0) {
      return res.status(400).json({
        success: false,
        error: 'Question is required'
      });
    }

   
    const answer = await mockOpenAI.generateResponse(question);
 
   
    console.log(`Q: ${question}`);
    console.log(`A: ${answer}`);

    
    res.json({
      success: true,
      answer,
      timestamp: new Date()
    });

  } catch (error) {
    console.error('Error processing question:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to process question',
      details: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
});


app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    error: 'Internal server error'
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});