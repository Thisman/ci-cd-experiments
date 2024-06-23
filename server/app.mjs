import express from 'express';
import { log } from './console.mjs';

const app = express();
const port = 80;

app.use('/', express.static('./client'));

app.listen(port, () => {
  console.info(log(`Example app listening on port ${port}`));
});
