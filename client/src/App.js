
import React, { useState } from "react";
import "tailwindcss/tailwind.css";

const App = () => {
  const [subscriptions, setSubscriptions] = useState([
    { id: 1, name: "Netflix", status: "active" },
    { id: 2, name: "Spotify", status: "active" },
  ]);

  const toggleSubscriptionStatus = (id) => {
    setSubscriptions(
      subscriptions.map((sub) =>
        sub.id === id
          ? { ...sub, status: sub.status === "active" ? "paused" : "active" }
          : sub
      )
    );
  };

  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-light-blue-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <h1 className="text-4xl font-bold text-center text-indigo-600 mb-8">
            Subscriptions
          </h1>
          <ul>
            {subscriptions.map((sub) => (
              <li
                key={sub.id}
                className="flex justify-between items-center mb-4"
              >
                <div className="text-xl font-semibold">
                  {sub.name} -{" "}
                  <span
                    className={`${
                      sub.status === "active"
                        ? "text-green-500"
                        : "text-red-500"
                    }`}
                  >
                    {sub.status}
                  </span>
                </div>
                <button
                  onClick={() => toggleSubscriptionStatus(sub.id)}
                  className={`px-4 py-2 rounded text-white ${
                    sub.status === "active"
                      ? "bg-red-500 hover:bg-red-700"
                      : "bg-green-500 hover:bg-green-700"
                  }`}
                >
                  {sub.status === "active" ? "Pause" : "Activate"}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default App;
