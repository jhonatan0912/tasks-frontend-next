import { http, HttpMethods, IResponse } from '../utils';

export class AuthProxy {

  get path(): string {
    return `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/auth`;
  }

  async login(email: string, password: string): Promise<IResponse<AuthResponseDto>> {
    const body = {
      email,
      password
    };

    const res = await http(`${this.path}/login`, HttpMethods.POST, body);
    return new IResponse<AuthResponseDto>().fromJS(res);
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