import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType('Lesson')
export class LessonType {
  @Field(_type => ID)
  id: string;

  @Field()
  name: string;

  @Field()
  startDate: string; // ISO string

  @Field()
  endDate: string;
}
