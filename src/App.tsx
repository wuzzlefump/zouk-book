import * as React from "react";
import logo from "./logo.svg";
import styles from "App.module.css";
import "../src/themes/default/shared.css";
import {
  BrowserRouter,
  Route,
  Redirect,
  Switch,
  RouteProps,
} from "react-router-dom";
import Layout from "./components/Layout/Layout";
import HomeLayout from "./components/HomeLayout/HomeLayout";

// Screens import
const Home = React.lazy(() => import("./screens/Home/Home"));
const Glossary = React.lazy(() => import("./screens/Glossary/Glossary"));
const Resources = React.lazy(() => import("./screens/Resources/Resources"));
const Moves = React.lazy(() => import("./screens/Moves/Moves"));
const SFMoves = React.lazy(() => import("./screens/Moves/SFMoves"));
const BronzeMoves = React.lazy(() => import("./screens/Moves/BronzeMoves"));
const SilverMoves = React.lazy(() => import("./screens/Moves/SilverMoves"));
const GoldMoves = React.lazy(() => import("./screens/Moves/GoldMoves"));

const Techniques = React.lazy(() => import("./screens/Techniques/Techniques"));
const History = React.lazy(() => import("./screens/History/History"));
// Screens Import
// Route Setup
type IRouteConfig = {
  path: string;
  title: string;
  comp: any;
  Layout: (props: any) => JSX.Element;
  layoutProps?: any;
  Route?: any;
};
const routes: Array<IRouteConfig> = [
  {
    path: "/",
    title: "Home",
    comp: <Home />,
    Layout: HomeLayout,
    Route: Route,
  },
  {
    path: "/history",
    title: "History",
    comp: <History />,
    Layout: Layout,
    Route: Route,
  },
  {
    path: "/techniques",
    title: "Techniques",
    comp: <Techniques />,
    Layout: Layout,
    Route: Route,
  },
  {
    path: "/moves/sf/:name?",
    title: "Social Foundations Moves",
    comp: <SFMoves />,
    Layout: Layout,
    Route: Route,
  },
  {
    path: "/moves/bronze/:name?",
    title: "Bronze Moves",
    comp: <BronzeMoves />,
    Layout: Layout,
    Route: Route,
  },
  {
    path: "/moves/silver/:name?",
    title: "SilverMoves",
    comp: <SilverMoves />,
    Layout: Layout,
    Route: Route,
  },
  {
    path: "/moves/gold/:name?",
    title: "Gold Moves",
    comp: <GoldMoves />,
    Layout: Layout,
    Route: Route,
  },
  {
    path: "/moves/beginner/:name?",
    title: "Moves",
    comp: <Moves />,
    Layout: Layout,
    Route: Route,
  },
  {
    path: "/resources",
    title: "Resources",
    comp: <Resources />,
    Layout: Layout,
    Route: Route,
  },
  {
    path: "/glossary",
    title: "Glossary",
    comp: <Glossary />,
    Layout: Layout,
    Route: Route,
  },
];

//RouteSetup
function App() {
  return (
    <BrowserRouter>
      <Switch>
        {routes.map((x, i) => {
          const RouteComp = x.Route;
          return (
            <RouteComp key={i} exact path={x.path}>
              {/* //documentTitle */}
              <x.Layout {...x.layoutProps}>
                <React.Suspense fallback={"Loading"}>{x.comp}</React.Suspense>
              </x.Layout>
            </RouteComp>
          );
        })}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
