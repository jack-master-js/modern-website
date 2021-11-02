import logger from "../_common/utils/logger";
import request from "./request";

class Player {
  constructor(socket, info) {
    this.socket = socket;
    this.info = info;

    this.handlers = new Map();
    this.handler();
    request(this);
  }

  on(cmd, callback) {
    this.handlers.set(cmd, callback);
  }

  emit(cmd, msg) {
    this.socket.send(JSON.stringify({ cmd, msg }));
  }

  handler() {
    this.socket.on("message", (data) => {
      const { cmd, msg } = JSON.parse(data);
      if (cmd) this.trigger(cmd, msg, false);
    });
  }

  trigger(cmd, msg, fromSystem = true) {
    let handle = this.handlers.get(cmd);
    if (handle) {
      msg = msg || {};
      msg.fromSystem = fromSystem;
      handle(msg);
    }
  }

  onNewConnection(socket) {
    logger.info(`[ Player ] ${socket.id} new connected!`);
  }

  onReConnection(socket) {
    logger.info(`[ Player ] ${socket.id} reconnected!`);
    this.socket = socket;
    this.handler();
  }

  onKickOut(socket) {
    logger.info(`[ Player ] ${socket.id} was kick out!`);
  }

  async online(socket, playerOnline) {
    await playerOnline();
    logger.info(`[ Player ] ${socket.id} is online!`);

    this.joinRoom();
  }

  async onOffline(socket, playerOffline) {
    this.socket.on("close", async () => {
      if (socket === this.socket) {
        await playerOffline();
        logger.info(`[ Player ] ${socket.id} is offline!`);
      }
    });
  }

  joinRoom() {}
}

module.exports = Player;
