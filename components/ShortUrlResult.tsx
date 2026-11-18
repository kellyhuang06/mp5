"use client";

import { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { styles } from "@/components/styles";

type ShortUrlResultProps = {
    shortUrl: string;
};

const COPIED_RESET_MS = 2000;

export default function ShortUrlResult({ shortUrl }: ShortUrlResultProps) {
    const [copied, setCopied] = useState(false);

    async function handleCopy() {
        try {
            await navigator.clipboard.writeText(shortUrl);
            setCopied(true);
            setTimeout(() => setCopied(false), COPIED_RESET_MS);
        } catch {
            setCopied(false);
        }
    }

    return (
        <Box sx={styles.result}>
            <Typography variant="body2" sx={styles.resultLabel}>
                Your short link is ready
            </Typography>
            <Box sx={styles.resultRow}>
                <Typography
                    component="a"
                    href={shortUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={styles.resultLink}
                >
                    {shortUrl}
                </Typography>
                <Button variant="outlined" onClick={handleCopy} sx={styles.copyButton}>
                    {copied ? "Copied" : "Copy link"}
                </Button>
            </Box>
        </Box>
    );
}
