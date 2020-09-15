import express from 'express';

import storage from './storage';

const app = express();
const port = 8080;

app.get('/notes', async (req, res) => {
  res.set('Access-Control-Allow-Origin', 'http://localhost:3000')
  res.send(await storage.get('notes.json'));
})

app.listen(port, () => {
  console.log(`server started, listening to port ${port}`)
});