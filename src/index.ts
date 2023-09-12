import express from "express";
import { config } from "dotenv";
import { UserRepository } from "./repositories/UserRepository";
import { UserController } from "./controllers/UserController";
import { Mongo } from "./database/Mongo";
import { User } from "./models/Users";

const main = async () => {
  config();

  const port = process.env.PORT || 8080;

  const app = express();
  app.use(express.json());

  await Mongo.connect();

  app.get("/users", async (req, res) => {
    const userRepository = new UserRepository();
    const userController = new UserController(userRepository);

    const users = await userController.handeGetUsers();

    res.status(users.statusCode).json(users.body);
  });

  app.post("/users", async (req, res) => {
    const createUser: User = req.body;

    const userRepository = new UserRepository();
    const userController = new UserController(userRepository);

    const user = await userController.handeCreateUser(createUser);

    res.status(user.statusCode).json(user.body);
  });

  app.listen(port, () => {
    console.log(`listening on port ${port}`);
  });
};

main();
