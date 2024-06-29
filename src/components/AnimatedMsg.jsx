import { useContext, useEffect, useState } from "react";
import "../assets/styles/home.scss";
import { LanguageContext } from "../context/languageContext";

export const AnimatedMessages = () => {
    const { language } = useContext(LanguageContext);    

    const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
    const [displayedText, setDisplayedText] = useState('');
    const [isTyping, setIsTyping] = useState(true);

    useEffect(() => {
        let messages;
        if (language === "es") {
            messages = [
                " _Bienvenido a mi Portfolio",
                " _Abre la consola",
                " _Y escribe /help para empezar"
            ];
        } else {
            messages = [
                " _Welcome to my Portfolio",
                " _Open the console",
                " _And type /help to start"
            ];
        }
        const currentMessage = messages[currentMessageIndex];
        let charIndex = 0;
        const typeWriter = () => {
            if (charIndex < currentMessage.length) {
                setDisplayedText((prev) => prev + currentMessage.charAt(charIndex));
                charIndex++;
                setTimeout(typeWriter, 100);
            } else {
                setTimeout(() => {
                    setIsTyping(false);
                    setDisplayedText('');
                    setTimeout(() => {
                        setCurrentMessageIndex((prev) => (prev + 1) % messages.length);
                        setIsTyping(true);
                    }, 1000);
                }, 2000);
            }
        };

        if (isTyping) {
            setDisplayedText(''); 
            setTimeout(typeWriter, 300);
        }

    }, [currentMessageIndex]);

    return (
        <h1 className="animated-message">{displayedText}</h1>
    )
};