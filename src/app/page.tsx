"use client";

import { useState } from "react";
import { PageType } from "../types/types";
import { HomeBody } from "./components/HomeBody";
import { ColorCustomizer } from "./components/ColorCustomizer";
import { PitchCustomizer } from "./components/PitchCustomizer";

export default function Home() {
  const [currentPage, setCurrentPage] = useState<PageType>(PageType.Home);

  const renderBody = () => {
    switch (currentPage) {
      case PageType.ColorCustomizer:
        return (
          <div className="flex flex-col items-center gap-4">
            <ColorCustomizer setCurrentPage={setCurrentPage}></ColorCustomizer>
          </div>
        );
      case PageType.PitchCustomizer:
        return (
          <div className="flex flex-col items-center gap-4">
            <PitchCustomizer setCurrentPage={setCurrentPage}></PitchCustomizer>
          </div>
        );
      default:
        // home 타입 페이지로 넘어간다.
        return (
          <div className="flex flex-col items-center gap-4">
            <HomeBody setCurrentPage={setCurrentPage}></HomeBody>
          </div>
        );
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Header */}
        <header className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Param Measurer</h1>
          <p className="text-gray-600 text-lg">Customize and measure your parameters with ease</p>
        </header>

        {/* Navigation */}
        <nav className="flex justify-center gap-4 mb-12">
          <button
            onClick={() => setCurrentPage(PageType.Home)}
            className={`px-4 py-2 rounded-full transition-all ${
              currentPage === PageType.Home
                ? 'bg-blue-600 text-white shadow-lg'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Home
          </button>
          <button
            onClick={() => setCurrentPage(PageType.ColorCustomizer)}
            className={`px-4 py-2 rounded-full transition-all ${
              currentPage === PageType.ColorCustomizer
                ? 'bg-blue-600 text-white shadow-lg'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Color
          </button>
          <button
            onClick={() => setCurrentPage(PageType.PitchCustomizer)}
            className={`px-4 py-2 rounded-full transition-all ${
              currentPage === PageType.PitchCustomizer
                ? 'bg-blue-600 text-white shadow-lg'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Pitch
          </button>
        </nav>

        {/* Body */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          {renderBody()}
        </div>
      </div>
    </main>
  );
}
