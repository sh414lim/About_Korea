import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { CoreEntity } from 'src/common/entities/core.entity';
import { Column, Entity } from 'typeorm';
import {
  IsArray,
  IsBoolean,
  IsOptional,
  IsString,
  Length,
} from 'class-validator';

@InputType('SubwayInputType', { isAbstract: true })
@ObjectType()
@Entity()
export class Subway extends CoreEntity {
  @Field((type) => String)
  @Column()
  @IsString()
  name: string;
}
