
import Img3 from "../img/racing-game.png"
import Img4 from "../img/paddle-ball.png";
import Img6 from "../img/nasa.png";
import Img12 from "../img/game-of-life.png";
import Img15 from "../img/tic-tac-toe.png";
import boid from "../img/flappy-bird.png"
import balloon from "../img/balloon.png";
import pool from "../img/pool.png";
import d4 from "../img/d4.png";

const getRand = (n) => {
  
  return (Math.random() * n)-(n*0.5)
}
const games = [
  {
    id: "17",
    rot: getRand(3),
    img: d4,
    title: "Drop Match",
    url: "https://drop-match.elijahatkins.com/",
    git: "https://github.com/elijah-atkins/drop-match",
    description:
      "A 2 player connect 4 style game built with javascript and three.js. The game is 2 player and played on the same computer. The first player to connect 4 of their pieces wins.",
    bullet: [
      "Three.js for rendering tables and pieces",
      "Adjustable board size and match length",
      "Assets optimized for size and performance",
    ],
  },
  {
    id: "16",
    rot: getRand(3),
    img: pool,
    title: "Billiards 8 Ball",
    url: "https://billiards.elijahatkins.com/",
    git: "https://github.com/elijah-atkins/billiards",
    description:
      "A billiard game built with React and cannon.es. The game is 2 player and played on the same computer. The first player to sink all of their balls wins.",
    bullet: [
      "Three.js for rendering tables and balls",
      "Realistic Physics with Cannon.es",
      "Assets optimized for size and performance",
    ],
  },
  {
    id: "15",
    rot: getRand(3),
    img: balloon,
    title: "Balloon Popper",
    url: "https://balloon-popper.elijahatkins.com/",
    git: "https://github.com/elijah-atkins/balloon-popper",
    description:
      "3D Balloon Popping Game built with Three.js and HTML5 Canvas. This project is a blend of 3D and 2D graphics. The 3D graphics are rendered with Three.js and the 2D graphics are standard HTML5/CSS elements.",
    bullet: [
      "Custom balloon model",
      "AI generated background",
      "THREE.js",
    ],
  },

    {
    id: "12",
    rot: getRand(3),
    img: boid,
    title: "Flappy Bird 3D",
    url: "https://flappy-bird.elijahatkins.com/",
    git: "https://github.com/elijah-atkins/FlappityBird3D",
    description:
      "Flappy Bird clone made in Three.js. This game is built using Node, and Three.js and uses external assets for the skybox, 3D models and audio.",
    bullet: [
      "Made from default Node boilerplate",
      "Custom charactor model",
    ],
  },
  
  {
    id: "1",
    rot: getRand(1),
    img: Img6,
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
  {
    id: "2",
    rot: getRand(1),
    img: Img12,
    title: "Conway's Game of Life",
    url: "https://game-of-life.elijahatkins.com/",
    git: "https://github.com/elijah-atkins/game-of-life",
    description: "Welcome to John Conway's Game of Life! This is a computer science classic from 1970, a program that simulates a cellular automaton (plural automata). It has connections to all kinds of different aspects of computer science and nature.",
    bullet: [
      " Created from a React Boilerplate to a fully functional web application in 1 week.",
      "Dynamic board size, Application will create a board based on browser window size",
      "Responsive game board will resize with window!",
    ],
  },

  {
    id: "4",
    rot: getRand(1),
    img: Img15,
    title: "Tic Tac Toe in Angular",
    url: "https://tic-tac-toe.elijahatkins.com/",
    git: "https://github.com/elijah-atkins/tic-tac-toe",
    description:
    "Play Tic Tac Toe in this Web App. This is Elijah's first app built in Angular, with Typescript, Angular Materials, Bootstrap. Written in Typescript, HTML, and SCSS",
    bullet: [
      "Two player game, play with a friend",
      "Game declares winner",
      "X's and O's drawn in CSS",
    ],
  },
  {
    id: "10",
    rot: getRand(1),
    img: Img4,
    title: "Paddle Ball",
    url: "https://elijah-atkins.github.io/Paddle-Ball-Game/paddle-ball.html",
    git: "https://github.com/elijah-atkins/Paddle-Ball-Game",
    description:
      "Programming exercise making Brick breaker style game. Built using javaScript, HTML5 canvas and CSS.",
    bullet: [
      "Array used to manage brick placement",
      "Made from scratch with tutorial aid",
    ],
  },
  {
    id: "11",
    rot: getRand(1),
    img: Img3,
    title: "Racing Game Demo",
    url: "https://elijah-atkins.github.io/Paddle-Ball-Game/racing-game.html",
    git:
      "https://github.com/elijah-atkins/Paddle-Ball-Game/blob/master/js/racing-game.js",
    description:
      "Simple racing game demo made from building upon Paddle ball game. Built using javaScript, HTML5 canvas and CSS.",
    bullet: [
      "Built from expanding existing code",
      "Made with tutorial aid",
      "Built all sprites in game",
    ],
  },

];
export default games;
