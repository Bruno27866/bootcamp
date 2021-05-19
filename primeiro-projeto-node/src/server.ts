import express, { request, response } from "express";
import appointmentsRouter from "./routes/appointments.routes";

const app = express ();

app.get('/', (request, response) => {
  return response.json ({message: 'Hello Beagles Bela & Pankeka'});
});

app.listen (3333, () => {
    console.log('server started on port 3333');
});
