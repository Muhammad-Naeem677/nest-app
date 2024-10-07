import { Controller, Get, Post, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';

@Controller('users')
export class UsersController {

    @Get()
    getUsers(){
        return {username: 'Naeem', email: 'naeem@gmail.com'}
    }

    @Post()
    createUser(@Req() request:Request, @Res() response:Response){
        console.log(request.body)
        response.send('Created')
    }
}
