import { useState } from "react";

const CreateUrl = () => {
  const [redirect, setRedirect] = useState("");
  const [shortId, setShortId] = useState("");
  const [loading, setLoading] = useState(false);

  const createShortUrl = async () => {
    if (!redirect) return alert("Enter a URL");

    setLoading(true);

    const res = await fetch("http://localhost:3000/url", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ redirect }),
    });

    const data = await res.json();
    setShortId(data.shortId);
    setLoading(false);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-xl font-bold mb-4">Create Short URL</h2>

      <input
        type="text"
        placeholder="Enter long URL"
        value={redirect}
        onChange={(e) => setRedirect(e.target.value)}
        className="w-full border p-2 rounded mb-3"
      />

      <button
        onClick={createShortUrl}
        disabled={loading}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        {loading ? "Creating..." : "Shorten URL"}
      </button>

      {shortId && (
        <div className="mt-4">
          <p className="text-sm text-gray-600">Short URL:</p>
          <a
            href={`http://localhost:3000/url/${shortId}`}
            target="_blank"
            className="text-blue-600 underline"
          >
            http://localhost:3000/url/{shortId}
          </a>
        </div>
      )}
    </div>
  );
};

export default CreateUrl;
