import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { JwtService } from 'src/jwt/jwt.service';
import { Repository } from 'typeorm';
import {
  CreateAccountInput,
  CreateAccountOutput,
} from './dtos/create-user.dto';
import { LoginInput, LoginOutPut } from './dtos/login.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly user: Repository<User>,
    private readonly jwtService: JwtService,
  ) {}

  async createUser({
    email,
    password,
    country,
  }: CreateAccountInput): Promise<CreateAccountOutput> {
    try {
      const exists = await this.user.findOne({ where: { email } });

      if (exists) {
        console.log('');
        return {
          ok: false,
          error: 'An account currently subscribed by email exists',
        };
      }

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

  async login({ email, password }: LoginInput): Promise<LoginOutPut> {
    try {
      const user = await this.user.findOne({
        where: { email },
        select: ['id', 'password'],
      });
      if (!user) {
        return {
          ok: false,
          error: 'Member information not found',
        };
      }
      console.log(password);
      const passwordCheck = await user.checkPassword(password);
      console.log(passwordCheck);
      if (!passwordCheck) {
        return {
          ok: false,
          error: "The password doesn't match. Please check it again",
        };
      }
      const token = this.jwtService.sign(user.id);
      return {
        ok: true,
        token,
      };
    } catch (error) {
      console.error(error);
      return {
        ok: false,
        error,
      };
    }
  }

  async findById(id: number): Promise<Boolean> {
    try {
      const user = await this.user.findOne({ where: { id } });
      if (user) {
        return false;
      }
    } catch (e) {
      return false;
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
