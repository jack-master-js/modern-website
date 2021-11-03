import logger from "@api/utils/logger";

export default (player) => {
  player.on("ping", (msg) => {
    logger.info(msg);
    player.emit("pong", {
      clientTime: msg.clientTime,
      serverTime: Date.now(),
    });
  });
};
