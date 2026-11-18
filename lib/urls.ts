import { Collection } from "mongodb";
import getDb from "@/lib/mongodb";

type UrlDocument = {
    alias: string;
    url: string;
};

const COLLECTION_NAME = "urls";
const DUPLICATE_KEY_ERROR = 11000;

let indexReady = false;

async function getUrlsCollection(): Promise<Collection<UrlDocument>> {
    const db = await getDb();
    const collection = db.collection<UrlDocument>(COLLECTION_NAME);

    if (!indexReady) {
        await collection.createIndex({ alias: 1 }, { unique: true });
        indexReady = true;
    }

    return collection;
}

export async function findUrlByAlias(alias: string): Promise<string | null> {
    const collection = await getUrlsCollection();
    const doc = await collection.findOne({ alias });
    return doc ? doc.url : null;
}

export async function createUrl(alias: string, url: string): Promise<boolean> {
    const collection = await getUrlsCollection();

    try {
        await collection.insertOne({ alias, url });
        return true;
    } catch (error) {
        if ((error as { code?: number }).code === DUPLICATE_KEY_ERROR) {
            return false;
        }
        throw error;
    }
}
