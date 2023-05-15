import apollo from "../img/characters/apollo-fuzzmoon.png"
import dolly from "../img/characters/dolly-dreadful.png"

const getRand = (n) => {
  
  return (Math.random() * n)-(n*0.5)
}
const characters = [
  {
    id: "1",
    rot: getRand(3),
    img: apollo,
    title: "Apollo Fuzzmoon",
    description:
      "Apollo Fuzzmoon is a 3D character model that is used for creating TikTok videos. He was scanned using photogrammetry and then rigged in blender with blendshapes. He is a multimedia project by Elijah Atkins combining puppetry with 3D animation. He is rigged in Unity to include ragdoll physics, and a rigid body tail, and can be animated in vSeeFace and VRChat, and in custom Unity App. He has experience in black box and with green screen for live or video performances. He is ready for real time animation and has PBR materials created in Substance Painter",
    bullet: [
      "3D character model scanned with photogrammetry",
      "Rigged in Blender and Unity with blendshapes and ragdoll physics",
      "Compatible with vSeeFace, VRChat and custom Unity Apps",
    ],
  },
  {
    id: "2",
    rot: getRand(3),
    img: dolly,
    title: "Dolly Dreadful",
    description:
      "Apollo Fuzzmoon is a 3D character model that is used for creating TikTok videos. He was scanned using photogrammetry and then rigged in blender with blendshapes. He is a multimedia project by Elijah Atkins combining puppetry with 3D animation. He is rigged in Unity to include ragdoll physics, and a rigid body tail, and can be animated in vSeeFace and VRChat, and in custom Unity App. He has experience in black box and with green screen for live or video performances. He is ready for real time animation and has PBR materials created in Substance Painter",
    bullet: [
      "3D character model scanned with photogrammetry",
      "Rigged in Blender and Unity with blendshapes and ragdoll physics",
      "Compatible with vSeeFace, VRChat and custom Unity Apps",
    ],
  },
]
export default characters