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

const { WS_PORT, DATABASE_TYPE, DB_HOST, DB_PORT, DB_USER, DB_PASS, DATABASE } =
  process.env;
const app = express();
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
  logging: false,
})
  .then((connection) => {
    logger.info("[db] connected");
  })
  .catch((error) => logger.error(error));

app.use(express.static(path.join(__dirname, "..", "/public")));
app.use(cors());

// session
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

// middleware
// app.use(auth);

// route
app.post("/api/upload", multer.single("file"), (req, res, next) => {
  res.send(`/uploads/${req.file.filename}`);
});

export default app;
