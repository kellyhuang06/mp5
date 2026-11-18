import React from "react";
import { COLORS } from "@/components/styles";

export const metadata ={
  title: "URL Shortner",
  description: "Shorten your links with a custom alias",

};

export default function RootLayout(
  {children,}:
  Readonly<{children: React.ReactNode;}>

) {
  return (
    <html lang="en">
      <body
            style={{
              margin: 0,
              backgroundColor: COLORS.background,
              fontFamily: "Roboto, Helvetica, Arial, sans-serif"
            }}>
        {children}
      </body>

    </html>
  );
}