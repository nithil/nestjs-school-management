import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';

import { LessonType } from './lesson.type';
import { LessonService } from './lesson.service';
import { Lesson } from './lesson.entity';
import { CreateLessonInput } from './lesson.input';

@Resolver(_of => LessonType)
export class LessonResolver {
  constructor(private lessonService: LessonService) {}

  @Query(_returns => LessonType)
  lesson(@Args('id') id: string) {
    return this.lessonService.getById(id);
  }

  @Mutation(_returns => LessonType)
  createLesson(@Args('createLessonInput') createLessonInput: CreateLessonInput): Promise<Lesson> {
    return this.lessonService.create(createLessonInput);
  }
}
