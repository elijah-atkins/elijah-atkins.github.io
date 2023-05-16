import apollo from "../img/characters/apollo-fuzzmoon.png"
import dolly from "../img/characters/dolly-dreadful.png"
import mushy from "../img/characters/mushylp.png"
import geebee from "../img/characters/geebee.png"
import zed from "../img/characters/zed.png"
import frox from "../img/characters/frox.png"

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
  },
  {
    id: "2",
    rot: getRand(3),
    img: dolly,
    title: "Dolly Dreadful",
    description:
      "Dolly Dreadful is a 3D character model that you can use to create realistic animations in real time. She works well with ARKit and Unreal engine, so you can bring her to life in different environments. She was modeled and rigged in Blender, a free and open source software for 3D creation.",
  },
  {
    id: "3",
    rot: getRand(3),
    img: geebee,
    title: "Gee Bee",
    description:
      "GeeBee is a 3D character model for real time animation. He can teach various topics in educational videos. He works with VSeeFace and VRChat, two VR apps. He was made and rigged in Blender and Unity.",
  },
  {
    id: "4",
    rot: getRand(3),
    img: mushy,
    title: "Mushy",
    description:
      "Mushy is a 3D character model designed for real time animation. It can be used as a presenter for educational videos on various topics. It is compatible with VSeeFace and VRChat, two popular applications for virtual reality. It was created and rigged using Blender, a free and open source software for 3D creation.",
  },
  {
    id: "5",
    rot: getRand(3),
    img: zed,
    title: "Zed",
    description:
      "Zed is a full body character that is drawn and animated using Moho Animation Software, a powerful 2D animation program. Zed is made of vector shapes that can be scaled and transformed without losing quality. Zed has a bone structure that allows him to move and deform realistically. Zed also has smart bone actions and smart warp mesh that enable him to change his facial expressions and head orientation.",
  },
  {
    id: "6",
    rot: getRand(3),
    img: frox,
    title: "Frox",
    description:
      "Frox is a vector-based character created and animated in Moho, a 2D animation software. She can resize and reshape her vector parts without losing quality. She can also move and bend her body parts with bones. She can make different faces and head turns with smart bones and smart warp.",
  },
]
export default characters



