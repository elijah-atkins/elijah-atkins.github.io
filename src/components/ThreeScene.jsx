import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import nipplejs from "nipplejs";
import raccoon from "../glb/raccoonAni.glb";
import bg from "../img/bg.png";
import bgW from "../img/bg.webp";
import fg from "../img/fg.png";
import fgW from "../img/fg.webp";

function isWebPSupported() {
  const image = new Image();
  image.src = 'data:image/webp;base64,UklGRiQAAABXRUJQVlA4WAoAAAAQAAAAKwE/EAUAAAABAAEAAAExAAIAAAARAAAAFgAAAABYAAAAWAAAAAAAyYAA6AldAD/2DQACaEBAA7';
  return image.decode !== undefined;
}

function getTextureURL(png, webp) {
  return isWebPSupported() ? webp : png;
}

const ThreeScene = () => {
  const sceneRef = useRef(null);
  const animationActions = useRef([]);
  const state = useRef("idle");

  useEffect(() => {
    let model = null;
    let mixer;
    const clock = new THREE.Clock();
    // Set up scene
    const container = sceneRef.current;

    
    // Check if container has a valid height
    if (container.clientHeight === 0) {
    

    const textureLoader = new THREE.TextureLoader();
    const loadModel = (s) => {
      const loader = new GLTFLoader();
      loader.load(
        raccoon, // Replace with the path to your GLB model file
        (gltf) => {
          model = gltf.scene;
          model.scale.set(2, 2, 2);
          model.position.set(-50, 0, 0);
          s.add(model);
          // Extract animations
          const animations = gltf.animations;

          // Create an AnimationMixer and associate it with the model
          mixer = new THREE.AnimationMixer(model);

          // Create animation actions for each animation
          animationActions.current = animations.map((clip) =>
            mixer.clipAction(clip)
          );

          // Set the default action to idle

          setAnimationAction("wave");
        }
      );
    };

    let fwdValue = 0;
    let bkdValue = 0;
    let rgtValue = 0;
    let lftValue = 0;

    let tempVector = new THREE.Vector3();
    let upVector = new THREE.Vector3(0, 1, 0);
    let joyManager;

    const width = window.innerWidth;
    const height = window.innerHeight;

    const renderer = new THREE.WebGLRenderer({ antialias: true });

    document.body.appendChild(renderer.domElement);
    const color = new THREE.Color("#aabbcc");
    const scene = new THREE.Scene();
    scene.background = color;
    renderer.setSize(window.innerWidth, window.innerHeight*.55);
    sceneRef.current.appendChild(renderer.domElement);
    // Load the transparent PNG image
    textureLoader.load(
      getTextureURL(bg, bgW),
      (texture) => {
        // Create a material using the texture
        const material = new THREE.MeshBasicMaterial({
          map: texture,
          transparent: true,
        });

        // Create a geometry for your object (e.g., BoxGeometry, PlaneGeometry, etc.)
        const geometry = new THREE.PlaneGeometry();
        geometry.scale(180, 10, 1);

        // Create a mesh using the geometry and material
        const bg = new THREE.Mesh(geometry, material);
        bg.position.z = -20;
        bg.position.y = 5.5;
        bg.position.x = 20;
        // Add the mesh to your scene
        scene.add(bg);
      },
      undefined,
      (error) => {
        console.error("An error occurred while loading the texture:", error);
      }
    );
    textureLoader.load(
      getTextureURL(fg, fgW),
      (texture) => {
        // Create a material using the texture
        const material = new THREE.MeshBasicMaterial({
          map: texture,
          transparent: true,
        });

        // Create a geometry for your object (e.g., BoxGeometry, PlaneGeometry, etc.)
        const geometry = new THREE.PlaneGeometry();
        geometry.scale(136, 4, 1);

        // Create a mesh using the geometry and material
        const fg = new THREE.Mesh(geometry, material);
        fg.position.z = 2.5;
        fg.position.y = 2;
        fg.position.x = 20;
        // Add the mesh to your scene
        scene.add(fg);
      },
      undefined,
      (error) => {
        console.error("An error occurred while loading the texture:", error);
      }
    );

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 10000);
    camera.position.z = 50;
    camera.position.y = 50;
    scene.add(camera);

    loadModel(scene);

    const light = new THREE.PointLight(0xaabbcc);
    light.position.set(-100, 200, -100);
    scene.add(light);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.maxDistance = 4;
    controls.minDistance = 4;
    controls.maxPolarAngle = Math.PI / 2 - 0.05;
    controls.minPolarAngle = Math.PI / 2 - 0.05;
    controls.autoRotate = false;
    controls.autoRotateSpeed = 0;
    controls.rotateSpeed = 0.4;
    controls.enableDamping = true;
    controls.dampingFactor = 0.1;
    controls.enableZoom = false;
    controls.enablePan = false;
    controls.minAzimuthAngle = -0.02;
    controls.maxAzimuthAngle = 0.02;

    const resize = () => {
      const w = container.clientWidth;
      const h = container.clientHeight;
      
      renderer.setSize(w, h);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    };

    const animate = () => {
      const delta = clock.getDelta();
      updatePlayer(delta);
      renderer.render(scene, camera);
      controls.update();

      requestAnimationFrame(animate);
    };

    const updatePlayer = (delta) => {
      const angle = controls.getAzimuthalAngle();

      if (model && mixer) {
        if (fwdValue > 0) {
          tempVector.set(0, 0, -fwdValue).applyAxisAngle(upVector, angle);
          model.position.addScaledVector(tempVector, 0.5);
        }

        if (bkdValue > 0) {
          tempVector.set(0, 0, bkdValue).applyAxisAngle(upVector, angle);
          model.position.addScaledVector(tempVector, 0.5);
        }

        if (lftValue > 0) {
          tempVector.set(-lftValue, 0, 0).applyAxisAngle(upVector, angle);
          model.position.addScaledVector(tempVector, 0.5);
        }

        if (rgtValue > 0) {
          tempVector.set(rgtValue, 0, 0).applyAxisAngle(upVector, angle);
          model.position.addScaledVector(tempVector, 0.5);
        }

        const rotationSpeed = 0.5;
        const rotationAngle = (rgtValue - lftValue) * rotationSpeed;

        const minRotation = -Math.PI / 2;
        const maxRotation = Math.PI / 2;

        model.rotation.y += rotationAngle;
        model.rotation.y = THREE.MathUtils.clamp(
          model.rotation.y,
          minRotation,
          maxRotation
        );

        model.position.z = Math.max(0, Math.min(model.position.z, 1));
        model.position.x = Math.max(-50.1, Math.min(model.position.x, 85.5));
        model.updateMatrixWorld();

        let movementSpeed = Math.abs(rgtValue || lftValue);

        if (movementSpeed <= 0.01) {
          if (model.position.x === -50) {
            setAnimationAction("wave");
          } else if (model.position.x >= 78) {
            setAnimationAction("dance");
          } else {
            setAnimationAction("idle");
          }
        } else if (movementSpeed <= 0.5) {
          setAnimationAction("walk");
        } else {
          setAnimationAction("run");
        }

        camera.position.sub(controls.target);
        controls.target.copy(model.position);
        camera.position.add(model.position);
        camera.position.y += 1;

        mixer.update(delta);
      }
    };

    const setAnimationAction = (newAction) => {
      if (state.current !== newAction) {
        const previousAction = animationActions.current.find(
          (action) => action._clip.name === state.current
        );
        const nextAction = animationActions.current.find(
          (action) => action._clip.name === newAction
        );

        if (previousAction) {
          previousAction.fadeOut(0.2);
        }

        if (nextAction) {
          nextAction.reset().fadeIn(0.2).play();
          nextAction.crossFadeTo(nextAction, 0.2, true); // Smoothly crossfade to the next action
        }

        state.current = newAction;
      }
    };

    const addJoystick = () => {
      const options = {
        zone: document.getElementById("joystickWrapper1"),
        size: 90,
        multitouch: true,
        maxNumberOfNipples: 2,
        mode: "static",
        restJoystick: true,
        shape: "circle",
        position: { bottom: "60px", left: "65px" },
        dynamicPage: true,
      };

      joyManager = nipplejs.create(options);

      joyManager["0"].on("move", function (evt, data) {
        const forward = data.vector.y;
        const turn = data.vector.x;

        if (forward > 0) {
          fwdValue = Math.abs(forward);
          bkdValue = 0;
        } else if (forward < 0) {
          fwdValue = 0;
          bkdValue = Math.abs(forward);
        }

        if (turn > 0) {
          lftValue = 0;
          rgtValue = Math.abs(turn);
        } else if (turn < 0) {
          lftValue = Math.abs(turn);
          rgtValue = 0;
        }
      });

      joyManager["0"].on("end", function (evt) {
        bkdValue = 0;
        fwdValue = 0;
        lftValue = 0;
        rgtValue = 0;
      });
    };

    resize();
    animate();

    window.addEventListener("resize", resize);
    addJoystick();

    return () => {
      window.removeEventListener("resize", resize);
      joyManager.destroy();
      document.body.removeChild(renderer.domElement);
    };}
  }, []);
  return <div ref={sceneRef} ><div id="joystickWrapper1"/></div> ;
};

export default ThreeScene;
