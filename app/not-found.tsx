import Link from "next/link";
import { PageLayout } from "@/components/PageLayout";

export default function NotFound() {
  return (
    <PageLayout eyebrow="Error" title="Page missing">
      <div className="mx-auto max-w-5xl px-6 py-16">
        <p className="max-w-xl leading-8 text-white/65">
          That page is not here. You can return home or open the contact page.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Link href="/" className="btn btn-solid">
            Home
          </Link>
          <Link href="/contact" className="btn btn-ghost">
            Contact
          </Link>
        </div>
      </div>
    </PageLayout>
  );
}
