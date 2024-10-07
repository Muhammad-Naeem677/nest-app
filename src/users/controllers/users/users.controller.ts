import { Controller, Get } from '@nestjs/common';

@Controller('users')
export class UsersController {

    @Get()
    getUsers(){
        return {username: 'Naeem', email: 'naeem@gmail.com'}
    }
}
