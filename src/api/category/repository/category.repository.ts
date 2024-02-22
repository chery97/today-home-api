import { Injectable } from '@nestjs/common';
import { category } from '../entity/category.entity';
import { DataSource, Repository } from "typeorm";

@Injectable()
export class CategoryRepository extends Repository<category> {
  constructor(private dataSource: DataSource) {
    super(category, dataSource.createEntityManager());
  }
  async getAllCategories(): Promise<category[]> {
    return await this.find();
  }
}
