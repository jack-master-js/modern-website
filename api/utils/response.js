import logger from "@api/utils/logger";
import { useContext } from "@modern-js/runtime/server";

class Response {
  success() {
    const { req } = useContext();
    logger.info(`[http server] request ${JSON.stringify(req)} success`);
    return {
      success: true,
    };
  }

  content(content, count = null) {
    const { req } = useContext();
    logger.info(
      `[http server] request ${JSON.stringify(
        req
      )} response content: ${JSON.stringify(content)}`
    );

    return {
      success: true,
      content,
      count,
    };
  }
  error({ message }) {
    const { req } = useContext();
    logger.error(
      `[http server] request ${JSON.stringify(req)} error: ${message}`
    );

    return {
      success: false,
      message,
    };
  }
}

export default new Response();
