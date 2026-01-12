import { createHashtag as createHashtagService } from "../services/index.js";
import { StatusCodes } from "http-status-codes";
import { SuccessResponse, ErrorResponse } from "../utils/common/index.js";

async function createHashtag(req, res) {
  try {
    const hashtags = await createHashtagService({
      text: req.body.text,
      tweets: req.body.tweets,
    });

    SuccessResponse.data = hashtags;

    return res.status(StatusCodes.CREATED).json({
      SuccessResponse,
    });
  } catch (error) {
    ErrorResponse.error = error;

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorResponse);
  }
}

export { createHashtag };
