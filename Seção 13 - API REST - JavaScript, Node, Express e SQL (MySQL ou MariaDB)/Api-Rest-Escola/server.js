import app from './app';

const port = 3001;

app.listen(port, () => {
  console.log('O pai está on!');
  console.log(`http://localhost:${port}`);
});
