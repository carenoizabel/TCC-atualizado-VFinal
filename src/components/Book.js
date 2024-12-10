import React from 'react';
import { useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three';
import * as THREE from 'three';

export default function Book({ book, position }) {
  const texture = useLoader(TextureLoader, `/assets/books/${book.image}`);

  return (
    <mesh position={position}>
      <boxBufferGeometry args={[1, 1.5, 0.1]} />
      <meshStandardMaterial map={texture} />
    </mesh>
  );
}
