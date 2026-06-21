"use client";

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-white text-gray-900 flex flex-col">

      {/* Navbar */}
      <header className="flex justify-between items-center px-6 py-4 shadow-sm">
        <h1 className="text-2xl font-bold text-blue-600">HumanLink</h1>

        <div className="space-x-4">
          <button
            onClick={() => router.push("/login")}
            className="px-4 py-2 border rounded-md"
          >
            Login
          </button>

          <button
            onClick={() => router.push("/signup")}
            className="px-4 py-2 bg-blue-600 text-white rounded-md"
          >
            Sign Up
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex flex-1 flex-col items-center justify-center text-center px-6">

        <h2 className="text-4xl md:text-5xl font-bold leading-tight">
          Connect. Help. Earn Trust.
        </h2>

        <p className="mt-4 text-gray-600 max-w-xl">
          HumanLink connects people who need help with people who can solve problems.
          Earn karma points, build reputation, and grow your impact.
        </p>

        <div className="mt-6 space-x-4">
          <button
            onClick={() => router.push("/requests")}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg"
          >
            Explore Requests
          </button>

          <button
            onClick={() => router.push("/requests/create")}
            className="px-6 py-3 border rounded-lg"
          >
            Post a Request
          </button>
        </div>

      </main>

      {/* Footer */}
      <footer className="text-center py-6 text-sm text-gray-500">
        © 2026 HumanLink — Built for helping humans.
      </footer>

    </div>
  );
}
