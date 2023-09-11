import { IUsersController, IUsersRepository } from "../contracts/UserContract";


export class UserController implements IUsersController {
  constructor(private readonly userService: IUsersRepository) {}

  async getUsers() {
    try {
      const users = await this.userService.getUsers();

      return {
        statusCode: 200,
        body: users,
      };
    } catch (error) {
      return {
        statusCode: 500,
        body: "Something went wrong",
      };
    }
  }
}
