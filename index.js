import express from 'express';
import { root_route } from './routes/root_route.js';

const app = express();
const port = 3000;
app.listen(port, () =>
  console.log(`server started on http://localhost:${port}`)
);

app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/', root_route);
