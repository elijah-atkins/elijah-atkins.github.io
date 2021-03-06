// import Img1 from "../img/react-todo.png";
// import Img2 from "../img/space-walkers.png";
import Img3 from "../img/racing-game.png";
import Img4 from "../img/paddle-ball.png";
import Img5 from "../img/rick-and-morty.png";
import Img6 from "../img/nasa.png";
import Img7 from "../img/github.png";
// import Img8 from "../img/dark-mode.png";
// import Img9 from "../img/team-builder.png";
import Img10 from "../img/weather.png";
import Img11 from "../img/react-tv.png";
import Img12 from "../img/game-of-life.png";
import Img13 from "../img/star-wars.png";
import Img14 from "../img/med-cabinet.png";
import Img15 from "../img/tic-tac-toe.png";
const getRand = (n) => {
  
  return (Math.random() * n)-(n*0.5)
}
const projects = [
  {
    id: "6",
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
    id: "12",
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
    id: "14",
    rot: getRand(1),
    img: Img14,
    title: "Med Cabinet",
    url: "https://med-cabinet8.netlify.app/",
    git: "https://github.com/buildweek-medcabinet-8/front/tree/elijah-atkins",
    description:
      "Med-Cabinet is a React web application that allows Medicinal Marijuana users find strain recommendations based on Natural language processing.",
    bullet: [
      "Collaborated remotely with a team of 4 Web Developers, and 2 Data Scientists to build a fully functional web application in 1 week.",
      "Solely responsible for creating login page",
      " Utilized a custom API developed by our web back end",
    ],
  },

  {
    id: "15",
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
    id: "13",
    rot: getRand(1),
    img: Img13,
    title: "Star Wars API frontend",
    url: "https://starwars.elijahatkins.com/",
    git: "https://github.com/elijah-atkins/starwars-api",
    description:
      "Front end visualization of The Star Wars API at http://swapi.dev Built from React Boilerplate. Utilizing React Query to cache data in browsers and ease up bandwidth use. Written in Javascript, HTML5 and CSS",
    bullet: [
      "Made using React Query",
      "Modern responsive design",
      "Fun facts from around the Star Wars universe",
    ],
  },

  {
    id: "10",
    rot: getRand(1),
    img: Img10,
    title: "React Redux Weather App",
    url: "https://weather.elijahatkins.com/",
    git: "https://github.com/elijah-atkins/React-Redux-App",
    description:
      "Custom built weather app with custom weather icons and weather animations. Built using React, axios, redux, thunk, and SCSS. Written in Javascript, SCSS and HTML",
    bullet: [
      "Single Page Web React Application made with react-redux",
      "Fetching weather data from MetaWeather api",
      "Custom built weather icons with animations",
    ],
  },



  // {
  //   id: "8",
  //   rot: getRand(3),
  //   img: Img8,
  //   title: "Crypto Tracker",
  //   url: "https://crypto-tracker.elijahatkins.com/",
  //   git: "https://github.com/elijah-atkins/dark-mode",
  //   description:
  //     "Implemented a dark mode feature to existing code. Built using React, with a custom hook to use browsers local storage to remember state.",
  //   bullet: [
  //     "Built onto existing Crypto App",
  //     "Browser remembers dark mode setting",
  //   ],
  // },
  {
    id: "7",
    rot: getRand(1),
    img: Img7,
    title: "Github Usercard",
    url: "https://github.elijahatkins.com/",
    git: "https://github.com/elijah-atkins/React-Github-User-Card",
    description:
      "Shows a profile card for Github users with a list of followers/following. Built using React, SCSS, and axios. Written in Javascript, SCSS, and HTML",
    bullet: ["Pulling data from Github api", "Search bar to search for users"],
  },
  {
    id: "5",
    rot: getRand(1),
    img: Img5,
    title: "React and Morty",
    url: "https://rick-and-morty.elijahatkins.com/",
    git: "https://github.com/elijah-atkins/Sprint-Challenge-React-Wars",
    description:
      "Lambda School Sprint Challenge pulling data from the  Rick and Morty API  to show  a List of Rick and Morty characters. Built using React, SCSS, and axios. Written in Javascript CSS and HTML",
    bullet: [
      "Sprint challenges are completed under 3 hours",
      "Custom Styled cards",
      "Moving the mouse over the character image will reveal if they are dead",
    ],
  },
  // {
  //   id: "9",
  //   rot: getRand(3),
  //   img: Img9,
  //   title: "Team Builder",
  //   url: "https://team-builder.elijahatkins.com",
  //   git: "https://github.com/elijah-atkins/team-builder",
  //   description:
  //     "Team Builder app uses forms to input data that will generate cards with data onto page. Built using Create React App and SCSS.",
  //   bullet: [
  //     "Made from default react boilerplate",
  //     "App will accept and display data",
  //   ],
  // },
  // {
  //   id: "1",
  //   rot: getRand(3),
  //   img: Img1,
  //   title: "React ToDo",
  //   url: "react-todo.elijahatkins.com",
  //   git: "https://github.com/elijah-atkins/React-Todo",
  //   description:
  //     "ToDo lists a simple app made to explore CRUD (create, read, update, delete). Built using React, SCSS and javaScript.",
  //   bullet: [
  //     "Allows user to make custom list",
  //     "Long click to edit",
  //     "Select and tag multiple items for removal",
  //   ],
  // },
  {
    id: "11",
    rot: getRand(1),
    img: Img11,
    title: "React Television Favorites",
    url: "https://tv.elijahatkins.com/",
    git: "https://github.com/elijah-atkins/React-Testing-TV-Show",
    description:
      "Built off of existing code to expanded app functionality, added show selection function and styles. Built using React, axios, react-dropdown. Written in Javascript, CSS and HTML",
    bullet: [
      "Page tested with react testing library",
      "Click show title to expose show selection dropdown",
      "Explore tv favorites with episode synopsis for every season",
    ],
  },
  {
    id: "4",
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
    id: "3",
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
  // {
  //   id: "2",
  //   rot: getRand(3),
  //   img: Img2,
  //   title: "Advanced CSS Lambda Sprint Challenge",
  //   url: "https://sprint-challenge-advanced-css.elijahatkins.com",
  //   git: "https://github.com/elijah-atkins/Sprint-Challenge--Advanced-CSS",
  //   description:
  //     " Starting from non styled html add CSS to style document to expected output. Built using HTML5 and LESS compiler.",
  //   bullet: [
  //     "Sprint challenges are completed under 3 hours",
  //     "CSS driven animations",
  //   ],
  // },
];
export default projects;
