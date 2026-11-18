
import { notFound, redirect } from "next/navigation";
import { findUrlByAlias } from "@/lib/urls";
 
// SSR: look the alias up on every request so new aliases work immediately.
export const dynamic = "force-dynamic";
 
export default async function AliasRedirect(
    { params }: { params: Promise<{ alias: string }> }
) {
    const { alias } = await params;
 
    const url = await findUrlByAlias(alias);
 
    if (!url) {
        notFound();
    }
 
    // redirect() works by throwing, so it must stay outside any try/catch.
    redirect(url);
}
 