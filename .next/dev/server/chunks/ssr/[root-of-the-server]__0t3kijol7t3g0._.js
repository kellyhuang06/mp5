module.exports = [
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/app/[alias]/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AliasRedirect,
    "dynamic",
    ()=>dynamic
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$urls$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/urls.ts [app-rsc] (ecmascript)");
;
;
const dynamic = "force-dynamic";
async function AliasRedirect({ params }) {
    const { alias } = await params;
    const url = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$urls$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["findUrlByAlias"])(alias);
    if (!url) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notFound"])();
    }
    // redirect() works by throwing, so it must stay outside any try/catch.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["redirect"])(url);
}
}),
"[project]/app/[alias]/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/app/[alias]/page.tsx [app-rsc] (ecmascript)"));
}),
"[project]/lib/mongodb.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>getDb
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$mongodb__$5b$external$5d$__$28$mongodb$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongodb$29$__ = __turbopack_context__.i("[externals]/mongodb [external] (mongodb, cjs, [project]/node_modules/mongodb)");
;
const DB_NAME = "url-shortener";
const globalForMongo = globalThis;
function getClientPromise() {
    const uri = process.env.MONGO_URI;
    if (!uri) {
        throw new Error("MONGO_URI is not defined. Add it to .env.local");
    }
    if (!globalForMongo.mongoClientPromise) {
        globalForMongo.mongoClientPromise = new __TURBOPACK__imported__module__$5b$externals$5d2f$mongodb__$5b$external$5d$__$28$mongodb$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongodb$29$__["MongoClient"](uri).connect();
    }
    return globalForMongo.mongoClientPromise;
}
async function getDb() {
    const client = await getClientPromise();
    return client.db(DB_NAME);
}
}),
"[project]/lib/urls.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createUrl",
    ()=>createUrl,
    "findUrlByAlias",
    ()=>findUrlByAlias
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mongodb$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/mongodb.ts [app-rsc] (ecmascript)");
;
const COLLECTION_NAME = "urls";
const DUPLICATE_KEY_ERROR = 11000;
let indexReady = false;
async function getUrlsCollection() {
    const db = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mongodb$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])();
    const collection = db.collection(COLLECTION_NAME);
    if (!indexReady) {
        await collection.createIndex({
            alias: 1
        }, {
            unique: true
        });
        indexReady = true;
    }
    return collection;
}
async function findUrlByAlias(alias) {
    const collection = await getUrlsCollection();
    const doc = await collection.findOne({
        alias
    });
    return doc ? doc.url : null;
}
async function createUrl(alias, url) {
    const collection = await getUrlsCollection();
    try {
        await collection.insertOne({
            alias,
            url
        });
        return true;
    } catch (error) {
        if (error.code === DUPLICATE_KEY_ERROR) {
            return false;
        }
        throw error;
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__0t3kijol7t3g0._.js.map