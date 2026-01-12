import {
  createHashtag as createHashtagService,
  deleteHashtag as deleteHashtagService,
} from "../services/index.js";
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

async function deleteHashtag(req, res) {
  try {
    const hashtags = await deleteHashtagService({
      _id: req.body.id,
    });

    SuccessResponse.data = hashtags;

    return res.status(StatusCodes.OK).json(SuccessResponse);
  } catch (error) {
    console.log(error);
    ErrorResponse.error = error.message;

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorResponse);
  }
}

export { createHashtag, deleteHashtag };
