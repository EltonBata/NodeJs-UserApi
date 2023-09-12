import { Db, ObjectId } from "mongodb";
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

  async updateUser(id: string, data: User): Promise<User> {
    await Mongo.db
      .collection("users")
      .updateOne({ _id: new ObjectId(id) }, { $set: { ...data } });

    const user = await Mongo.db
      .collection<User>("users")
      .findOne({ _id: new ObjectId(id) });

    if (!user) {
      throw new Error("user not updated");
    }

    return user;
  }
}
