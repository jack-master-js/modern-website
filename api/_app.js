import "reflect-metadata";
import { createConnection } from "typeorm";
import { hook } from '@modern-js/runtime/server';

createConnection({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "root",
  password: "123456",
  database: "test",
  entities: [__dirname + "/_entity/*.js"],
  synchronize: true,
  logging: false,
})
  .then((connection) => {
    console.log("db connected");
  })
  .catch((error) => console.log(error));

export default hook(({ addMiddleware }) => {
  addMiddleware(async (req, res, next) => {
    console.info(`access url: ${req.url}`);
    next();
  });
});
