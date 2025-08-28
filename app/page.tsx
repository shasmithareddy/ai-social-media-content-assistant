"use client";

import { useState } from "react";
import Image from "next/image";

export default function HomePage() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [score, setScore] = useState<number | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      setPreview(URL.createObjectURL(file));
      setScore(null); // reset score when new file selected
    }
  };

  const handleAnalyze = () => {
    if (!selectedFile) return;

    // 🔮 Mock AI score – replace with API call to backend/AI model
    const fakeScore = Math.floor(Math.random() * 100) + 1;
    setScore(fakeScore);
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-slate-900 to-slate-800 text-white p-6">
      <div className="max-w-2xl w-full text-center">
        <h1 className="text-4xl font-bold mb-4">✨ AI Post-Worthiness Detector</h1>
        <p className="text-gray-300 mb-8">
          Upload an image and let our AI tell you how post-worthy it is for
          social media 🚀
        </p>

        <div className="bg-slate-700/40 border border-slate-600 rounded-2xl p-6 shadow-lg">
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="mb-4 block w-full text-sm text-gray-300 file:mr-4 file:py-2 file:px-4
            file:rounded-full file:border-0
            file:text-sm file:font-semibold
            file:bg-indigo-600 file:text-white
            hover:file:bg-indigo-700 cursor-pointer"
          />

          {preview && (
            <div className="mb-4">
              <Image
                src={preview}
                alt="Preview"
                width={400}
                height={400}
                className="rounded-xl mx-auto shadow-md"
              />
            </div>
          )}

          <button
            onClick={handleAnalyze}
            disabled={!selectedFile}
            className="px-6 py-2 rounded-full bg-indigo-600 hover:bg-indigo-700 
            disabled:opacity-50 disabled:cursor-not-allowed font-medium"
          >
            Analyze Post-Worthiness
          </button>

          {score !== null && (
            <div className="mt-6">
              <p className="text-xl font-semibold">
                ⭐ Post-Worthiness Score:{" "}
                <span className="text-indigo-400">{score}%</span>
              </p>
              <p className="mt-2 text-gray-400">
                {score > 70
                  ? "🔥 High engagement potential! Looks very post-worthy."
                  : score > 40
                  ? "⚠️ Moderate appeal. Might need better caption/edits."
                  : "❌ Low engagement potential. Consider another image."}
              </p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
