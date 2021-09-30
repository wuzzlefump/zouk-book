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

// Screens import
const Home = React.lazy(() => import("./screens/Home/Home"));
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
