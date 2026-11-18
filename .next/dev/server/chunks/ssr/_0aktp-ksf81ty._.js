module.exports = [
"[project]/app/layout.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>RootLayout,
    "metadata",
    ()=>metadata
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2d$nextjs$2f$v13$2d$appRouter$2f$appRouterV13$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__AppRouterCacheProvider$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material-nextjs/v13-appRouter/appRouterV13.mjs [app-rsc] (ecmascript) <export default as AppRouterCacheProvider>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$styles$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/styles.ts [app-rsc] (ecmascript)");
;
;
;
const metadata = {
    title: "URL Shortener",
    description: "Shorten your links with a custom alias"
};
function RootLayout({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("html", {
        lang: "en",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("body", {
            style: {
                margin: 0,
                backgroundColor: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$styles$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["COLORS"].background,
                fontFamily: "Roboto, Helvetica, Arial, sans-serif"
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2d$nextjs$2f$v13$2d$appRouter$2f$appRouterV13$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__AppRouterCacheProvider$3e$__["AppRouterCacheProvider"], {
                children: children
            }, void 0, false, {
                fileName: "[project]/app/layout.tsx",
                lineNumber: 23,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/layout.tsx",
            lineNumber: 16,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/layout.tsx",
        lineNumber: 15,
        columnNumber: 9
    }, this);
}
}),
"[project]/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/components/styles.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "COLORS",
    ()=>COLORS,
    "styles",
    ()=>styles
]);
const COLORS = {
    background: "#eef1f5",
    surface: "#ffffff",
    text: "#1c2430",
    muted: "#5d6b7c",
    accent: "#2f4bd0",
    accentHover: "#2339a8",
    border: "#d5dbe3"
};
const styles = {
    page: {
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        py: 6
    },
    heading: {
        fontWeight: 700,
        color: COLORS.text,
        textAlign: "center"
    },
    tagline: {
        color: COLORS.muted,
        textAlign: "center",
        mt: 1,
        mb: 4
    },
    card: {
        p: {
            xs: 3,
            sm: 4
        },
        borderRadius: 3,
        border: `1px solid ${COLORS.border}`,
        backgroundColor: COLORS.surface
    },
    cardTitle: {
        fontWeight: 600,
        color: COLORS.text
    },
    cardSubtitle: {
        color: COLORS.muted,
        mb: 3
    },
    form: {
        display: "flex",
        flexDirection: "column",
        gap: 2.5
    },
    aliasRow: {
        display: "flex",
        alignItems: "center",
        gap: 1
    },
    aliasSlash: {
        color: COLORS.muted,
        fontSize: 20
    },
    submitButton: {
        py: 1.25,
        fontWeight: 600,
        textTransform: "none",
        backgroundColor: COLORS.accent,
        "&:hover": {
            backgroundColor: COLORS.accentHover
        }
    },
    result: {
        mt: 3,
        p: 2,
        borderRadius: 2,
        border: `1px solid ${COLORS.border}`,
        backgroundColor: COLORS.background
    },
    resultLabel: {
        color: COLORS.muted,
        mb: 1
    },
    resultRow: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 2,
        flexWrap: "wrap"
    },
    resultLink: {
        color: COLORS.accent,
        fontWeight: 600,
        wordBreak: "break-all"
    },
    copyButton: {
        textTransform: "none",
        fontWeight: 600,
        color: COLORS.accent,
        borderColor: COLORS.accent,
        "&:hover": {
            borderColor: COLORS.accentHover,
            backgroundColor: "transparent"
        }
    },
    backLink: {
        textAlign: "center",
        mt: 2
    }
};
}),
"[project]/node_modules/@mui/material-nextjs/v13-appRouter/appRouterV13.mjs [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/node_modules/@mui/material-nextjs/v13-appRouter/appRouterV13.mjs from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/@mui/material-nextjs/v13-appRouter/appRouterV13.mjs", "default");
}),
"[project]/node_modules/@mui/material-nextjs/v13-appRouter/appRouterV13.mjs [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2d$nextjs$2f$v13$2d$appRouter$2f$appRouterV13$2e$mjs__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/material-nextjs/v13-appRouter/appRouterV13.mjs [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2d$nextjs$2f$v13$2d$appRouter$2f$appRouterV13$2e$mjs__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/node_modules/@mui/material-nextjs/v13-appRouter/appRouterV13.mjs [app-rsc] (ecmascript) <export default as AppRouterCacheProvider>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AppRouterCacheProvider",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2d$nextjs$2f$v13$2d$appRouter$2f$appRouterV13$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2d$nextjs$2f$v13$2d$appRouter$2f$appRouterV13$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/material-nextjs/v13-appRouter/appRouterV13.mjs [app-rsc] (ecmascript)");
}),
"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-rsc] (ecmascript)").vendored['react-rsc'].ReactJsxDevRuntime;
}),
];

//# sourceMappingURL=_0aktp-ksf81ty._.js.map