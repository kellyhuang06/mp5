import { MongoClient, Db } from "mongodb";

const DB_NAME = "url-shortener";

const globalForMongo = globalThis as unknown as {
    mongoClientPromise?: Promise<MongoClient>;
};

function getClientPromise(): Promise<MongoClient> {
    const uri = process.env.MONGO_URI;

    if (!uri) {
        throw new Error("MONGO_URI is not defined. Add it to .env.local");
    }

    if (!globalForMongo.mongoClientPromise) {
        globalForMongo.mongoClientPromise = new MongoClient(uri).connect();
    }

    return globalForMongo.mongoClientPromise;
}

export default async function getDb(): Promise<Db> {
    const client = await getClientPromise();
    return client.db(DB_NAME);
}
