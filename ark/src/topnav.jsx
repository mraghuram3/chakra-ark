import { useState, useLayoutEffect } from "react";
import { Link } from "react-router-dom";
import darkLogo from "./assets/dark.svg";
import lightLogo from "./assets/light.svg";
import ltrLogo from "./assets/direction-ltr.svg";
import rtlLogo from "./assets/direction-rtl.svg";


import styles from "./topnav.module.css";


export function TopNav() {
  const [themeChecked, setThemeChecked] = useState(
    localStorage.getItem("theme") === "dark" ? true : false
  );
  const [rtlChecked, setRtlChecked] = useState(
    localStorage.getItem("dir") === "rtl" ? true : false
  );

  useLayoutEffect(() => {
    if (localStorage.getItem("theme") === "dark") {
      document.getElementsByTagName("HTML")[0].classList.add("dark");
    } else {
      document.getElementsByTagName("HTML")[0].classList.remove("dark");
    }
    if (localStorage.getItem("dir") === "rtl") {
      document.getElementsByTagName("HTML")[0].setAttribute("dir", "rtl");
    } else {
      document.getElementsByTagName("HTML")[0].setAttribute("dir", "ltr");
    }
  }, []);

  const toggleThemeChange = () => {
    if (!themeChecked) {
      localStorage.setItem("theme", "dark");
      document.getElementsByTagName("HTML")[0].classList.add("dark");
      setThemeChecked(true);
    } else {
      localStorage.setItem("theme", "light");
      document.getElementsByTagName("HTML")[0].classList.remove("dark");
      setThemeChecked(false);
    }
  };

  const toggleRTLChange = () => {
    if (!rtlChecked) {
      localStorage.setItem("dir", "rtl");
      document.getElementsByTagName("HTML")[0].setAttribute("dir", "rtl");
      setRtlChecked(true);
    } else {
      localStorage.setItem("dir", "ltr");
      document.getElementsByTagName("HTML")[0].setAttribute("dir", "ltr");
      setRtlChecked(false);
    }
    window.location.reload();
  };

  return (
    <header className={styles.topNav}>
      <Link to={"./home"}>
        <h3 className="h4-600">Kissflow Design System</h3>
      </Link>
      <div className={styles.topNavLeftAction}>
        <span className="cursor-pointer" onClick={toggleThemeChange}>
          {themeChecked ? (
            <img src={darkLogo} className="h-[24px] w-[24px]" alt="logo dark" />
          ) : (
            <img
              src={lightLogo}
              className="h-[24px] w-[24px]"
              alt="logo light"
            />
          )}
        </span>
        <span className="cursor-pointer" onClick={toggleRTLChange}>
          {rtlChecked ? (
            <img src={rtlLogo} className="h-[24px] w-[24px]" alt="logo rtl" />
          ) : (
            <img src={ltrLogo} className="h-[24px] w-[24px]" alt="logo ltr" />
          )}
        </span>
      </div>
    </header>
  );
}
