// In a file named "todos.controller.ts"
import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { UserResolver } from './user.resolver';
import { UserService } from './user.service';

interface test {
  email: string;
  password: string;
  country: string;
}

interface Ilogin {
  email: string;
  password: string;
}

@Controller('user')
export class UserController {
  constructor(private readonly userSservice: UserService) {}
  @Get()
  getALLUesr() {
    return this.userSservice.getALLUser();
  }

  @Get('/info')
  getUser(id: number) {
    return this.userSservice.getUser(id);
  }

  @Post('/sign_up')
  create(@Body() params: test) {
    return this.userSservice.createUser(params);
  }

  @Post('/login')
  login(@Body() params: Ilogin) {
    return this.userSservice.login(params);
  }
}
