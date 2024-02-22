import { category } from './entity/category.entity';
import { Injectable } from '@nestjs/common';
import { CategoryRepository } from './repository/category.repository';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(CategoryRepository)
    private readonly categoryRepository: CategoryRepository,
  ) {}

  async getAllCategories(): Promise<category[]> {
    return await this.categoryRepository.getAllCategories();
  }
}
