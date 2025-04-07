'use client'

import * as THREE from 'three'

export default function applyFog(scene: THREE.Scene): void {
  const fogColor = new THREE.Color('#1a001f') // Color púrpura oscuro (puedes cambiarlo)
  const near = 10
  const far = 60

  scene.fog = new THREE.Fog(fogColor, near, far)
}
