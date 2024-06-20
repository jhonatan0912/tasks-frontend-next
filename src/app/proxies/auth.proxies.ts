import { IResponse } from '../utils';
import { httpClient } from '../utils/http-client';
import { HttpMethods } from '../utils/http-methods';

export class AuthProxy {

  get path(): string {
    return `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/auth`;
  }

  async login(email: string, password: string): Promise<IResponse<AuthResponseDto>> {
    const body = {
      email,
      password
    };

    const res = await httpClient(`${this.path}/login`, HttpMethods.POST, body);
    return new IResponse<AuthResponseDto>().fromJS(res);
  }

  async logout(): Promise<IResponse<LogoutDto>> {
    const url = `${this.path}/logout`;
    
    const res = await httpClient(url, HttpMethods.POST);
    return new IResponse<LogoutDto>().fromJS(res);
  }
}

export class UserDto {
  id!: string;
  fullName!: string;
  email!: string;

  constructor(data: any) {
    this.id = data.id;
    this.fullName = data.fullName;
    this.email = data.email;
  }

  static fromJS(data: any): UserDto {
    data = typeof data === 'object' ? data : {} as any;
    const result = new UserDto(data);
    return result;
  }
}

export class AuthResponseDto {
  token!: string;
  refreshToken!: string;
  user!: UserDto;

  constructor(data: any) {
    this.token = data.token;
    this.refreshToken = data.refreshToken;
    this.user = new UserDto(data.user);
  }

  fromJS(data: any): AuthResponseDto {
    data = typeof data === 'object' ? data : {} as any;
    const result = new AuthResponseDto(data);
    return result;
  }
}

export class LogoutDto {
  success!: boolean;

  constructor(data: any) {
    this.success = data.success;
  }

  fromJS(data: any): LogoutDto {
    data = typeof data === 'object' ? data : {} as any;
    const result = new LogoutDto(data);
    return result;
  }
}