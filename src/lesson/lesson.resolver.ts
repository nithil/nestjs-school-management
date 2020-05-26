import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';

import { LessonType } from './lesson.type';
import { LessonService } from './lesson.service';
import { Lesson } from './lesson.entity';

@Resolver(_of => LessonType)
export class LessonResolver {
  constructor(private lessonService: LessonService) {}

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
  createLesson(
    @Args('name') name: string,
    @Args('startDate') startDate: string,
    @Args('endDate') endDate: string,
  ): Promise<Lesson> {
    return this.lessonService.create(name, startDate, endDate);
  }
}
