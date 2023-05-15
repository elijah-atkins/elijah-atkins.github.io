import apollo from "../img/characters/apollo-fuzzmoon.png"
import dolly from "../img/characters/dolly-dreadful.png"
import mushy from "../img/characters/mushylp.png"

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
      "Apollo Fuzzmoon is a 3D character model rigged in Blender and Unity for TikTok, video games, VR and AR. He has PBR materials and blend shapes for facial expressions and ragdoll physics.",
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
      "Dolly Dreadful is a 3D character model that you can use to create realistic animations in real time. She works well with ARKit and Unreal engine, so you can bring her to life in different environments. She was modeled and rigged in Blender, a free and open source software for 3D creation.",
    bullet: [
      "3D character model for real time animation",
      "ARKit compatible",
      "Modeled and rigged in Blender, Unreal engine ready",
    ],
  },
  {
    id: "3",
    rot: getRand(3),
    img: mushy,
    title: "Mushy",
    description:
      "Mushy is a 3D character model designed for real time animation. She can be used as a presenter for educational videos on various topics. She is compatible with VSeeFace and VRChat, two popular applications for virtual reality. She was created and rigged using Blender, a free and open source software for 3D creation.",
    bullet: [
      "3D character model for YouTube animations",
      "VRChat compatible",
      "Modeled and rigged in Blender, Unity engine ready",
    ],
  },
]
export default characters



