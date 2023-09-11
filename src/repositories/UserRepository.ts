import { Db } from "mongodb";
import { IUsersRepository } from "../contracts/UserContract";
import { Mongo } from "../database/Mongo";
import { User } from "../models/Users";

export class UserRepository implements IUsersRepository {
  async getUsers(): Promise<User[]> {
    const users = await Mongo.db.collection<User>("users").find({}).toArray();

    return users;
  }
}
