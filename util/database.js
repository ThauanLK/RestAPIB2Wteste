const MongoClient = require("mongodb").MongoClient;

let _db;
const uri =
  "mongodb+srv://tholiveira:Akmv1j1nY0WW3CRp@cluster0.69gso.gcp.mongodb.net/planets?retryWrites=true&w=majority";
const mongoConnect = (callback) => {
  MongoClient.connect(uri)
    .then((client) => {
      console.log("Conectou");
      _db = client.db();
      callback(client);
    })
    .catch((err) => {
      throw err;
    });
};

const getDb = () => {
  if (_db) return _db;
  throw "Banco de Dados não encontrado";
};

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;
