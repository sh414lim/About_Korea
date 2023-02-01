import { Field, InputType, ObjectType } from '@nestjs/graphql';
import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';
import * as bcrypt from 'bcrypt';
import { InternalServerErrorException } from '@nestjs/common';

@InputType('UserInputType', { isAbstract: true }) // Inputtype 이 스키마에 포함되지 않길 원한다
@ObjectType()
@Entity()
export class User {
  @PrimaryGeneratedColumn()
  @Field((type) => Number)
  id: number;

  @Column({ nullable: true })
  @Field((type) => String)
  email: string;

  @Column({ nullable: true })
  @Field((type) => String)
  password: string;

  @Column({ nullable: true })
  @Field((type) => String)
  country: string;

  @Column({ nullable: true, default: false })
  @Field((type) => Boolean)
  verified: boolean;

  @BeforeInsert() // db에 저장된 로직
  @BeforeUpdate()
  async hashPassword(): Promise<void> {
    if (this.password) {
      try {
        this.password = await bcrypt.hash(this.password, 10);
      } catch (e) {
        console.log(e);
        throw new InternalServerErrorException();
      }
    }
  }

  async checkPassword(password: string): Promise<Boolean> {
    try {
      const ok = await bcrypt.compare(password, this.password);
      return ok;
    } catch (e) {
      console.log(e);
    }
  }
}
