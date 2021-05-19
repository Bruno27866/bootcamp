import express, { request, response } from "express";
import routes from "./routes";

const app = express ();

app.get('/appointment', (request, response) => {
  return response.json ({message: 'Hello Beagles Bela & Pankeka'});
});

app.post('/appointment', (request, response) => {
  return response.json(routes);
});

app.listen (3333, () => {
    console.log('server started on port 3333');
});
