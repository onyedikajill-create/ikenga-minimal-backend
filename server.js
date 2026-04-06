const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'ok', service: 'ikenga-minimal', timestamp: new Date().toISOString() });
});

// Generate endpoint
app.post('/api/generate', async (req, res) => {
  const { prompt, platform } = req.body;
  
  res.json({
    success: true,
    content: `Generated content for ${platform || 'general'}: ${prompt || 'No prompt provided'}`,
    platform: platform || 'general'
  });
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`IKENGA Minimal Backend running on port ${PORT}`);
});
