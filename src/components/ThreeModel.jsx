import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import raccoon from "../glb/raccoon.glb";

const ThreeModel = () => {
  const sceneRef = useRef(null);
  const mixerRef = useRef(null);

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
      // Position and configure lights
      // const keyLight = new THREE.DirectionalLight(0xffeeee, 1.0);
      // keyLight.position.set(.35, .1, .5);

      // const fillLight = new THREE.DirectionalLight(0xaaffaa, 0.75);
      // fillLight.position.set(2, 0, 2);

      const backLight = new THREE.DirectionalLight(0xaabbcc, 0.75);
      backLight.position.set(-1, -2, -2);

      // Add lights to the scene
      // scene.add(keyLight);
      // scene.add(fillLight);
      scene.add(backLight);
      scene.background = new THREE.Color(0xaabbcc);
      renderer.setSize(window.innerWidth, window.innerHeight / 2);
      sceneRef.current.appendChild(renderer.domElement);

      // // Add your 3D model here
      const loader = new GLTFLoader();
      loader.load(
        raccoon,
        (gltf) => {
          // Called when the model is loaded
          const model = gltf.scene;
          scene.add(model);
          model.position.y -= 0.45;

          // Create animation mixer
          const mixer = new THREE.AnimationMixer(model);
          mixerRef.current = mixer;

          // Get animations from the gltf file
          const animations = gltf.animations;

          // Play the first animation
          if (animations.length > 0) {
            const rand = Math.floor(Math.random() * animations.length)
            const action = mixer.clipAction(animations[rand]);
            action.play();
          }
        },
        // (xhr) => {
        //   // Called while loading is in progress
        //   console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
        // },
        // (error) => {
        //   // Called if an error occurs during loading
        //   console.error("An error happened", error);
        // }
      );

      // Set camera position
      camera.position.z = 0.75;

      camera.lookAt(new THREE.Vector3(0, 2, 0));
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
        // Update animation mixer
        if (mixerRef.current) {
          mixerRef.current.update(0.015);
        }
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
