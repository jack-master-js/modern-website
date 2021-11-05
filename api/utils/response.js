import logger from "@api/utils/logger";

class Response {
  success(req) {
    logger.info(
      `[http server] request ${req.url} ${JSON.stringify(req.body)} success`
    );
    return {
      success: true,
    };
  }

  data(req, data, total = null) {
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
  error(req, { message }) {
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
