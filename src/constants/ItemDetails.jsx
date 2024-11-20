import { GiBasketballJersey } from "react-icons/gi";
import { GiRunningShoe } from "react-icons/gi";
import { GiAmericanFootballBall } from "react-icons/gi";
import { RiDrinks2Fill } from "react-icons/ri";
import { GiBilledCap } from "react-icons/gi";
import { BsSunglasses } from "react-icons/bs";
import { LiaMedalSolid } from "react-icons/lia";
import { GiChampions } from "react-icons/gi";
import { FaBottleWater } from "react-icons/fa6";
import { FaBaseballBatBall } from "react-icons/fa6";
import { FaHandsWash } from "react-icons/fa";

const ItemDetails = [
  { number: 300, name: "Dresses", icon: <GiBasketballJersey /> },
  { number: 211, name: "Shoes", icon: <GiRunningShoe /> },
  { number: 400, name: "Balls", icon: <GiAmericanFootballBall /> },
  { number: 400, name: "Energy Drinks", icon: <RiDrinks2Fill /> },
  { number: 400, name: "Caps", icon: <GiBilledCap /> },
  { number: 300, name: "Glasses", icon: <BsSunglasses /> },
  { number: 211, name: "medals", icon: <LiaMedalSolid /> },
  { number: 400, name: "Champions", icon: <GiChampions /> },
  { number: 400, name: "Bottles", icon: <FaBottleWater /> },
  { number: 400, name: "Bats", icon: <FaBaseballBatBall /> },
  { number: 211, name: "Gloves", icon: <FaHandsWash /> },
];

export default ItemDetails;
