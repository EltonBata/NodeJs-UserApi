import { User } from "../models/Users";
import { HttpResponse } from "../responses/HttpResponse";

export interface IUsersController {
  handleGetUsers(): Promise<HttpResponse<User[] | string>>;
  handleCreateUser(data: User): Promise<HttpResponse<User | string>>;
  handleUpdateUser(
    id: string,
    data: User
  ): Promise<HttpResponse<User | string>>;
  handleDeleteUser(id: string): Promise<HttpResponse<User | string>>;
}

export interface IUsersRepository {
  getUsers(): Promise<User[]>;
  createUser(data: User): Promise<User>;
  updateUser(id: string, data: User): Promise<User>;
  deleteUser(id: string): Promise<User>;
}
