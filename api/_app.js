import "reflect-metadata";
import { createConnection } from "typeorm";
import { hook } from "@modern-js/runtime/server";
import WsServer from "./_ws";
import logger from "./_common/utils/logger";

const wsServer = new WsServer();
wsServer.start(8081);

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
    logger.info("[db] connected");
  })
  .catch((error) => logger.error(error));

export default hook(({ addMiddleware }) => {
  addMiddleware(async (req, res, next) => {
    console.info(`access url: ${req.url}`);
    next();
  });
});
