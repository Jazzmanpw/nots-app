import express from 'express';

const app = express();
const port = 8080;

app.get('/notes', (req, res) => {
  res.set('Access-Control-Allow-Origin', 'http://localhost:3000')
  res.send([]);
})

app.listen(port, () => {
  console.log(`server started, listening to port ${port}`)
});