"use client";

import React from "react";
import Link from "next/link";

const Page: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-slate-900 to-slate-800 text-white">
      <h1 className="text-4xl font-bold mb-6">✨ AI Social Media Assistant</h1>
      <p className="text-gray-400 mb-10 text-center max-w-lg">
        Manage your posts smarter. Upload images, get AI-powered feedback,
        schedule posts, and track engagement — all in one place.
      </p>

      {/* Navigation Button */}
      <Link
        href="/dashboard"
        className="px-6 py-3 rounded-full bg-indigo-600 hover:bg-indigo-700 transition font-semibold shadow-lg"
      >
        Go to Dashboard 🚀
      </Link>
    </div>
  );
};

export default Page;
