import { Db } from "mongodb";
import { IUsersRepository } from "../contracts/UserContract";
import { Mongo } from "../database/Mongo";
import { User } from "../models/Users";

export class UserRepository implements IUsersRepository {
  async getUsers(): Promise<User[]> {
    const users = await Mongo.db.collection<User>("users").find({}).toArray();

    return users;
  }

  async createUser(data: User): Promise<User> {
    const { insertedId } = await Mongo.db.collection("users").insertOne(data);

    const user = await Mongo.db
      .collection<User>("users")
      .findOne({ _id: insertedId });

    if (!user) {
      throw new Error("user not created");
    }

    return user;
  }
}
