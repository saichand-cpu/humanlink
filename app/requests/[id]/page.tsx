"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";

type RequestItem = {
  id: string;
  title: string;
  description: string;
  category: string;
  status: string;
  createdAt: string;
};

export default function RequestDetailPage() {
  const { id } = useParams();
  const router = useRouter();

  const [request, setRequest] = useState<RequestItem | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchRequest() {
      try {
        const res = await fetch("/api/requests/list");
        const data = await res.json();

        const found = (data.requests || []).find(
          (r: RequestItem) => r.id === id
        );

        setRequest(found || null);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    fetchRequest();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading...
      </div>
    );
  }

  if (!request) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <p className="text-gray-500">Request not found</p>
        <button
          onClick={() => router.push("/requests")}
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md"
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-10">

      <div className="max-w-2xl mx-auto bg-white p-6 rounded-xl shadow">

        {/* Back */}
        <button
          onClick={() => router.push("/requests")}
          className="text-blue-600 mb-4"
        >
          ← Back
        </button>

        {/* Title */}
        <h1 className="text-2xl font-bold">{request.title}</h1>

        {/* Meta */}
        <div className="flex justify-between text-sm text-gray-500 mt-2">
          <span>Category: {request.category}</span>
          <span>Status: {request.status}</span>
        </div>

        {/* Description */}
        <p className="mt-6 text-gray-700 leading-relaxed">
          {request.description}
        </p>

        {/* Timestamp */}
        <p className="mt-6 text-xs text-gray-400">
          Created on {new Date(request.createdAt).toLocaleString()}
        </p>

        {/* Future CTA */}
        <button className="mt-6 w-full bg-green-600 text-white py-3 rounded-md hover:bg-green-700">
          Offer Help (coming soon)
        </button>

      </div>
    </div>
  );
}
