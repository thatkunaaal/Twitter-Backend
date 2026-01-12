import { HashtagRepository } from "../repository/index.js";
const hashRepo = new HashtagRepository();

async function createHashtag(data) {
  try {
    const hashtag = await hashRepo.create(data);
    return hashtag;
  } catch (error) {
    throw error;
  }
}

async function deleteHashtag(data) {
  try {
    const hashtag = await hashRepo.delete(data);
    return hashtag;
  } catch (error) {
    throw error;
  }
}

export { createHashtag, deleteHashtag };
