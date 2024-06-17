import { UserDto } from '../proxies/auth.proxies';

export class SessionService {

  private _user: UserDto | undefined = undefined;

  get user(): UserDto | undefined {
    return this._user;
  }

  setUser(user: UserDto): void {
    this._user = user;
  }
}