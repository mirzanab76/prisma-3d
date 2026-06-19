import { Canvas, useFrame } from "@react-three/fiber";
import { RoundedBox, ContactShadows } from "@react-three/drei";
import { useRef, type MutableRefObject } from "react";
import * as THREE from "three";
import type { MousePosition } from "../../hooks/useMouse";

interface SceneProps {
  scrollRef: MutableRefObject<number>;
  mouseRef: MutableRefObject<MousePosition>;
}

const Product = ({ scrollRef, mouseRef }: SceneProps): JSX.Element => {
  const groupRef = useRef<THREE.Group>(null!);
  const materialRef = useRef<THREE.MeshStandardMaterial>(null!);

  useFrame((state, delta) => {
    const group = groupRef.current;
    if (!group) return;

    const s = THREE.MathUtils.clamp(scrollRef.current, 0, 1); // progress scroll
    const { x: mx, y: my } = mouseRef.current;

    // --- TARGET berdasarkan progress scroll ---
    // Hero (s=0): model di kanan & kecil. Products (s=1): model di tengah & besar.
    const targetX = THREE.MathUtils.lerp(1.7, 0, s);
    const targetY = THREE.MathUtils.lerp(0.2, 0, s);
    const targetScale = THREE.MathUtils.lerp(1, 1.8, s);

    // Pengaruh kursor memudar (fade) saat menjauh dari Hero.
    const cursorInfluence = 1 - s;
    const targetRotY = s * Math.PI * 2 + mx * 0.6 * cursorInfluence;
    const targetRotX = -my * 0.4 * cursorInfluence;

    // --- SMOOTHING: damp() = interpolasi mulus & independen dari frame rate ---
    group.position.x = THREE.MathUtils.damp(group.position.x, targetX, 4, delta);
    group.position.y = THREE.MathUtils.damp(group.position.y, targetY, 4, delta);

    const nextScale = THREE.MathUtils.damp(group.scale.x, targetScale, 4, delta);
    group.scale.setScalar(nextScale);

    group.rotation.y = THREE.MathUtils.damp(group.rotation.y, targetRotY, 4, delta);
    group.rotation.x = THREE.MathUtils.damp(group.rotation.x, targetRotX, 4, delta);

    // Efek "berdenyut" pada cahaya emissive agar terasa hidup.
    if (materialRef.current) {
      const t = state.clock.elapsedTime;
      materialRef.current.emissiveIntensity = 0.4 + Math.sin(t * 2) * 0.12;
    }
  });

  return (
    <group ref={groupRef}>
      <RoundedBox args={[1.6, 1.6, 1.6]} radius={0.18} smoothness={6} castShadow>
        <meshStandardMaterial
          ref={materialRef}
          color="#ec4899"
          emissive="#7c3aed"
          emissiveIntensity={0.4}
          metalness={0.65}
          roughness={0.2}
        />
      </RoundedBox>
    </group>
  );
};

const Scene = ({ scrollRef, mouseRef }: SceneProps): JSX.Element => {
  const cameraSettings = { position: [0, 0, 6] as const, fov: 45 };

  return (
    <Canvas shadows camera={cameraSettings} dpr={[1, 2]}>
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 5, 5]} intensity={1.2} castShadow />
      {/* Dua point light warna cyan & pink memberi kesan gradien pada permukaan model */}
      <pointLight position={[-5, -2, -5]} intensity={2.5} color="#22d3ee" />
      <pointLight position={[5, 2, 3]} intensity={2.5} color="#f472b6" />

      <Product scrollRef={scrollRef} mouseRef={mouseRef} />

      <ContactShadows position={[0, -1.7, 0]} opacity={0.35} blur={2.5} scale={12} />
    </Canvas>
  );
};

export default Scene;
