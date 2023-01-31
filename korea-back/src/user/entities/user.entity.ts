import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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

  @Column({ nullable: true })
  @Field((type) => Boolean)
  verified: boolean;
}
