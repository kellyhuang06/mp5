import React from "react";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v16-appRouter";
import { COLORS } from "@/components/styles";

export const metadata = {
    title: "URL Shortener",
    description: "Shorten your links with a custom alias",
};

export default function RootLayout(
    {children,}:
        Readonly<{children: React.ReactNode;}>
){
    return (
        <html lang="en">
            <body
                style={{
                    margin: 0,
                    backgroundColor: COLORS.background,
                    fontFamily: "Roboto, Helvetica, Arial, sans-serif",
                }}
            >
                <AppRouterCacheProvider>
                    {children}
                </AppRouterCacheProvider>
            </body>
        </html>
    );
}