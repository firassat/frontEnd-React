import img1 from "../assets/images/popular-01.jpg";
import img2 from "../assets/images/popular-02.jpg";
import img3 from "../assets/images/popular-03.jpg";
import img4 from "../assets/images/popular-04.jpg";
import gameImg1 from "../assets/images/game-01.jpg";
import gameImg2 from "../assets/images/game-02.jpg";
import gameImg3 from "../assets/images/game-03.jpg";
import gameImg4 from "../assets/images/game-02.jpg";

const itemData = [
  { key: 1, name: "Fortnite", category: "Sandbox", img: img1 },
  { key: 2, name: "PubG", category: "Battle", img: img2 },
  { key: 3, name: "Dota2", category: "Steam", img: img3 },
  { key: 4, name: "CS-G", category: "Battle", img: img4 },
  { key: 5, name: "PubG", category: "Legendary", img: img1 },
  { key: 6, name: "PubG", category: "Battle", img: img2 },
  { key: 7, name: "Fortnite", category: "Battle", img: img3 },
  { key: 8, name: "CS-G", category: "Legendary", img: img4 },
];

const gameItemData = [
  {
    key: 1,
    name: "Fortnite",
    category: "Sandbox",
    img: gameImg1,
    date: "2020/5/4",
    state: "Downloaded",
    active: "no-active",
  },
  {
    key: 2,
    name: "PubG",
    category: "Battle",
    img: gameImg2,
    date: "2020/5/4",
    state: "Downloaded",
    active: "active",
  },
  {
    key: 3,
    name: "Dota2",
    category: "Steam",
    img: gameImg3,
    date: "2020/5/4",
    state: "Downloaded",
    active: "no-active",
  },
  {
    key: 4,
    name: "CS-G",
    category: "Battle",
    img: gameImg4,
    date: "2020/5/4",
    state: "Downloaded",
    active: "no-active",
  },
];

export default itemData;
export { gameItemData };
