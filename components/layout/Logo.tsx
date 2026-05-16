import Link from "next/link";

export function Logo() {
  return (
    <Link href="/" className="inline-flex items-center gap-2 rounded-md font-black" aria-label="BoredBee home">
      <span aria-hidden="true" className="relative inline-flex h-8 w-8 items-center justify-center rounded-full bg-accent text-accentText">
        <svg viewBox="0 0 32 32" className="h-6 w-6" role="img" aria-label="Bee icon">
          <path fill="currentColor" d="M10 10c0-3 2.4-5 6-5s6 2 6 5v2h2.2c2.1 0 3.8 1.7 3.8 3.8 0 1.4-.8 2.7-2 3.3l-3.8 1.9c-.8 3.5-3.2 6-6.2 6s-5.4-2.5-6.2-6L6 19.1c-1.2-.6-2-1.9-2-3.3C4 13.7 5.7 12 7.8 12H10v-2Zm3 1h6v-1c0-1.3-1.1-2-3-2s-3 .7-3 2v1Zm0 4v2h6v-2h-6Zm.4 5c.6 2 1.6 3 2.6 3s2-1 2.6-3h-5.2Z" />
        </svg>
      </span>
      <span className="text-xl tracking-normal">BoredBee</span>
    </Link>
  );
}
