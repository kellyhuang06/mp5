"use client";

import { ReactNode } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { styles } from "@/components/styles";

type PageLayoutProps = {
    title: string;
    subtitle: string;
    children: ReactNode;
};

export default function PageLayout({ title, subtitle, children }: PageLayoutProps) {
    return (
        <Container maxWidth="sm" sx={styles.page}>
            <Typography variant="h3" component="h1" sx={styles.heading}>
                {title}
            </Typography>
            <Typography sx={styles.tagline}>{subtitle}</Typography>
            <Box>{children}</Box>
        </Container>
    );
}