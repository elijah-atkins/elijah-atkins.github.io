
import balloon from "../img/games/balloon.png";
import d4 from "../img/games/d4.png";
import gol from "../img/games/game-of-life.png";
import pball from "../img/games/paddle-ball.png";
import pool from "../img/games/pool.png";
import rg from "../img/games/racing-game.png"
import ttt from "../img/games/tic-tac-toe.png";

const getRand = (n) => {
  
  return (Math.random() * n)-(n*0.5)
}
const games = [
  {
    id: "8",
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
    id: "7",
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
    id: "5",
    rot: getRand(1),
    img: gol,
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
    id: "6",
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
    id: "4",
    rot: getRand(1),
    img: ttt,
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
    id: "3",
    rot: getRand(1),
    img: pball,
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
    id: "2",
    rot: getRand(1),
    img: rg,
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
