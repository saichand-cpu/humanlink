import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center">

          <h1 className="text-6xl font-extrabold text-gray-900 leading-tight">
            Connecting People.
            <br />
            <span className="text-blue-600">
              Changing Lives.
            </span>
          </h1>

          <p className="mt-8 text-xl text-gray-600 max-w-3xl mx-auto">
            HumanLink connects people who need help with people who are ready
            to help. Build trust, earn karma points, and make a real impact in
            your community.
          </p>

          <div className="flex justify-center gap-5 mt-12 flex-wrap">

            <Link
              href="/create"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition"
            >
              Request Help
            </Link>

            <Link
              href="/requests"
              className="border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-xl font-semibold transition"
            >
              Become a Helper
            </Link>

          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-6 pb-24">

        <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
          <h2 className="text-4xl font-bold text-blue-600">1000+</h2>
          <p className="mt-2 text-gray-600">
            Lives Impacted
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
          <h2 className="text-4xl font-bold text-blue-600">500+</h2>
          <p className="mt-2 text-gray-600">
            Active Helpers
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
          <h2 className="text-4xl font-bold text-blue-600">99%</h2>
          <p className="mt-2 text-gray-600">
            Successful Requests
          </p>
        </div>

      </section>
    </main>
  );
}
