"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function CreateRequestPage() {
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("general");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/requests/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          description,
          category,
          userId: "demo-user-id", // later replace with auth user
        }),
      });

      if (res.ok) {
        router.push("/requests");
      } else {
        alert("Failed to create request");
      }
    } catch (err) {
      console.error(err);
      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">

      <form
        onSubmit={handleSubmit}
        className="bg-white w-full max-w-xl p-6 rounded-xl shadow"
      >

        <h1 className="text-2xl font-bold text-blue-600 mb-6">
          Create Help Request
        </h1>

        {/* Title */}
        <input
          type="text"
          placeholder="What do you need help with?"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full border p-3 rounded-md mb-4"
          required
        />

        {/* Description */}
        <textarea
          placeholder="Describe your problem in detail..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full border p-3 rounded-md mb-4 h-32"
          required
        />

        {/* Category */}
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full border p-3 rounded-md mb-6"
        >
          <option value="general">General</option>
          <option value="tech">Tech</option>
          <option value="education">Education</option>
          <option value="health">Health</option>
          <option value="career">Career</option>
        </select>

        {/* Submit */}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700"
        >
          {loading ? "Posting..." : "Post Request"}
        </button>

      </form>
    </div>
  );
}
