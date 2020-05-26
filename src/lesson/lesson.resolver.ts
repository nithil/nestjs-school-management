import { Resolver, Query, Mutation } from '@nestjs/graphql';
import { LessonType } from './lesson.type';

@Resolver(_of => LessonType)
export class LessonResolver {
  @Query(_returns => LessonType)
  lesson() {
    return {
      id: '23456ye3e',
      name: 'Physics Class',
      startDate: new Date().toISOString(),
      endDate: new Date().toISOString(),
    };
  }

  @Mutation(_returns => LessonType)
  createLesson() {}
}
