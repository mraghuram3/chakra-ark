import { Switch, Route, Link, useLocation } from "react-router-dom";

import { TopNav } from "./topnav.jsx";

import { AccordianPage } from "./pages/accordian";
import { ProgressPage } from "./pages/progress";
import { ButtonPage } from "./pages/button";
import { Home } from "./pages/home";

import styles from "./App.module.css";

const ROUTES = [
  {
    Name: "Home",
    Path: "/home",
    Component: Home,
    Exact: true,
  },
  {
    Name: "Accordion",
    Path: "/accordion",
    Component: AccordianPage,
  },
  // {
  //   Name: "Alert",
  //   Path: "/alert",
  //   Component: AlertDialogComponent
  // },
  {
    Name: "Button",
    Path: "/button",
    Component: ButtonPage,
  },
  // {
  //   Name: "Input",
  //   Path: "/input",
  //   Component: InputComponent
  // },
  {
    Name: "Progress",
    Path: "/progress",
    Component: ProgressPage,
  },
  // {
  //   Name: "Slider",
  //   Path: "/slider",
  //   Component: SliderComponent
  // }
];

function App() {
  const location = useLocation();
  return (
    <div className={styles.app}>
      <TopNav />
      <div className={styles.content}>
        <aside className={styles.leftNav}>
          {ROUTES.map(({ Name, Path }) => (
            <Link key={Name} to={Path}>
              <p
                className={`base-400 ${styles.leftNavItem}`}
                data-active={location.pathname === Path}
              >
                {Name}
              </p>
            </Link>
          ))}
        </aside>
        <main className={styles.route}>
          <Switch>
            {ROUTES.map(({ Name, Path, Component, Exact }) => (
              <Route key={Name} path={Path} exact={Exact}>
                <label className={`base-600 ${styles.breadcrumb}`}>
                  <p>Components</p>
                  <span>{">"}</span>
                  <p>{Name}</p>
                </label>
                <Component />
              </Route>
            ))}
          </Switch>
        </main>
      </div>
    </div>
  );
}

export default App;
