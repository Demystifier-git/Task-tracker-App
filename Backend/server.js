const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

const tasks = [
  { id: 1, task: "Setup Project" },
  { id: 2, task: "Write Dockerfile" },
  { id: 3, task: "Build CI/CD" }
];

app.get('/api/tasks', (req, res) => {
  res.json(tasks);
});

app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});
