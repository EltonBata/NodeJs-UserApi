import { IUsersController, IUsersRepository } from "../contracts/UserContract";
import { User } from "../models/Users";
import { HttpResponse } from "../responses/HttpResponse";
import validator from "validator";

export class UserController implements IUsersController {
  constructor(private readonly userService: IUsersRepository) {}

  async handleGetUsers(): Promise<HttpResponse<User[]>> {
    try {
      const users = await this.userService.getUsers();

      return {
        statusCode: 200,
        body: users,
      };
    } catch (error) {
      return {
        statusCode: 500,
        body: `Something went wrong: ${error}`,
      };
    }
  }

  async handleCreateUser(data: User): Promise<HttpResponse<User>> {
    const cuser: User = data;

    if (!validator.isEmail(cuser.email)) {
      return {
        statusCode: 400,
        body: "Email invalid",
      };
    }

    try {
      const user = await this.userService.createUser(cuser);
      return {
        statusCode: 200,
        body: user,
      };
    } catch (error) {
      return {
        statusCode: 500,
        body: `Something went wrong: ${error}`,
      };
    }
  }

  async handleUpdateUser(id: string, data: User): Promise<HttpResponse<User>> {
    try {
      const user = await this.userService.updateUser(id, data);
      return {
        statusCode: 200,
        body: user,
      };
    } catch (error) {
      return {
        statusCode: 200,
        body: `Something went wrong: ${error}`,
      };
    }
  }
}
