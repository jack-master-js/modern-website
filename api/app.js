import "reflect-metadata";
import express from "express";
import session from "express-session";
import cookieParser from "cookie-parser";
import cors from "cors";
import responseTime from "response-time";
import timeout from "connect-timeout";
import compression from "compression";
import { createConnection } from "typeorm";
import ws from "@api/ws";
import logger from "@api/utils/logger";
import auth from "@api/middleware/auth";
import path from "path";
import multer from "@api/utils/multer";

const app = express();
// app.use(cors());

console.log(process.env.NODE_ENV);

const { WS_PORT, DATABASE_TYPE, DB_HOST, DB_PORT, DB_USER, DB_PASS, DATABASE } =
  process.env;

ws.start(WS_PORT);

createConnection({
  type: DATABASE_TYPE,
  host: DB_HOST,
  port: DB_PORT,
  username: DB_USER,
  password: DB_PASS,
  database: DATABASE,
  entities: [path.join(__dirname, "/entity/*.js")],
  synchronize: true,
  logging: ["error"],
  logger: "file",
})
  .then((connection) => {
    logger.info("数据库已连接!");
  })
  .catch((error) => logger.error("数据库连接失败！"));

// middleware
// app.use(auth);

/**
 * @api {POST} /api/upload 上传文件
 * @apiGroup Upload
 */
app.post("/api/upload", multer.single("file"), (req, res, next) => {
  res.send(`/uploads/${req.file.filename}`);
});

// session && cookie
const sess = {
  secret: "sess key",
  name: "session_id", //默认connect.sid
  resave: false,
  saveUninitialized: true,
  cookie: {
    maxAge: 10 * 60 * 1000, //10分钟
  },
  rolling: true, //重置 cookie 过期时间
};
app.use(session(sess)); //req.session
app.use(cookieParser()); //req.cookies || req.signedCookies

// performance
app.use(compression());
app.use(
  responseTime((req, res, time) =>
    logger.info(`[http] request ${req.url} response time: ${time}ms`)
  )
);
app.use(timeout("3s")); //req.timeout

export default app;
