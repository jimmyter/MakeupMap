import { useGLTF, Center } from "@react-three/drei"
import { useRef, useState, useEffect } from "react";
import { Group, Mesh, MeshStandardMaterial } from "three";
import type { PartKey } from "@/app/page";

useGLTF.preload('/models/Face_v2.glb')

// Reusable component for any mesh with hover effects
// Nodes hold the parts of the model and grabs the specific mesh from the model
function HoverableMesh({ 
    meshName, 
    nodes, 
    hoverColor = 0xff6b9d, 
    emissiveIntensity = 0.5,
    onClick,
    selected
}: {
    meshName: import("@/app/page").PartKey;
    nodes: any;
    hoverColor?: number;
    emissiveIntensity?: number;
    onClick?: (meshName: import("@/app/page").PartKey) => void;
    selected?: boolean;
}) {
    const [hovered, setHovered] = useState(false);
    const [meshMaterial, setMeshMaterial] = useState<MeshStandardMaterial | null>(null);
    
    const mesh = nodes[meshName] as Mesh;
    
    useEffect(() => {
        if (mesh && mesh.material) {
            // Clone the original material to avoid affecting other meshes
            const originalMaterial = mesh.material as MeshStandardMaterial;
            const clonedMaterial = originalMaterial.clone();
            setMeshMaterial(clonedMaterial);
            
            // Apply the cloned material to the mesh
            mesh.material = clonedMaterial;
        }
    }, [mesh]);
    
    useEffect(() => {
        if (meshMaterial) {
            if (hovered || selected) {
                // Highlight the mesh when hovered or selected
                meshMaterial.emissive.setHex(0x333333);
                meshMaterial.emissiveIntensity = emissiveIntensity;
                meshMaterial.color.setHex(hoverColor);
            } else {
                // Reset to original when not hovered or selected
                meshMaterial.emissive.setHex(0x000000);
                meshMaterial.emissiveIntensity = 0;
                meshMaterial.color.setHex(0xffffff);
            }
        }
    }, [hovered, selected, meshMaterial, hoverColor, emissiveIntensity]);
    
    // Dont think I need this, tbh
    
    if (!mesh) return null;
    
    return (
        <mesh
            position={mesh.position}
            rotation={mesh.rotation}
            scale={mesh.scale}

            // Pointer detection
            onPointerEnter={() => setHovered(true)}
            onPointerLeave={() => setHovered(false)}
            onClick={() => onClick && onClick(meshName as import("@/app/page").PartKey)}
        >   
            {/* Creating a new invisible mesh from the original*/}
            <bufferGeometry {...mesh.geometry} />
            <meshBasicMaterial 
                transparent 
                opacity={0}
                // need it to not visually interfere with the scene
                colorWrite={false}
                depthWrite={false}
            />
        </mesh>
    );
}

interface ModelProps {
  onSelectPart: (partKey: PartKey) => void;
  selectedPartKey: PartKey;
}

export default function Model({ onSelectPart, selectedPartKey }: ModelProps){
    const group = useRef<Group>(null);
    const {nodes, materials, scene} = useGLTF("/models/Face_v2.glb")
    
    return(
        <Center>
            <group ref={group}>
                <primitive object={scene} />
                
                {/* Hoverable meshes*/}
                <HoverableMesh 
                    meshName="Blush_Left" 
                    nodes={nodes} 
                    hoverColor={0xff6b9d}
                    onClick={onSelectPart}
                    selected={selectedPartKey === "Blush_Left"}
                />
                <HoverableMesh 
                    meshName="Contour_Left" 
                    nodes={nodes} 
                    hoverColor={0xff6b9d}
                    onClick={onSelectPart}
                    selected={selectedPartKey === "Contour_Left"}
                />
                <HoverableMesh 
                    meshName="Contour_Upper" 
                    nodes={nodes} 
                    hoverColor={0xff6b9d}
                    onClick={onSelectPart}
                    selected={selectedPartKey === "Contour_Upper"}
                />
                
                <HoverableMesh 
                    meshName="Eyebrow_Left" 
                    nodes={nodes} 
                    hoverColor={0x4444ff} 
                    onClick={onSelectPart}
                    selected={selectedPartKey === "Eyebrow_Left"}
                />
                
                <HoverableMesh 
                    meshName="Eyeline_Left" 
                    nodes={nodes} 
                    hoverColor={0x4444ff} 
                    onClick={onSelectPart}
                    selected={selectedPartKey === "Eyeline_Left"}
                />
                
                <HoverableMesh 
                    meshName="Nose" 
                    nodes={nodes} 
                    hoverColor={0xff6b9d}
                    onClick={onSelectPart}
                    selected={selectedPartKey === "Nose"}
                />
                <HoverableMesh 
                    meshName="Lipliner" 
                    nodes={nodes} 
                    hoverColor={0xff4444} 
                    onClick={onSelectPart}
                    selected={selectedPartKey === "Lipliner"}
                />

                <HoverableMesh 
                    meshName="Lips" 
                    nodes={nodes} 
                    hoverColor={0xff4444} 
                    onClick={onSelectPart}
                    selected={selectedPartKey === "Lips"}
                />
                
                <HoverableMesh 
                    meshName="Eyes" 
                    nodes={nodes} 
                    hoverColor={0x44ff44}
                    onClick={onSelectPart}
                    selected={selectedPartKey === "Eyes"}
                />
                
            </group>
        </Center>
    )
}