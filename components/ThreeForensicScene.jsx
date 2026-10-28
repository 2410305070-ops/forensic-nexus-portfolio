'use client';

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function ThreeForensicScene() {
  const mountRef = useRef(null);

  useEffect(() => {
    const currentMount = mountRef.current;
    if (!currentMount) return;

    // Scene Setup
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x07080b, 0.05);

    const camera = new THREE.PerspectiveCamera(
      60,
      currentMount.clientWidth / currentMount.clientHeight,
      0.1,
      1000
    );
    camera.position.set(0, 2.5, 6.5);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    currentMount.appendChild(renderer.domElement);

    // 1. Cyber Grid Floor
    const gridHelper = new THREE.GridHelper(30, 30, 0x00f0ff, 0x1e293b);
    gridHelper.position.y = -1;
    scene.add(gridHelper);

    // 2. Holographic Evidence Cube
    const cubeGeo = new THREE.BoxGeometry(1.6, 1.6, 1.6);
    const cubeMat = new THREE.MeshBasicMaterial({
      color: 0x00f0ff,
      wireframe: true,
      transparent: true,
      opacity: 0.8
    });
    const cubeMesh = new THREE.Mesh(cubeGeo, cubeMat);
    cubeMesh.position.set(0, 0.6, 0);
    scene.add(cubeMesh);

    // Inner glowing core
    const coreGeo = new THREE.OctahedronGeometry(0.7, 0);
    const coreMat = new THREE.MeshBasicMaterial({
      color: 0x3b82f6,
      wireframe: false,
      transparent: true,
      opacity: 0.6
    });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    cubeMesh.add(coreMesh);

    // 3. Floating Forensic Particle Cloud
    const particleCount = 200;
    const particleGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 12;
      positions[i + 1] = Math.random() * 6 - 0.5;
      positions[i + 2] = (Math.random() - 0.5) * 12;
    }

    particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const particleMat = new THREE.PointsMaterial({
      size: 0.04,
      color: 0x00f0ff,
      transparent: true,
      opacity: 0.7
    });
    const particleSystem = new THREE.Points(particleGeo, particleMat);
    scene.add(particleSystem);

    // 4. Trajectory Laser Lines
    const points = [];
    points.push(new THREE.Vector3(-4, 4, -4));
    points.push(new THREE.Vector3(0, 0.6, 0));
    points.push(new THREE.Vector3(4, -1, 3));

    const lineGeo = new THREE.BufferGeometry().setFromPoints(points);
    const lineMat = new THREE.LineBasicMaterial({
      color: 0x00f0ff,
      transparent: true,
      opacity: 0.4
    });
    const laserLine = new THREE.Line(lineGeo, lineMat);
    scene.add(laserLine);

    // Mouse Interaction
    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (e) => {
      const rect = currentMount.getBoundingClientRect();
      mouseX = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouseY = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
    };

    currentMount.addEventListener('mousemove', handleMouseMove);

    // Resize Handler
    const handleResize = () => {
      if (!currentMount) return;
      camera.aspect = currentMount.clientWidth / currentMount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
    };

    window.addEventListener('resize', handleResize);

    // Animation Loop
    let animationFrameId;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Rotate holographic evidence cube
      cubeMesh.rotation.x = elapsedTime * 0.4;
      cubeMesh.rotation.y = elapsedTime * 0.6;
      cubeMesh.position.y = 0.6 + Math.sin(elapsedTime * 1.5) * 0.15;

      coreMesh.rotation.y = -elapsedTime * 0.8;

      // Parallax camera easing
      camera.position.x += (mouseX * 1.5 - camera.position.x) * 0.05;
      camera.position.y += (mouseY * 1.0 + 2.5 - camera.position.y) * 0.05;
      camera.lookAt(0, 0.5, 0);

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      currentMount.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      if (currentMount.contains(renderer.domElement)) {
        currentMount.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        height: '480px',
        borderRadius: '16px',
        overflow: 'hidden',
        border: '1px solid rgba(0, 240, 255, 0.25)',
        background: 'radial-gradient(ellipse at center, rgba(14, 20, 33, 0.8) 0%, rgba(7, 8, 11, 0.95) 100%)',
        boxShadow: '0 20px 40px -15px rgba(0, 240, 255, 0.1)'
      }}
    >
      {/* 3D Canvas Container */}
      <div ref={mountRef} style={{ width: '100%', height: '100%' }} />

      {/* Cyber Overlay HUD */}
      <div
        style={{
          position: 'absolute',
          top: '16px',
          left: '16px',
          display: 'flex',
          flexDirection: 'column',
          gap: '4px',
          pointerEvents: 'none'
        }}
      >
        <div className="data-chip">
          <span className="status-dot" />
          3D EVIDENCE_RECONSTRUCTION // ACTIVE
        </div>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: '#64748b' }}>
          MOVE CURSOR TO ADJUST FORENSIC CAMERA VECTOR
        </div>
      </div>

      <div
        style={{
          position: 'absolute',
          bottom: '16px',
          right: '16px',
          fontFamily: 'var(--font-mono)',
          fontSize: '0.72rem',
          color: '#38bdf8',
          background: 'rgba(0, 0, 0, 0.6)',
          padding: '6px 12px',
          borderRadius: '4px',
          border: '1px solid rgba(0, 240, 255, 0.2)',
          pointerEvents: 'none'
        }}
      >
        FPS: 60 // RENDERER: WEBGL THREE.JS
      </div>
    </div>
  );
}
