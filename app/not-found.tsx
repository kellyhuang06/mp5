import Link from "next/link";
import PageLayout from "@/components/PageLayout";

export default function NotFound() {
    return (
        <PageLayout
            title="Link not found"
            subtitle="No short link uses this alias. Check the spelling, or create it yourself."
        >
            <Link href="/">Back to the shortener</Link>
        </PageLayout>
    );
}