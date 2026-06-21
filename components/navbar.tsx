"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full border-b p-4 flex justify-between items-center">
      
      <Link href="/" className="font-bold text-lg">
        🤝 HumanLink
      </Link>

      <div className="flex gap-4 text-sm">
        <Link href="/" className="hover:underline">
          Feed
        </Link>

        <Link href="/create" className="hover:underline">
          Create Request
        </Link>

        <Link href="/profile" className="hover:underline">
          Profile
        </Link>
      </div>

    </nav>
  );
}
