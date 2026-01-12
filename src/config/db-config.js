import { MongoClient, ServerApiVersion } from "mongodb";

const mongodbURI =
  process.env.MONGODB_URI;


export { mongodbURI };
