'use client';

import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera, OrbitControls, Environment } from "@react-three/drei";
import Model from "./Model";
import type { PartKey } from "@/app/page";

interface SceneProps {
  onSelectPart: (partKey: PartKey) => void;
  selectedPartKey: PartKey;
}

export default function Scene({ onSelectPart, selectedPartKey }: SceneProps){
    return(
        // className removed to be changed in page.tsx
        // or not
        // tailwind seems to get stuck and keeps styling
        // changing parts of the inner styling sometimes makes the rest of the changes update

        <div className="w-full h-full flex">
            <Canvas
                camera={{ position: [0, 0, 0], fov: 50 }}
                style={{ width: '100%', height: '100%', maxWidth: 800, maxHeight: 600 }}
            >
                {/* Lighting */}
                <ambientLight intensity={0.5} />
                <directionalLight 
                    position={[10, 10, 5]} 
                    intensity={1} 
                    castShadow 
                />
                <directionalLight 
                    position={[-10, -10, -5]} 
                    intensity={0.5} 
                />
                
                {/* Environment for better lighting */}
                <Environment preset="studio" />

                {/* Camera and Controls */}
                <PerspectiveCamera makeDefault position={[0, 0, 0.5]} />
                <OrbitControls 
                    // Enable zoom and fine tune min and max distance
                    // Might break with position or model change 
                    // Check min/maxZoom
                    enableZoom={true}
                    minDistance={0.4}
                    maxDistance={0.5}

                    enablePan={false}
                    enableRotate={true}
                    autoRotate={false}
                />
                
                {/* Model */}
                <Model onSelectPart={onSelectPart} selectedPartKey={selectedPartKey}/>
            </Canvas>
        </div>
    )
}