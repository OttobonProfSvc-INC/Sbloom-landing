import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useTexture, Float, PresentationControls } from '@react-three/drei';
import * as THREE from 'three';

const EcosystemModel = () => {
  // Load textures
  const petalsTex = useTexture('/petals.png');
  const outerTex = useTexture('/outer.png');
  
  // Need to set correct color space for textures in modern Three.js
  petalsTex.colorSpace = THREE.SRGBColorSpace;
  outerTex.colorSpace = THREE.SRGBColorSpace;

  const petalsRef = useRef<THREE.Mesh>(null);
  const outerRef = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (petalsRef.current) {
      // Petals rotate right (clockwise)
      petalsRef.current.rotation.z -= delta * 0.15;
    }
    if (outerRef.current) {
      // Outer circle rotates left (counter-clockwise)
      outerRef.current.rotation.z += delta * 0.1;
    }
  });

  return (
    <group>
      {/* Outer Circle Layer - pushed slightly back */}
      <mesh ref={outerRef} position={[0, 0, -0.5]}>
        <planeGeometry args={[6, 6]} />
        <meshBasicMaterial 
          map={outerTex} 
          transparent={true} 
          side={THREE.DoubleSide}
          depthWrite={false}
        />
      </mesh>

      {/* Inner Petals Layer - hovering slightly in front */}
      <mesh ref={petalsRef} position={[0, 0, 0.5]}>
        <planeGeometry args={[6, 6]} />
        <meshBasicMaterial 
          map={petalsTex} 
          transparent={true} 
          side={THREE.DoubleSide}
          depthWrite={false}
        />
      </mesh>
    </group>
  );
};

export const Hero3D = () => {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div style={{ width: '100%', height: '100%', minHeight: '500px' }} />;
  }

  return (
    <div style={{ width: '100%', height: '100%', minHeight: '500px', cursor: 'grab' }}>
      <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
        <ambientLight intensity={1} />
        
        {/* PresentationControls gives it a 3D interactive feel where users can slightly rotate/tilt the diagram */}
        <PresentationControls 
          global={false} 
          cursor={true}
          snap={true} 
          speed={1} 
          zoom={1} 
          rotation={[0.3, -0.4, 0]} 
          polar={[-0.2, 0.2]} 
          azimuth={[-0.5, 0.5]}
        >
          <Float
            speed={2} 
            rotationIntensity={0.2} 
            floatIntensity={0.5}
          >
            <React.Suspense fallback={null}>
              <EcosystemModel />
            </React.Suspense>
          </Float>
        </PresentationControls>
      </Canvas>
    </div>
  );
};
