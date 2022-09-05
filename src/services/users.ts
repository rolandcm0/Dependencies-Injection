import { HTTP } from './http';

import type { ApiConfig, User } from '../types';
export class Users implements IUsers {
  static $inject = ['apiConfig','http']
  http: HTTP;
  apiConfig: ApiConfig;

  constructor(apiConfig: ApiConfig, http: HTTP) {
    this.http = http;
    this.apiConfig = apiConfig;
  }

  getUsers() {
    return this.http.get(this.apiConfig.resources.users) as unknown as User[];
  }
}
