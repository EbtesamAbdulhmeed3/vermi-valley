
import { useEffect, useState } from "react";

function Typewriter({ text, speed = 28, delay = 0, className = "" }) {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    setDisplayedText("");

    let index = 0;
    let typingInterval;

    const startTimeout = setTimeout(() => {
      typingInterval = setInterval(() => {
        index++;

        setDisplayedText(Array.from(text).slice(0, index).join(""));

        if (index >= Array.from(text).length) {
          clearInterval(typingInterval);
        }
      }, speed);
    }, delay);

    return () => {
      clearTimeout(startTimeout);
      clearInterval(typingInterval);
    };
  }, [text, speed, delay]);

  return (
    <span className={`typewriter-text ${className}`}>
      {displayedText}
      <span className="typing-cursor" aria-hidden="true" />
    </span>
  );
}

export default Typewriter;
