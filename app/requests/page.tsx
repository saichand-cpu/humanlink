"use client";

import { useEffect, useState } from "react";

type RequestItem = {
  id: string;
  title: string;
  description: string;
  category: string;
  status: string;
  createdAt: string;
};

export default function RequestsPage() {
  const [requests, setRequests] = useState<RequestItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchRequests() {
      try {
        const res = await fetch("/api/requests/list");
        const data = await res.json();
        setRequests(data.requests || []);
      } catch (err) {
        console.error("Failed to load requests", err);
      } finally {
        setLoading(false);
      }
    }

    fetchRequests();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">

      {/* Header */}
      <div className="px-6 py-4 bg-white shadow-sm flex justify-between items-center">
        <h1 className="text-xl font-bold text-blue-600">Help Requests</h1>
        <a
          href="/requests/create"
          className="px-4 py-2 bg-blue-600 text-white rounded-md"
        >
          + Post Request
        </a>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-4 py-6">

        {loading ? (
          <p className="text-gray-500">Loading requests...</p>
        ) : requests.length === 0 ? (
          <p className="text-gray-500">No requests found. Be the first to help!</p>
        ) : (
          <div className="space-y-4">
            {requests.map((req) => (
              <div
                key={req.id}
                className="bg-white rounded-xl shadow p-4 border"
              >
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold text-lg">{req.title}</h2>
                  <span
                    className={`text-xs px-2 py-1 rounded-full ${
                      req.status === "open"
                        ? "bg-green-100 text-green-700"
                        : "bg-gray-200 text-gray-600"
                    }`}
                  >
                    {req.status}
                  </span>
                </div>

                <p className="text-gray-600 mt-2">{req.description}</p>

                <div className="flex justify-between mt-3 text-sm text-gray-500">
                  <span>Category: {req.category}</span>
                  <span>
                    {new Date(req.createdAt).toLocaleDateString()}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </div>
  );
}
