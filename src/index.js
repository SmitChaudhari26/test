const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'ok', message: 'Task Manager API is running' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
