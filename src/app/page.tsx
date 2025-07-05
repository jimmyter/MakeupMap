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
      <div className="bg-gradient-to-br from-pink-100 via-white to-purple-100 min-h-screen">
        <Navbar />
        <div className="flex flex-row w-full px-4 md:px-8 mt-5">
          {/* Sticky 3D Model */}
          <div className="hidden md:block mr-0 md:mr-8" >
            {/*TODO top-100px might not be the most resposive implementation*/}
            <div className=" sticky top-[100px] bg-white rounded-3xl object-cover border border-pink-100 flex flex-col justify-between h-[30em]">
              
                <Scene onSelectPart={handleSelectPart} selectedPartKey={selectedPartKey} />
              
              <div className="p-6 bg-gradient-to-r from-pink-100 to-purple-100 text-black rounded-b-3xl border-t border-pink-200 shadow-inner">
                <h3 className="text-xl font-bold mb-2">Interactive 3d Model</h3>
                <p className="text-black">Explore different parts of the model by clicking on them.</p>
              </div>
            </div>
          </div>
          {/* Info Panel */}
          <div className="flex-1">
            <div key={selectedPartKey} className="fade-in h-full">
              {partComponentMap[selectedPartKey]}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
