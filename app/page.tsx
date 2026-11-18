
import PageLayout from "@/components/PageLayout";
import ShortenForm from "@/components/ShortenForm";

export default function Home() {
    return (
        <PageLayout
            title="URL Shortener"
            subtitle="Turn a long link into a short one you can share."
        >
            <ShortenForm />
        </PageLayout>
    );
}
