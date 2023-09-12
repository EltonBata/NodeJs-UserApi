import { IUsersController, IUsersRepository } from "../contracts/UserContract";
import { User } from "../models/Users";
import { HttpResponse } from "../responses/HttpResponse";

export class UserController implements IUsersController {
  constructor(private readonly userService: IUsersRepository) {}

  async handeGetUsers(): Promise<HttpResponse<User[]>> {
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

  async handeCreateUser(data: User): Promise<HttpResponse<User>> {
    const cuser: User = data;

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
}
