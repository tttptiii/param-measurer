"use client";

import { useState } from "react";

type PageType = "home" | "hello" | "world";

export default function Home() {
  const [currentPage, setCurrentPage] = useState<PageType>("home");

  const renderContent = () => {
    switch (currentPage) {
      case "hello":
        return <div className="text-3xl font-bold">Hello</div>;
      case "world":
        return <div className="text-3xl font-bold">World</div>;
      default:
        return (
          <div className="flex flex-col items-center gap-4">
            <h1 className="text-4xl font-bold mb-8">Param Measurer</h1>
            <button
              onClick={() => setCurrentPage("hello")}
              className="px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
            >
              Hello Page
            </button>
            <button
              onClick={() => setCurrentPage("world")}
              className="px-6 py-3 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors"
            >
              World Page
            </button>
          </div>
        );
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="relative flex flex-col place-items-center">
        {renderContent()}

        {currentPage !== "home" && (
          <button
            onClick={() => setCurrentPage("home")}
            className="mt-8 px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition-colors"
          >
            Back to Home
          </button>
        )}
      </div>
    </main>
  );
}
