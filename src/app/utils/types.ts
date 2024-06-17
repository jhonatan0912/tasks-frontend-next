export class IResponse<T> {
  data!: T;
  message!: string;

  constructor(data?: any) {
    this.init(data);
  }

  init(data?: any): void {
    if (data) {
      this.data = data.data;
      this.message = data.message;
    }
  }

  fromJS<T>(data: T): IResponse<T> {
    data = typeof data === 'object' ? data : {} as T;
    const result = new IResponse<T>();
    result.init(data);
    return result;
  }
}

export class IPaginatedResponse<T> {
  data!: T[];
  meta!: PaginatedMetaResponse;
  message?: string;

  constructor(data?: any) {
    this.init(data);
  }

  init(data?: any): void {
    if (data) {
      this.data = data.data;
      this.meta = data.meta ? new PaginatedMetaResponse().fromJS(data.meta) : <any>undefined;
      this.message = data.message;
    }
  }

  fromJS<T>(data: T): IPaginatedResponse<T> {
    data = typeof data === 'object' ? data : {} as T;
    const result = new IPaginatedResponse<T>();
    result.init(data);
    return result;
  }
}

export class PaginatedMetaResponse {
  page!: number;
  limit!: number;
  total!: number;
  lastPage!: number;

  constructor(data?: any) {
    this.init(data);
  }

  init(data?: any): void {
    if (data) {
      this.page = data.page;
      this.limit = data.limit;
      this.total = data.total;
      this.lastPage = data.lastPage;
    }
  }

  fromJS(data: any): PaginatedMetaResponse {
    data = typeof data === 'object' ? data : {};
    const result = new PaginatedMetaResponse();
    result.init(data);
    return result;
  }
}