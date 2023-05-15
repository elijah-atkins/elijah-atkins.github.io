import bshelper from "../img/blendshape-helper.png";
import nasa from "../img/nasa.png";

const getRand = (n) => {
  
  return (Math.random() * n)-(n*0.5)
}
const tools = [
  {
    id: "1",
    rot: getRand(3),
    img: bshelper,
    title: "ARKit Blendshape Helper",

    git: "https://github.com/elijah-atkins/ARKitBlendshapeHelper",
    description:
      "ARKit Blendshape Helper is a Blender addon that allows you to use facial motion capture to animate the face of any 3D model. It converts the poses of a rigged model into ARKit facial expressions, which are compatible with blendshapes. This makes it easy to create realistic facial animations with ARKit.",
    bullet: [
      "Animate 3D faces with ARKit blendshapes and facial mocap.",
      "Create and apply ARKit shape keys to your model automatically.",
      "Convert facial rig to ARKit blendshapes easily with interface and guide.",
    ],
  },
  {
    id: "2",
    rot: getRand(1),
    img: nasa,
    title: "NASA Astronomy Picture of the Day",
    url: "https://nasa.elijahatkins.com/",
    git: "https://github.com/elijah-atkins/nasa-photo-of-the-day",
    description:
      "Explore NASA Astronomy Photo of the Day api with beautiful astronomy images with posts as far back as 1995! Built using React, axios, react-router-dom, SCSS, and react-calendar.",
    bullet: [
      "App can handle pictures and video",
      "Calendar driven navigation",
      "Implements useHistory and useParams from react-router-dom",
    ],
  },
]

export default tools
