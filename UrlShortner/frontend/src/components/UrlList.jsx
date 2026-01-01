import { useState } from "react";

const UrlList = () => {
  const [urls, setUrls] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchUrls = async () => {
    setLoading(true);
    const res = await fetch("http://localhost:3000/url");
    const data = await res.json();
    setUrls(data);
    setLoading(false);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">All URLs & Analytics</h2>
        <button
          onClick={fetchUrls}
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          {loading ? "Loading..." : "Fetch URLs"}
        </button>
      </div>

      {urls.length === 0 && (
        <p className="text-gray-500 text-sm">No URLs fetched yet.</p>
      )}

      <div className="space-y-4">
        {urls.map((url) => (
          <div key={url._id} className="border p-4 rounded">
            <p>
              <strong>Original:</strong>{" "}
              <a
                href={url.redirect}
                target="_blank"
                className="text-blue-600 underline"
              >
                {url.redirect}
              </a>
            </p>

            <p>
              <strong>Short:</strong>{" "}
              <a
                href={`http://localhost:3000/url/${url.shortid}`}
                target="_blank"
                className="text-blue-600 underline"
              >
                http://localhost:3000/url/{url.shortid}
              </a>
            </p>

            <p className="mt-2">
              <strong>Total Clicks:</strong> {url.visitCount}
            </p>

            <div className="mt-2">
              <strong>Visit History:</strong>
              <ul className="list-disc ml-5 text-sm text-gray-600">
                {url.visited.map((v) => (
                  <li key={v._id}>
                    {new Date(v.timestamp).toLocaleString()}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UrlList;
