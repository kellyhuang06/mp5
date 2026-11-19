"use client";

import { FormEvent, useState } from "react";
import Alert from "@mui/material/Alert";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import ShortUrlResult from "@/components/ShortUrlResult";
import { styles } from "@/components/styles";
import { getAliasError, getUrlError } from "@/lib/validation";

export default function ShortenForm() {
    const [url, setUrl] = useState("");
    const [alias, setAlias] = useState("");
    const [error, setError] = useState("");
    const [shortUrl, setShortUrl] = useState("");
    const [loading, setLoading] = useState(false);

    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setError("");
        setShortUrl("");

        // Quick feedback in the browser. The backend validates again.
        const clientError = getUrlError(url) ?? getAliasError(alias);
        if (clientError) {
            setError(clientError);
            return;
        }

        setLoading(true);

        try {
            const response = await fetch("/api/shorten", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ url, alias }),
            });
            const data = await response.json();

            if (!response.ok) {
                setError(data.error ?? "Something went wrong. Try again.");
                return;
            }

            setShortUrl(`${window.location.origin}/${data.alias}`);
            setUrl("");
            setAlias("");
        } catch {
            setError("Could not reach the server. Check your connection and try again.");
        } finally {
            setLoading(false);
        }
    }

    return (
        <Paper elevation={0} sx={styles.card}>
            <Typography variant="h5" component="h2" sx={styles.cardTitle}>
                Shorten a URL
            </Typography>
            <Typography variant="body2" sx={styles.cardSubtitle}>
                Paste a long link and choose the alias you want it to use.
            </Typography>

        <Box component="form" onSubmit={handleSubmit} noValidate sx={styles.form}>
        <Box>
        <Typography sx={styles.label}>URL</Typography>
        <TextField
            placeholder="https://example.com/a/very/long/link"
            value={url}
            onChange={(event) => setUrl(event.target.value)}
            fullWidth
            sx={styles.urlInput}
        />
    </Box>

    <Box>
        <Typography sx={styles.label}>Custom Alias</Typography>
        <Box sx={styles.aliasRow}>
            <Typography sx={styles.domain}>
                https://mp5-cs303-url-shortner.vercel.app/
            </Typography>
            <TextField
                placeholder="my-link"
                value={alias}
                onChange={(event) => setAlias(event.target.value)}
                sx={styles.aliasInput}
            />
        </Box>
    </Box>

    {error && <Alert severity="error">{error}</Alert>}

    <Button
        type="submit"
        variant="contained"
        disabled={loading}
        sx={styles.submitButton}
    >
        {loading ? "Shortening..." : "Shorten"}
    </Button>
    </Box>
            {shortUrl && <ShortUrlResult shortUrl={shortUrl} />}
        </Paper>
    );
}
