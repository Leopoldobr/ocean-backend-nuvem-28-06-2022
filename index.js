const express = require("express");
const { MongoClient, ObjectId } = require("mongodb");

//const url = "mongodb://localhost:27017";
//const url = "mongodb+srv://m001-student:m001-studen@cluster0.b3frz.mongodb.net/?retryWrites=true&w=majority";
//const dbName = "ocean_bancodedados_27_06_2022";

//const url = "mongodb://mongo:3O60yY25fsCVEV3kEXIp@containers-us-west-45.railway.app:7331/?authSource=admin&readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false"
//const url = "mongodb://localhost:27107";
//const dbName = "ocean_nuvem_16_05_2022"

async function main() {
  // Conexão com o banco de dados

  console.log("Conectando ao banco de dados...");

  //const client = await MongoClient.connect(url);

  //const db = client.db(dbName);

  //const collection = db.collection("herois");

  console.log("Conexão realizada com sucesso!");

  // Aplicação Backend com Express

  const app = express();

  // Informar para o Express que estamos usando JSON
  // no body das requisições
  app.use(express.json());

  app.get("/", function (req, res) {
    res.send("Hello World");
  });

  const herois = ["Mulher Maravilha", "Capitã Marvel", "Homem de Ferro"];

  // Endpoint Read All - [GET] /herois
  app.get("/herois", async function (req, res) {
    //const documentos = await collection.find().toArray();
    res.status(200).json(herois);
    res.send(documentos);
  });

  // Endpoint Read by ID - [GET] /herois/:id
  app.get("/herois/:id", async function (req, res) {
    const id = req.params.id;

    //const item = await collection.findOne({ _id: new ObjectId(id) });

    res.send(item);
  });

  // Endpoint Create - [POST] /herois
  app.post("/herois", async function (req, res) {
    // Acessa o nome do herói no corpo da requisição
    const item = req.body;

    // Insere o objeto na collection
    await collection.insertOne(item);

    res.send(item);
  });

  // Endpoint Update - [PUT] /herois/:id
  app.put("/herois/:id", async function (req, res) {
    // Obtemos o ID pela rota
    const id = req.params.id;

    // Pegamos o objeto que foi enviado no corpo da requisição
    const item = req.body;

    // Atualizamos a collection, usando o ID, colocando o novo item
    await collection.updateOne(
      // Filtro
      { _id: new ObjectId(id) },
      // Operação de atualização
      { $set: item }
    );

    res.send(item);
  });

  // Endpoint Delete - [DELETE] /herois/:id
  app.delete("/herois/:id", async function (req, res) {
    // Obtemos o ID pela rota
    const id = req.params.id;

    // Removemos o documento pelo ID
    await collection.deleteOne({ _id: new ObjectId(id) });

    res.send("Item removido com sucesso.");
  });

  app.listen(process.env.PORT || 3000, () =>
    console.log("Servidor rodando em http://localhost:3000")
  );
}

main();
