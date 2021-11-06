import logger from "@api/utils/logger";
import { useContext } from "@modern-js/runtime/server";

class Response {
  success() {
    const { req } = useContext();
    logger.info(
      `[http server] request ${req.url} ${JSON.stringify(req.body)} success`
    );
    return {
      success: true,
    };
  }

  content(content, count = null) {
    const { req } = useContext();
    logger.info(
      `[http server] request ${req.url} ${JSON.stringify(
        req.body
      )} response data: ${JSON.stringify(content)}`
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
      `[http server] request ${req.url} ${JSON.stringify(
        req.body
      )} error: ${message}`
    );

    return {
      success: false,
      message,
    };
  }
}

export default new Response();
