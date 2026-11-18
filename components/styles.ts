import type { SxProps, Theme } from "@mui/material/styles";

export const COLORS = {
    background: "#eef1f5",
    surface: "#ffffff",
    text: "#1c2430",
    muted: "#5d6b7c",
    accent: "#2f4bd0",
    accentHover: "#2339a8",
    border: "#d5dbe3",
};

export const styles = {
    page: {
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        py: 6,
    },
    heading: {
        fontWeight: 700,
        color: COLORS.text,
        textAlign: "center",
    },
    tagline: {
        color: COLORS.muted,
        textAlign: "center",
        mt: 1,
        mb: 4,
    },
    card: {
        p: { xs: 3, sm: 4 },
        borderRadius: 3,
        border: `1px solid ${COLORS.border}`,
        backgroundColor: COLORS.surface,
    },
    cardTitle: {
        fontWeight: 600,
        color: COLORS.text,
    },
    cardSubtitle: {
        color: COLORS.muted,
        mb: 3,
    },
    form: {
        display: "flex",
        flexDirection: "column",
        gap: 2.5,
    },
    aliasRow: {
        display: "flex",
        alignItems: "center",
        gap: 1,
    },
    aliasSlash: {
        color: COLORS.muted,
        fontSize: 20,
    },
    submitButton: {
        py: 1.25,
        fontWeight: 600,
        textTransform: "none",
        backgroundColor: COLORS.accent,
        "&:hover": {
            backgroundColor: COLORS.accentHover,
        },
    },
    result: {
        mt: 3,
        p: 2,
        borderRadius: 2,
        border: `1px solid ${COLORS.border}`,
        backgroundColor: COLORS.background,
    },
    resultLabel: {
        color: COLORS.muted,
        mb: 1,
    },
    resultRow: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 2,
        flexWrap: "wrap",
    },
    resultLink: {
        color: COLORS.accent,
        fontWeight: 600,
        wordBreak: "break-all",
    },
    copyButton: {
        textTransform: "none",
        fontWeight: 600,
        color: COLORS.accent,
        borderColor: COLORS.accent,
        "&:hover": {
            borderColor: COLORS.accentHover,
            backgroundColor: "transparent",
        },
    },
    backLink: {
        textAlign: "center",
        mt: 2,
    },
} satisfies Record<string, SxProps<Theme>>;