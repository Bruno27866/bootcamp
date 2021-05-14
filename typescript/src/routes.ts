import { Request, Response } from 'express';
import createUser from './services/CreateUser';

export function helloWorld(request: Request, response: Response){
    const user = createUser ({
        email:'',
        password: '',
        tech: [
            '',
            '',
            '',
        ],
    });
    
    return response.json({message: 'Hello World'});
}