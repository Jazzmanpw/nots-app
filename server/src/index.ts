import express from 'express';

import storage from './storage';

const app = express();
const port = 8080;

app
  .use(function corsHeaders(req, res, next) {
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, PUT');
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
    next();
  })
  .use(express.json({ type: 'application/json' }))

  .get<'get', string>('/notes', async (req, res) => {
    res.send(await storage.get('notes.json'));
  })
  .put<'put', void, string[]>('/notes', async (req, res) => {
    await storage.set('notes.json', JSON.stringify(req.body));
    res.send();
  })

  .listen(port, () => {
    console.log(`server started, listening to port ${port}`)
  });