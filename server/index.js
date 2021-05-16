require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const graphqlHTTP = require("express-graphql");
const schema = require("./src/graphql/graphSchema");
const root = require("./src/graphql/graphRoot");
const app = express();
const cors = require("cors");
const port = process.env.SERVER_PORT;

mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});
const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log({ message: "Connected to Mongo-DB" }));

app.use(cors());
app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
  })
);

app.listen(port, () =>
  console.log({
    message: `Server is listening on port http://localhost:${port}/graphql`,
  })
);
