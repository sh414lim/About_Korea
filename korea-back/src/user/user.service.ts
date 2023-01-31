import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {
  CreateAccountInput,
  CreateAccountOutput,
} from './dtos/create-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly user: Repository<User>,
  ) {}

  async createUser({
    email,
    password,
    country,
  }: CreateAccountInput): Promise<CreateAccountOutput> {
    try {
      const exists = await this.user.findOne({ where: { email } });
      const users = await this.user.save(
        this.user.create({ email, password, country }),
      );
      return {
        ok: true,
      };
    } catch (error) {
      return {
        ok: false,
        error,
      };
    }
  }

  async getUser() {
    try {
      const users = await this.user.find();
      console.log(users);
      return {
        users,
      };
    } catch (error) {
      return {
        ok: false,
        error,
      };
    }
  }
}
