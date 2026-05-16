import Link from "next/link";
import { Container } from "@/components/ui/Container";

export default function NotFound() {
  return (
    <Container className="py-16">
      <h1 className="text-4xl font-black">Page not found</h1>
      <p className="mt-4 max-w-xl text-foreground/70">That page wandered off. The Bored Button is still here and suspiciously useful.</p>
      <Link className="mt-6 inline-flex rounded-lg bg-accent px-4 py-2 font-black text-accentText" href="/play/bored-button">
        Try the Bored Button
      </Link>
    </Container>
  );
}
