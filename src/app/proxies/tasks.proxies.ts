import { http, HttpMethods, IPaginatedResponse } from '../utils';

export class TasksProxy {

  get path(): string {
    return `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/tasks`;
  }

  async getAll(page: number = 1, limit: number = 20): Promise<IPaginatedResponse<TaskDto>> {
    let url = this.path;

    if (page !== null && page !== undefined)
      url += `?page=${page}`;

    if (limit !== null && limit !== undefined)
      url += `&limit=${limit}`;

    return await http(url, HttpMethods.GET, undefined);
  }
}

export class TaskDto {
  id!: string;
  title!: string;
  description!: string;
  createdAt!: Date;
  done!: boolean;
}