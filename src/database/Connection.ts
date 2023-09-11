// import mongoose from "mongoose";

export const Connection = {
  async connect() {
    const username = process.env.MONGODB_USERNAME;
    const password = process.env.MONGODB_PASSWORD;
    const url = `${process.env.MONGODB_URL}${process.env.MONGODB_DATABASE}`;

    

    // await mongoose
    //   .connect(url)
    //   .then(() => {
    //     console.log("Conexão com o MongoDB estabelecida com sucesso");
    //   })
    //   .catch((err) => {
    //     console.error("Erro ao conectar ao MongoDB:", err);
    //   });
  },
};

// const MongoClient = require("mongodb").MongoClient;
// const uri = "mongodb://localhost:27017/seu-banco-de-dados"; // Substitua 'seu-banco-de-dados' pelo nome do seu banco de dados

// async function connectToMongoDB() {
//   const client = new MongoClient(uri, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   });

//   try {
//     await client.connect(); // Conecta ao servidor MongoDB
//     console.log("Conectado ao MongoDB");

//     // Agora você pode realizar operações no banco de dados usando o objeto 'client'
//   } catch (error) {
//     console.error("Erro ao conectar ao MongoDB", error);
//   } finally {
//     await client.close(); // Fecha a conexão quando você terminar
//   }
// }

// connectToMongoDB();
