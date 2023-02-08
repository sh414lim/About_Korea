import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { CoreEntity } from 'src/common/entities/core.entity';
import { User } from 'src/user/entities/user.entity';
import { Column, Entity, JoinColumn, OneToOne } from 'typeorm';

@InputType('authInput', { isAbstract: true })
@ObjectType()
@Entity()
export class Auth extends CoreEntity {
  @Column()
  @Field((type) => String)
  refreshToken: string;

  @OneToOne((type) => User, { onDelete: 'CASCADE' })
  @JoinColumn()
  user: User;
}
