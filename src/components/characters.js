import apollo from "../img/characters/apollo-fuzzmoon.png"
import apolloW from "../img/characters/apollo-fuzzmoon.webp"
import dolly from "../img/characters/dolly-dreadful.png"
import dollyW from "../img/characters/dolly-dreadful.webp"
import mushy from "../img/characters/mushy.png"
import mushyW from "../img/characters/mushy.webp"
import geebee from "../img/characters/geebee.png"
import geebeeW from "../img/characters/geebee.webp"
import zed from "../img/characters/zed.png"
import zedW from "../img/characters/zed.webp"

const getRand = (n) => {
  
  return (Math.random() * n)-(n*0.5)
}
const characters = [
  {
    id: "1",
    rot: getRand(3),
    img: apollo,
    imgWebp: apolloW,
    title: "Apollo Fuzzmoon",
    description:
      "Apollo Fuzzmoon is a 3D character model rigged in Blender and Unity for TikTok, video games, VR and AR. He has PBR materials and blend shapes for facial expressions and ragdoll physics.",
  },
  {
    id: "2",
    rot: getRand(3),
    img: dolly,
    imgWebp: dollyW,
    title: "Dolly Dreadful",
    description:
      "Dolly Dreadful is a 3D character model that you can use to create realistic animations in real time. She works well with ARKit and Unreal engine, so you can bring her to life in different environments. She was modeled and rigged in Blender, a free and open source software for 3D creation.",
  },
  {
    id: "3",
    rot: getRand(3),
    img: geebee,
    imgWebp: geebeeW,
    title: "Gee Bee",
    description:
      "GeeBee is a 3D character model for real time animation. He can teach various topics in educational videos. He works with VSeeFace and VRChat, two VR apps. He was made and rigged in Blender and Unity.",
  },
  {
    id: "4",
    rot: getRand(3),
    img: mushy,
    imgWebp: mushyW,
    title: "Mushy",
    description:
      "Mushy is a 3D character model designed for real time animation. It can be used as a presenter for educational videos on various topics. It is compatible with VSeeFace and VRChat, two popular applications for virtual reality. It was created and rigged using Blender, a free and open source software for 3D creation.",
  },
  {
    id: "5",
    rot: getRand(3),
    img: zed,
    imgWebp: zedW,
    title: "Zed",
    description:
      "Zed is a full body character that is drawn and animated using Moho Animation Software, a powerful 2D animation program. Zed is made of vector shapes that can be scaled and transformed without losing quality. Zed has a bone structure that allows him to move and deform realistically. Zed also has smart bone actions and smart warp mesh that enable him to change his facial expressions and head orientation.",
  },

]
export default characters



