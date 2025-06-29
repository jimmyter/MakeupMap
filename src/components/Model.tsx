import { useGLTF, Center } from "@react-three/drei"
import { useRef, useState, useEffect } from "react";
import { Group, Mesh, MeshStandardMaterial } from "three";

useGLTF.preload('/Face_v1.glb')

// Reusable component for any mesh with hover effects
// Nodes hold the parts of the model and grabs the specific mesh from the model
function HoverableMesh({ 
    meshName, 
    nodes, 
    hoverColor = 0xff6b9d, 
    emissiveIntensity = 0.5 
}: {
    meshName: string;
    nodes: any;
    hoverColor?: number;
    emissiveIntensity?: number;
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
            if (hovered) {
                // Highlight the mesh when hovered
                meshMaterial.emissive.setHex(0x333333);
                meshMaterial.emissiveIntensity = emissiveIntensity;
                meshMaterial.color.setHex(hoverColor);
            } else {
                // Reset to original when not hovered
                meshMaterial.emissive.setHex(0x000000);
                meshMaterial.emissiveIntensity = 0;
                meshMaterial.color.setHex(0xffffff);
            }
        }
    }, [hovered, meshMaterial, hoverColor, emissiveIntensity]);
    
    if (!mesh) return null;
    
    return (
        <mesh
            position={mesh.position}
            rotation={mesh.rotation}
            scale={mesh.scale}

            // Pointer detection
            onPointerEnter={() => setHovered(true)}
            onPointerLeave={() => setHovered(false)}
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

export default function Model(){
    const group = useRef<Group>(null);
    const {nodes, materials, scene} = useGLTF("/Face_v1.glb")
    
    return(
        <Center>
            <group ref={group}>
                <primitive object={scene} />
                
                {/* Hoverable meshes - easy to add more! */}
                <HoverableMesh 
                    meshName="Nose" 
                    nodes={nodes} 
                    hoverColor={0xff6b9d}
                />
                
                <HoverableMesh 
                    meshName="Lips" 
                    nodes={nodes} 
                    hoverColor={0xff4444} 
                />
                
                <HoverableMesh 
                    meshName="Eyebrow_Left" 
                    nodes={nodes} 
                    hoverColor={0x4444ff} 
                />
                
                <HoverableMesh 
                    meshName="Eyeline_Left" 
                    nodes={nodes} 
                    hoverColor={0x4444ff} 
                />
                
                <HoverableMesh 
                    meshName="Eyes" 
                    nodes={nodes} 
                    hoverColor={0x44ff44}
                />
                <HoverableMesh 
                    meshName="Hair" 
                    nodes={nodes} 
                    hoverColor={0x44ff44}
                />
            </group>
        </Center>
    )
}