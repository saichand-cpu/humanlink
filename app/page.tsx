"use client";

import { useEffect, useState } from "react";

type HelpRequest = {
  id: string;
  title: string;
  description: string;
  category: string;
  status: string;
  karmaReward: number;
  requester: {
    id: string;
    name: string;
    karmaPoints: number;
  };
};

export default function Home() {
  const [requests, setRequests] = useState<HelpRequest[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/requests/all")
      .then((res) => res.json())
      .then((data) => {
        setRequests(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) {
    return <div className="p-6">Loading HumanLink feed...</div>;
  }

  return (
    <main className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">🤝 HumanLink Feed</h1>

      <div className="space-y-4">
        {requests.map((req) => (
          <div
            key={req.id}
            className="border p-4 rounded-lg shadow-sm"
          >
            <h2 className="text-lg font-semibold">{req.title}</h2>
            <p className="text-gray-600">{req.description}</p>

            <div className="mt-2 text-sm text-gray-500">
              Category: {req.category} | Status: {req.status}
            </div>

            <div className="mt-2 text-sm">
              👤 {req.requester.name} (⭐ {req.requester.karmaPoints})
            </div>

            <div className="mt-2 font-medium">
              Reward: {req.karmaReward} ⭐
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
