import { IUsersRepository } from "../contracts/UserContract";
import { User } from "../models/Users";

export class UserRepository implements IUsersRepository {
  async getUsers(): Promise<User[]> {
    return [
      {
        firstName: "Elton",
        lastName: "Bata",
        email: "elton@gmail.com",
        password: "123456789",
      },
    ];
  }
}
