const express = require('express');
const cors = require('cors');
const app = express();

//app.use(cors());
const corsOptions = {
  origin: 'http://localhost:5174', // Replace with your frontend's URL
};

app.use(cors(corsOptions));
// Replace this with your list of random names
const randomNames = ['Alice', 'Bob', 'Charlie', 'David', 'Eve'];

app.get('/api/random-name', (req, res) => {
  const randomIndex = Math.floor(Math.random() * randomNames.length);
  const randomName = randomNames[randomIndex];
  res.json({ name: randomName });
});

const PORT = process.env.PORT || 5004;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
