import { User } from "../models/Users";
import { HttpResponse } from "../responses/HttpResponse";

export interface IUsersController {
  getUsers(): Promise<HttpResponse<User[]>>;
}

export interface IUsersRepository {
  getUsers(): Promise<User[]>;

  createUser(data: User): Promise<User>
}

