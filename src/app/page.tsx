"use client";

import { useState } from "react";
import { PageType } from "../types/types";
import { HomeBody } from "./components/HomeBody";

export default function Home() {
  const [currentPage, setCurrentPage] = useState<PageType>(PageType.Home);

  const renderHeader = () => {
    switch (currentPage) {
      case PageType.Hello:
        return (
          <div className="flex flex-col items-center gap-4">
            <h1 className="text-4xl font-bold mb-8">Hello</h1>
          </div>
        );
      case PageType.World:
        return (
          <div className="flex flex-col items-center gap-4">
            <h1 className="text-4xl font-bold mb-8">World</h1>
          </div>
        );
      default:
        // home 타입 페이지로 넘어간다.
        return (
          <div className="flex flex-col items-center gap-4">
            <h1 className="text-4xl font-bold mb-8">Param Measurer</h1>
            <HomeBody setCurrentPage={setCurrentPage}></HomeBody>
          </div>
        );
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="relative flex flex-col place-items-center">
        {renderHeader()}

        {currentPage !== PageType.Home && (
          <button
            onClick={() => setCurrentPage(PageType.Home)}
            className="mt-8 px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition-colors"
          >
            Back to Home
          </button>
        )}
      </div>
    </main>
  );
}
