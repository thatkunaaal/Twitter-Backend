import { CrudRepository } from "./crud-repository.js";
import { Hashtags } from "../models/index.js";

class HashtagRepository extends CrudRepository {
  constructor() {
    super(Hashtags);
  }
}

export { HashtagRepository };
