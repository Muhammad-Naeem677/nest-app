import { Body, Controller, Get, Param, Query, Post, Req, Res, UsePipes, ValidationPipe } from '@nestjs/common';
import { Request, Response } from 'express';
import { createUserDto } from 'src/users/dtos/CreateUser.dto';

@Controller('users')
export class UsersController {

    @Get()
    getUsers(@Query('sortOrder') sortOrder: string){
        console.log(sortOrder);
        return {username: 'Naeem', email: 'naeem@gmail.com'}
    }

    @Post()
    @UsePipes(new ValidationPipe())
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
