
const ALIAS_PATTERN = /^[a-zA-Z0-9_-]+$/;
const MAX_ALIAS_LENGTH = 50;

const RESERVED_ALIASES = ["api"];

export function getUrlError(value: string): string | null {
    const trimmed = value.trim();

    if (!trimmed) {
        return "Enter a URL.";
    }

    let parsed: URL;
    try {
        parsed = new URL(trimmed);
    } catch {
        return "Enter a valid URL, including http:// or https://";
    }

    if (parsed.protocol !== "http:" && parsed.protocol !== "https:") {
        return "The URL must start with http:// or https://";
    }

    if (!parsed.hostname.includes(".") && parsed.hostname !== "localhost") {
        return "Enter a valid URL, including a domain like example.com";
    }

    return null;
}

export function getAliasError(value: string): string | null {
    const trimmed = value.trim();

    if (!trimmed) {
        return "Enter an alias.";
    }

    if (trimmed.length > MAX_ALIAS_LENGTH) {
        return `The alias must be ${MAX_ALIAS_LENGTH} characters or fewer.`;
    }

    if (!ALIAS_PATTERN.test(trimmed)) {
        return "The alias can only use letters, numbers, hyphens, and underscores.";
    }

    if (RESERVED_ALIASES.includes(trimmed.toLowerCase())) {
        return "That alias is reserved. Choose another one.";
    }

    return null;
}
