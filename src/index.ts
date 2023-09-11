import express from "express";
import { config } from "dotenv";
import { UserRepository } from "./repositories/UserRepository";
import { UserController } from "./controllers/UserController";
import { Mongo } from "./database/Mongo";

const main = async () => {
  config();

  const port = process.env.PORT || 8080;

  const app = express();

  await Mongo.connect();

  app.get("/users", async (req, res) => {
    const userRepository = new UserRepository();
    const userController = new UserController(userRepository);

    const users = await userController.getUsers();

    res.status(users.statusCode).json(users.body);
  });

  app.listen(port, () => {
    console.log(`listening on port ${port}`);
  });
};

main();
