import { Controller, Get } from '@nestjs/common';
import { CategoryService } from './category.service';
import { category } from './entity/category.entity';

@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Get()
  async getCategoryList(): Promise<category[]> {
    return this.categoryService.getAllCategories();
  }
}
