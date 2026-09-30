import { useEffect, useState } from "react";
import "./LoadingScreen.css";
import { useTheme } from "../context/ThemeContext";

import mqLogoDark from "../assets/MQ_logo_dark.svg";
import mqLogoLight from "../assets/MQ_logo_clean.svg";

import wordmarkDark from "../assets/Mudassar_Qureshi_wordmark_dark.svg";
import wordmarkLight from "../assets/Mudassar_Qureshi_wordmark_clean.svg";


function LoadingScreen({ onComplete }) {

  const [hide, setHide] = useState(false);
  const { isDark } = useTheme();

  const mqLogo   = isDark ? mqLogoDark   : mqLogoLight;
  const wordmark = isDark ? wordmarkDark : wordmarkLight;


  useEffect(() => {

    const timer = setTimeout(() => {

      setHide(true);

      setTimeout(() => {
        onComplete();
      }, 700);

    }, 2200);


    return () => clearTimeout(timer);

  }, [onComplete]);


  return (
    <div
      className={`loading-screen ${
        hide ? "loading-screen-hide" : ""
      }`}
    >

      <div className="loading-content">

        {/* MQ */}
        <div className="mq-logo-wrapper">

          <img
            src={mqLogo}
            alt="MQ"
            className="mq-logo"
          />

        </div>


        {/* MUDASSAR QURESHI */}
        <div className="wordmark-wrapper">

          <img
            src={wordmark}
            alt="Mudassar Qureshi"
            className="wordmark"
          />

        </div>


        {/* LOADING BAR */}
        <div className="loading-bar">

          <div className="loading-progress"></div>

        </div>

      </div>

    </div>
  );
}


export default LoadingScreen;