import { routerType } from "../types/router.types";
import AllCards from "./AllCards";
import Home from "./Home";
import AllCommandShips from "./AllCommandShips";
import Campaign from "./Campaign";
import MyProfile from "./MyProfile";

const pagesData: routerType[] = [
  {
    path: "",
    element: <Home />,
    title: "home",
  },
  {
    path: "allCards",
    element: <AllCards />,
    title: "allCards",
  },
  {
    path: "allCommandShips",
    element: <AllCommandShips />,
    title: "allCommandShips",
  },
  {
    path: "campaign",
    element: <Campaign />,
    title: "campaign",
  },
  {
    path: "myProfile",
    element: <MyProfile />,
    title: "myProfile",
  },
];

export default pagesData;
