import { User } from "../models/Users";
import { HttpResponse } from "../responses/HttpResponse";

export interface IUsersController {
  handleGetUsers(): Promise<HttpResponse<User[]>>;
  handleCreateUser(data: User): Promise<HttpResponse<User>>;
  handleUpdateUser(id: string, data: User): Promise<HttpResponse<User>>;
}

export interface IUsersRepository {
  getUsers(): Promise<User[]>;
  createUser(data: User): Promise<User>;
  updateUser(id: string, data: User): Promise<User>;
}
