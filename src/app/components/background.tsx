"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export function Background() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.set(0, 8, 10);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    mountRef.current?.appendChild(renderer.domElement);

    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

    const gridCount = 3;
    const gridSize = 100;
    const divisions = 50;
    const gridSpacing = gridSize;
    const planes: THREE.Mesh[] = [];

    const originalPositions: Float32Array[] = [];

    for (let i = 0; i < gridCount; i++) {
      const geometry = new THREE.PlaneGeometry(gridSize, gridSize, divisions, divisions);
      geometry.rotateX(-Math.PI / 2);

      const material = new THREE.MeshBasicMaterial({
        color: "#9eff02",
        wireframe: true,
        transparent: true,
        opacity: 0.4,
      });

      const plane = new THREE.Mesh(geometry, material);
      plane.position.z = -i * gridSpacing;
      scene.add(plane);
      planes.push(plane);

      // Guardar copia original de los vértices
      originalPositions.push(geometry.attributes.position.array.slice() as Float32Array);
    }

    let speed = 0.03;

    const animate = () => {
      camera.position.z -= speed;
      camera.lookAt(camera.position.x, 0, camera.position.z - 10);

      planes.forEach((plane, index) => {
        plane.position.z += speed;
        if (plane.position.z > camera.position.z + gridSpacing) {
          plane.position.z -= gridSpacing * gridCount;
        }

        // Interacción con vértices
        const geometry = plane.geometry as THREE.PlaneGeometry;
        const positions = geometry.attributes.position.array as Float32Array;
        const original = originalPositions[index];

        for (let i = 0; i < positions.length; i += 3) {
          const x = positions[i];
          const z = positions[i + 2];

          // Convertimos la posición del vértice a world position
          const vertexWorldPos = new THREE.Vector3(x, 0, z).applyMatrix4(plane.matrixWorld);
          const dist = vertexWorldPos.distanceTo(mouseWorld);

          // Si está cerca del mouse, levantar
          if (dist < 5) {
            positions[i + 1] = Math.sin((5 - dist) * 0.5) * 1.5;
          } else {
            // Volver suavemente a la posición original
            const originalY = original[i + 1];
            positions[i + 1] += (originalY - positions[i + 1]) * 0.1;
          }
        }

        geometry.attributes.position.needsUpdate = true;
      });

      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };

    // Mouse a coordenadas 3D
    let mouseWorld = new THREE.Vector3();

    const onMouseMove = (event: MouseEvent) => {
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

      raycaster.setFromCamera(mouse, camera);
      const plane = new THREE.Plane(new THREE.Vector3(0, 1, 0), 0); // Plano XZ
      const intersectPoint = new THREE.Vector3();
      raycaster.ray.intersectPlane(plane, intersectPoint);
      mouseWorld = intersectPoint;
    };

    window.addEventListener("mousemove", onMouseMove);

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", handleResize);

    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", onMouseMove);
      mountRef.current?.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <section
      className="fixed bg-gradient-to-b from-neutral-950 via-neutral-900 to-transparent bg-green top-0 left-0 w-full h-full -z-10 pointer-events-none blur-sm"
      ref={mountRef}
    />
  );
}
