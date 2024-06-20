import { httpServer, IPaginatedResponse, IResponse } from '../utils';
import { HttpMethods } from '../utils/http-methods';

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

    return await httpServer(url, HttpMethods.GET, undefined);
  }

  async get(id: string): Promise<IResponse<TaskDto>> {
    let url = this.path;

    if (id !== null && id !== undefined)
      url += `/${id}`;

    const res = await httpServer(url, HttpMethods.GET);
    return new IResponse<TaskDto>().fromJS(res);
  }
}

export class TaskDto {
  id!: string;
  title!: string;
  description!: string;
  createdAt!: Date;
  done!: boolean;
}