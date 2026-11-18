import { NextResponse } from "next/server";
import { createUrl } from "@/lib/urls";
import { getAliasError, getUrlError } from "@/lib/validation";

function errorResponse(message: string, status: number) {
    return NextResponse.json({ error: message }, { status });
}

export async function POST(request: Request) {
    let body: { url?: unknown; alias?: unknown };

    try {
        body = await request.json();
    } catch {
        return errorResponse("The request was not valid JSON.", 400);
    }

    if (typeof body.url !== "string" || typeof body.alias !== "string") {
        return errorResponse("Both a URL and an alias are required.", 400);
    }

    const url = body.url.trim();
    const alias = body.alias.trim();

    // Validation on the backend is the one that counts.
    const urlError = getUrlError(url);
    if (urlError) {
        return errorResponse(urlError, 400);
    }

    const aliasError = getAliasError(alias);
    if (aliasError) {
        return errorResponse(aliasError, 400);
    }

    try {
        const created = await createUrl(alias, url);

        if (!created) {
            return errorResponse(
                "That alias is already taken. Choose another one.",
                409
            );
        }

        return NextResponse.json({ alias }, { status: 201 });
    } catch (error) {
        console.error("Failed to create short URL:", error);
        return errorResponse("Something went wrong on our end. Try again.", 500);
    }
}
