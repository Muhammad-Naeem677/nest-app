import { Body, Controller, Get, Param, Post, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { createUserDto } from 'src/users/dtos/CreateUser.dto';

@Controller('users')
export class UsersController {

    @Get()
    getUsers(){
        return {username: 'Naeem', email: 'naeem@gmail.com'}
    }

    @Post()
    createUser(@Body() userData: createUserDto){
        console.log(userData)
        return {}
    }

    @Get(':id/:postId')
    getUserById(@Param('id') id: string, @Param('postId') postId: string){
        console.log(id)
        return {id, postId}
    }
}
