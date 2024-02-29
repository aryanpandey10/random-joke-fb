import express from "express";
// import cors  from 'cors';

const app = express();
// app.use(cors())

app.get('/', (req, res) => {
  res.send('Server is ready');
});

app.get('/jaivik', (req, res) => {
  res.send('<h1>Hello Jaivik</h1>');
});

app.get('/api/jokes', (req, res) => {
  const jokes = [
    {
      "id": 1,
      "title": "The Mathematician's Joke",
      "content": "Why was the equal sign so humble? Because he knew he wasn't less than or greater than anyone else."
    },
    {
      "id": 2,
      "title": "The Programming Joke",
      "content": "Why do programmers prefer dark mode? Because light attracts bugs."
    },
    {
      "id": 3,
      "title": "The Chemistry Joke",
      "content": "Why did the chemist dissolve in water? Because he had no reaction left."
    },
    {
      "id": 4,
      "title": "The Physics Joke",
      "content": "Why can't you trust an atom? Because they make up everything."
    },
    {
      "id": 5,
      "title": "The Coffee Joke",
      "content": "Why did the coffee file a police report? It got mugged."
    }
  ];
  res.send(jokes);
});

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`Server at http://localhost:${port}`);
});