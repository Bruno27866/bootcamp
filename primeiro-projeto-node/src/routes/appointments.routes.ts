import {request, response, Router} from 'express';

const appointmentsRouter = Router ();

appointmentsRouter.post('/', (request, response) => {
  return response.json({message: 'Hello world'});
});

export default appointmentsRouter;
