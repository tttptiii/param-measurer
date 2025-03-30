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
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="relative flex flex-col place-items-center">
        {/* Header */}
        <div className="flex flex-col items-center gap-4">
          <h1 className="text-4xl font-bold mb-8">{currentPage}</h1>
        </div>

        {/* Body */}
        {renderBody()}
      </div>
    </main>
  );
}
