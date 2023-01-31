// In a file named "todos.controller.ts"
import { Controller, Get, Post, Body } from '@nestjs/common';
import { UserResolver } from './user.resolver';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userSservice: UserService) {}
  @Get()
  getUesr() {
    return this.userSservice.getUser();
  }

  @Post()
  create(@Body() createTodoDto) {
    return { id: 3, title: createTodoDto.title };
  }
}
