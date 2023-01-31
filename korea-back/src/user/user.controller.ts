// In a file named "todos.controller.ts"
import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { UserResolver } from './user.resolver';
import { UserService } from './user.service';

interface test {
  email: string;
  password: string;
  country: string;
}

@Controller('user')
export class UserController {
  constructor(private readonly userSservice: UserService) {}
  @Get()
  getUesr() {
    return this.userSservice.getUser();
  }

  @Post()
  create(@Body() params: test) {
    return this.userSservice.createUser(params);
  }
}
