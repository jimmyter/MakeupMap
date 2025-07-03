"use client";

import { useState } from "react";
import React from "react";

import Navbar from "@/components/Navbar";
import Scene from "@/components/Scene";
import Footer from "@/components/Footer";

import InfoPageEyes from "@/infopages/InfoPageEyes";
import InfoPageLips from "@/infopages/InfoPageLips";
import InfoPageNose from "@/infopages/InfoPageNose";
import InfoPageEyebrow from "@/infopages/InfoPagesEyebrow";

// Types for part keys and info
// Dont forget to update the cont partCompononent 
export type PartKey = "Nose" | "Lips" | "Eyebrow_Left" | "Eyeline_Left" | "Eyes";

export default function Home() {
  // State for the currently selected part of the model.
  // Changing this will update the InfoPanel only.
  // TODO: Add a starting page.
  const [selectedPartKey, setSelectedPartKey] = useState<PartKey>("Nose");

  // Map part keys to infopage components
  // Dont forget to update the PartKey
  const partComponentMap: Record<PartKey, React.ReactNode> = {
    Nose: <InfoPageNose />,
    Lips: <InfoPageLips />,
    Eyebrow_Left: <InfoPageEyebrow />,
    Eyeline_Left: <InfoPageEyebrow />, // TODO: Make another page for Eyeline
    Eyes: <InfoPageEyes />,
  };

  // Handler to update the selected part.
  // Passed down to the 3D model and called when a part is clicked.
  const handleSelectPart = (partKey: PartKey) => setSelectedPartKey(partKey);

  return (
    <>
      <Navbar />
      <main className="flex flex-col md:flex-row h-screen overflow-hidden">
        <div className="w-full md:w-1/3 sticky h-4/5 md:h-full border-r-1 object-cover">
         <h1 className="text-center">3D Model</h1>
          {/* Pass the handler to the scene/model */}
          <Scene onSelectPart={handleSelectPart} selectedPartKey={selectedPartKey} />
         <div>3D Model</div>
        </div>
        <div className="w-full md:w-2/3 md:h-full overflow-y-auto bg-white">
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
