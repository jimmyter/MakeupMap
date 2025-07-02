"use client";

import Footer from "@/components/Footer";
import React from "react";
import Navbar from "@/components/Navbar";
import Scene from "@/components/Scene";
import { useState } from "react";
import InfoPageEyes from "@/infopages/InfoPageEyes";
import InfoPageLips from "@/infopages/InfoPageLips";
import InfoPageNose from "@/infopages/InfoPageNose";
import InfoPageEyebrow from "@/infopages/InfoPagesEyebrow";

// Types for part keys and info
export type PartKey = "Nose" | "Lips" | "Eyebrow_Left" | "Eyeline_Left" | "Eyes" | "Hair";

export default function Home() {
  // State for the currently selected part of the model.
  // Changing this will update the InfoPanel only.
  const [selectedPartKey, setSelectedPartKey] = useState<PartKey>("Nose");

  // Map part keys to infopage components
  const partComponentMap: Record<PartKey, React.ReactNode> = {
    Nose: <InfoPageNose />,
    Lips: <InfoPageLips />,
    Eyebrow_Left: <InfoPageEyebrow />,
    Eyeline_Left: <InfoPageEyebrow />,
    Eyes: <InfoPageEyes />,
    Hair: <div className="p-20"><h2 className="text-2xl font-bold mb-4">Hair</h2><p>No info page for hair yet.</p></div>,
  };

  // Handler to update the selected part.
  // Passed down to the 3D model and called when a part is clicked.
  const handleSelectPart = (partKey: PartKey) => setSelectedPartKey(partKey);

  return (
    <>
      <Navbar />
      <main className="flex h-screen overflow-hidden">
        <div className="w-1/3 sticky h-full border-r-1 object-cover">
          {/* Pass the handler to the scene/model */}
          <Scene onSelectPart={handleSelectPart} />
        </div>
        <div className="w-2/3 h-full overflow-y-auto bg-white">
          {/* Render the infopage component for the selected part with fade-in */}
          <div key={selectedPartKey} className="fade-in h-full">
            {partComponentMap[selectedPartKey]}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
