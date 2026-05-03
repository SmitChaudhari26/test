const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Teammate added this array for users feature
let users = [];


app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'ok', message: 'Task Manager API is running' });
});

// Only start the server if this file is run directly (not imported in a test)
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}

module.exports = app;
