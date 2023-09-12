import { User } from "../models/Users";
import { HttpResponse } from "../responses/HttpResponse";

export interface IUsersController {
  handeGetUsers(): Promise<HttpResponse<User[]>>;
  handeCreateUser(data: User): Promise<HttpResponse<User>>;
}

export interface IUsersRepository {
  getUsers(): Promise<User[]>;
  createUser(data: User): Promise<User>;
}
