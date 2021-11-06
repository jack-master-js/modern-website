import logger from "@api/utils/logger";

export default async (req, res, next) => {
  res.success = () => {
    res.send({
      success: true,
    });
    logger.info(
      `[http server] request ${req.url} ${JSON.stringify(req.body)} success`
    );
  };

  res.content = (content, count = null) => {
    res.send({
      success: true,
      content,
      count,
    });

    logger.info(
      `[http server] request ${req.url} ${JSON.stringify(
        req.body
      )} response content: ${JSON.stringify(content)}`
    );
  };

  res.error = ({ message }) => {
    res.send({
      success: false,
      message,
    });

    logger.error(
      `[http server] request ${req.url} ${JSON.stringify(
        req.body
      )} error: ${message}`
    );
  };

  res.filePath = () => {
    let file = req.file;
    let files = req.files;

    if (file) {
      let fileName = req.file.filename;
      let filePath = `/uploads/${fileName}`;
      let content = {
        file: fileName,
        path: filePath,
      };

      logger.info(
        `[http server] request ${req.url} response content: ${JSON.stringify(
          content
        )}`
      );
      return res.send({
        success: true,
        content: content,
      });
    } else if (files && files.length > 0) {
      let fileList = [];
      for (let file of files) {
        let fileName = file.filename;
        let filePath = `/uploads/${fileName}`;

        fileList.push({
          file: fileName,
          path: filePath,
        });
      }

      logger.info(
        `[http server] request ${req.url} response content: ${JSON.stringify(
          fileList
        )}`
      );
      return res.send({
        success: true,
        content: fileList,
      });
    } else {
      throw Error("no file founded!");
    }
  };

  next();
};
