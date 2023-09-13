import { ok } from "assert";
import { IUsersController, IUsersRepository } from "../contracts/UserContract";
import { User } from "../models/Users";
import {
  HttpResponse,
  badRequest,
  created,
  done,
  serverError,
} from "../responses/HttpResponse";
import validator from "validator";

export class UserController implements IUsersController {
  constructor(private readonly userService: IUsersRepository) {}

  async handleGetUsers(): Promise<HttpResponse<User[] | string>> {
    try {
      const users = await this.userService.getUsers();

      return done<User[]>(users);
    } catch (error) {
      return serverError();
    }
  }

  async handleCreateUser(data: User): Promise<HttpResponse<User | string>> {
    const cuser: User = data;

    if (!validator.isEmail(cuser.email)) {
      return badRequest("Email invalid");
    }

    try {
      const user = await this.userService.createUser(cuser);
      return created(user);
    } catch (error) {
      return serverError();
    }
  }

  async handleUpdateUser(
    id: string,
    data: User
  ): Promise<HttpResponse<User | string>> {
    try {
      const user = await this.userService.updateUser(id, data);
      return done<User>(user);
    } catch (error) {
      return serverError();
    }
  }

  async handleDeleteUser(id: string): Promise<HttpResponse<User | string>> {
    try {
      const user = await this.userService.deleteUser(id);
      return done<User>(user);
    } catch (error) {
      return serverError();
    }
  }
}
