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

  data(data, total = null) {
    const { req } = useContext();
    logger.info(
      `[http server] request ${req.url} ${JSON.stringify(
        req.body
      )} response data: ${JSON.stringify(data)}`
    );

    return {
      success: true,
      data,
      total,
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
