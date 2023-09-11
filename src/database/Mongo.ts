// import mongoose from "mongoose";
import { MongoClient, Db } from "mongodb";

export const Mongo = {

   db: undefined as unknown as Db,

   async connect(): Promise<void> {
    const username = process.env.MONGODB_USERNAME;
    const password = process.env.MONGODB_PASSWORD;
    const url = `${process.env.MONGODB_URL}${process.env.MONGODB_DATABASE}`;

    //Connection with Mongodb
    const client = new MongoClient(url);

    this.db = client.db(`${process.env.MONGODB_DATABASE}`);

    console.log("connected to mongo");

    //Connection with Mongoose

    // await mongoose
    //   .connect(url)
    //   .then(() => {
    //     console.log("Conexão com o MongoDB estabelecida com sucesso");
    //   })
    //   .catch((err) => {
    //     console.error("Erro ao conectar ao MongoDB:", err);
    //   });
  }
}
