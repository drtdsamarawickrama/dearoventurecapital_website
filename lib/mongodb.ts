import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;

if (!uri) {
  throw new Error("MONGODB_URI environment variable is not configured");
}

const client = new MongoClient(uri);

declare global {
  var mongoClientPromise: Promise<MongoClient> | undefined;
}

const clientPromise =
  globalThis.mongoClientPromise ??
  (globalThis.mongoClientPromise = client.connect());

export const dbPromise = clientPromise.then((connectedClient) =>
  connectedClient.db(process.env.MONGODB_DB || "DearoVC")
);

export default clientPromise;
