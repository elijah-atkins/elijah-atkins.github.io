import React, { useEffect, useRef } from "react";
import * as THREE from "three";
//import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

const ThreeModel = () => {
  const sceneRef = useRef(null);

  useEffect(() => {
    // Set up scene
    const container = sceneRef.current;

    // Check if container has a valid height
    if (container.clientHeight === 0) {
      const handleResize = () => {
        renderer.setSize(container.clientWidth, container.clientHeight);
        camera.aspect = container.clientWidth / container.clientHeight;
        camera.updateProjectionMatrix();
      };

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
      );
      const renderer = new THREE.WebGLRenderer({ antialias: true });
      // Add directional light
      const light = new THREE.DirectionalLight(0xffffff, 1);
      light.position.set(1, 1, 1); // Adjust the position as needed
      scene.add(light);
      scene.background = new THREE.Color(0xaabbcc);
      renderer.setSize(window.innerWidth, window.innerHeight / 2);
      sceneRef.current.appendChild(renderer.domElement);

      // // Add your 3D model here
      // const loader = new GLTFLoader();
      // loader.load('../glb/lego.glb', (gltf) => {
      //   const model = gltf.scene;
      //   scene.add(model);
      // });
      // Animate the scene
      // Create torus knot geometry
      const geometry = new THREE.TorusKnotGeometry(1, 0.4, 32, 8, 1, 2);

      // Create material
      const material = new THREE.MeshBasicMaterial({
        color: 0xffff00,
        wireframe: true,
      }); // Replace with desired color or material

      // Create mesh
      const torusKnot = new THREE.Mesh(geometry, material);
      scene.add(torusKnot);

      // Set camera position
      camera.position.z = 5;

      // Add OrbitControls
      const controls = new OrbitControls(camera, renderer.domElement);
      controls.enableDamping = true;

      // Set limits for up-down rotation
      controls.minPolarAngle = Math.PI / 4; // 45 degrees
      controls.maxPolarAngle = (3 * Math.PI) / 4; // 135 degrees

      const animate = () => {
        requestAnimationFrame(animate);
        // Update OrbitControls
        controls.update();
        renderer.render(scene, camera);
        // torusKnot.rotation.x += 0.01; // Rotate around x-axis
         torusKnot.rotation.y += 0.002; // Rotate around y-axis
         torusKnot.rotation.z += 0.003; // Rotate around z-axis
      };

      animate();
      handleResize();

      window.addEventListener("resize", handleResize);

      // Clean up event listener on unmount
      return () => {
        window.removeEventListener("resize", handleResize);
        renderer.dispose();
      };
    }
  }, []);

  return <div ref={sceneRef} />;
};

export default ThreeModel;
