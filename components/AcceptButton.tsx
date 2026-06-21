"use client";

import { useState } from "react";

export default function AcceptButton({
  requestId,
  helperId,
  onSuccess,
}: {
  requestId: string;
  helperId: string;
  onSuccess?: () => void;
}) {
  const [loading, setLoading] = useState(false);

  const handleAccept = async () => {
    setLoading(true);

    try {
      const res = await fetch("/api/requests/accept", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          requestId,
          helperId,
        }),
      });

      if (res.ok) {
        alert("Request accepted!");
        onSuccess?.();
      } else {
        alert("Failed to accept request");
      }
    } catch (error) {
      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handleAccept}
      disabled={loading}
      className="bg-green-600 text-white px-3 py-1 rounded text-sm"
    >
      {loading ? "Accepting..." : "🤝 Accept"}
    </button>
  );
}
