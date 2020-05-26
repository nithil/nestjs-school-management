import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { v4 as uuid } from 'uuid';

import { Lesson } from './lesson.entity';

@Injectable()
export class LessonService {
  constructor(@InjectRepository(Lesson) private lessonRepository: Repository<Lesson>) {}

  async create(name, startDate, endDate): Promise<Lesson> {
    const lesson = this.lessonRepository.create({ id: uuid(), name, startDate, endDate });

    return await this.lessonRepository.save(lesson);
  }
}