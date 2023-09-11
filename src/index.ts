import express from "express";
const app = express();
import { config } from "dotenv";
import { UserService } from "./services/UserService";
import { UserRepository } from "./repositories/UserRepository";
import { UserController } from "./controllers/UserController";
import { Connection } from "./database/Connection";

config();

const port = process.env.PORT || 8080;

Connection.connect();

app.get("/users", async (req, res) => {
  const userRepository = new UserRepository();
  const userService = new UserService(userRepository);
  const userController = new UserController(userService);

  const users = await userController.getUsers();

  res.status(users.statusCode).json(users.body);
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
