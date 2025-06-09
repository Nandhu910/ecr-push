const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Careerpage App Deployed via ECR & ECS!');
});

app.listen(port, () => {
  console.log(`Careerpage app listening at http://localhost:${port}`);
});
