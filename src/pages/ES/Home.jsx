import { Console } from "../../components/Console";
import { AnimatedMessages } from "../../components/AnimatedMsg";
import "../../assets/styles/home.scss";
import { VideoBackground } from "../../components/VideoBackground";
import { useContext, useEffect, useState } from "react";
import backgroundVideo from '../../assets/videos/welcome_background.mp4'
import { LanguageContext } from "../../context/languageContext";

export const Home = () => {
  const [showMessage, setShowMessage] = useState(false);
  const { isOpen } = useContext(LanguageContext);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowMessage(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Console />
      <VideoBackground src={backgroundVideo} />
      <div className={`message ${showMessage ? "show" : ""} ${isOpen ? "console-open" : "console-closed"}`}>
        <AnimatedMessages/>
      </div>
    </>
  );
};
