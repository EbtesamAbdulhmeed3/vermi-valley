
import { useEffect, useRef } from "react";

function WormCursor() {
  const wormRef = useRef(null);

  useEffect(() => {
    const worm = wormRef.current;
    if (!worm) return;

    const finePointer = window.matchMedia(
      "(hover: hover) and (pointer: fine)"
    );
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );

    if (!finePointer.matches) return;

    const target = { x: -100, y: -100, angle: 0 };
    const current = { x: -100, y: -100, angle: 0 };

    let previousX = null;
    let previousY = null;
    let animationFrame;
    let visible = false;
    let startTime = 0;

    const handleMouseMove = (event) => {
      const x = event.clientX;
      const y = event.clientY;

      if (previousX !== null && previousY !== null) {
        const dx = x - previousX;
        const dy = y - previousY;

        if (Math.abs(dx) + Math.abs(dy) > 1.5) {
          target.angle = Math.atan2(dy, dx) * (180 / Math.PI);
        }
      }

      previousX = x;
      previousY = y;
      target.x = x;
      target.y = y;

      if (!visible) {
        visible = true;
        worm.style.opacity = "1";
        document.body.classList.add("worm-cursor-enabled");
      }
    };

    const hideWorm = () => {
      visible = false;
      worm.style.opacity = "0";
      document.body.classList.remove("worm-cursor-enabled");
      previousX = null;
      previousY = null;
    };

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;

      const elapsed = (timestamp - startTime) / 1000;
      const ease = reducedMotion.matches ? 1 : 0.16;

      current.x += (target.x - current.x) * ease;
      current.y += (target.y - current.y) * ease;

      let angleDifference = target.angle - current.angle;
      angleDifference = ((angleDifference + 540) % 360) - 180;
      current.angle += angleDifference * ease;

      // حركة عضوية ناعمة بدل الاهتزاز العشوائي
      const sway = reducedMotion.matches
        ? 0
        : Math.sin(elapsed * 5.2) * 2.2;

      const bob = reducedMotion.matches
        ? 0
        : Math.sin(elapsed * 7.1) * 1.1;

      worm.style.transform = `
        translate3d(
          ${current.x - 34 + bob}px,
          ${current.y - 19 + sway}px,
          0
        )
        rotate(${current.angle}deg)
      `;

      animationFrame = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", hideWorm);
    window.addEventListener("blur", hideWorm);

    animationFrame = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", hideWorm);
      window.removeEventListener("blur", hideWorm);
      document.body.classList.remove("worm-cursor-enabled");
    };
  }, []);

  return (
    <>
      <style>{`
        @media (hover: hover) and (pointer: fine) {
          body.worm-cursor-enabled,
          body.worm-cursor-enabled * {
            cursor: none !important;
          }

          body.worm-cursor-enabled input,
          body.worm-cursor-enabled textarea,
          body.worm-cursor-enabled [contenteditable="true"] {
            cursor: text !important;
          }

          body.worm-cursor-enabled select {
            cursor: auto !important;
          }
        }

        .worm-cursor {
          position: fixed;
          top: 0;
          left: 0;
          width: 68px;
          height: 42px;
          z-index: 999999;
          pointer-events: none;
          opacity: 0;
          transform-origin: 34px 19px;
          will-change: transform, opacity;
          transition: opacity 180ms ease;
        }

        .worm-cursor-art {
          width: 100%;
          height: 100%;
          overflow: visible;
          animation: worm-body-float 1.8s ease-in-out infinite;
        }

        .worm-cursor-tail {
          transform-origin: 13px 25px;
          animation: worm-tail-wave 850ms ease-in-out infinite alternate;
        }

        .worm-cursor-head {
          transform-origin: 53px 17px;
          animation: worm-head-bob 1.15s ease-in-out infinite alternate;
        }

        @keyframes worm-body-float {
          0%, 100% {
            transform: translateY(0) scaleY(1);
          }
          50% {
            transform: translateY(-1px) scaleY(1.035);
          }
        }

        @keyframes worm-tail-wave {
          from {
            transform: rotate(-3deg) translateY(0);
          }
          to {
            transform: rotate(3deg) translateY(1px);
          }
        }

        @keyframes worm-head-bob {
          from {
            transform: rotate(-1deg);
          }
          to {
            transform: rotate(2deg);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .worm-cursor-art,
          .worm-cursor-tail,
          .worm-cursor-head {
            animation: none !important;
          }
        }
      `}</style>

      <div ref={wormRef} className="worm-cursor" aria-hidden="true">
        <svg
          className="worm-cursor-art"
          viewBox="0 0 68 42"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient
              id="wormBodyGradient"
              x1="8"
              y1="8"
              x2="59"
              y2="32"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" stopColor="#C69A70" />
              <stop offset="0.42" stopColor="#936644" />
              <stop offset="1" stopColor="#65452F" />
            </linearGradient>

            <linearGradient
              id="wormHighlightGradient"
              x1="13"
              y1="10"
              x2="48"
              y2="24"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#F0C99F" />
              <stop offset="1" stopColor="#B9875F" />
            </linearGradient>

            <radialGradient
              id="wormHeadGradient"
              cx="0"
              cy="0"
              r="1"
              gradientTransform="matrix(12 12 -10 10 49 8)"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#B8875D" />
              <stop offset="1" stopColor="#65452F" />
            </radialGradient>
          </defs>

          {/* Shadow */}
          <path
            d="M7 30C17 18 24 18 32 23C40 28 47 23 54 19"
            stroke="#38291D"
            strokeOpacity=".16"
            strokeWidth="10"
            strokeLinecap="round"
            filter="blur(2px)"
          />

          {/* Body */}
          <g className="worm-cursor-tail">
            <path
              d="M6 27C12 18 19 15 26 19C33 23 37 27 44 24C49 22 51 17 56 16"
              stroke="url(#wormBodyGradient)"
              strokeWidth="10"
              strokeLinecap="round"
            />

            <path
              d="M9 24C16 17 21 17 27 20C34 24 39 26 46 22"
              stroke="url(#wormHighlightGradient)"
              strokeWidth="2"
              strokeLinecap="round"
              opacity=".72"
            />

            {/* Body rings */}
            <path
              d="M17 17.5C19 20 19 22 17.8 24M27 19.5C29 22 29 24 27.5 26M38 23C39.5 25 39.5 26.5 38.5 28"
              stroke="#563A28"
              strokeWidth="1.1"
              strokeLinecap="round"
              opacity=".38"
            />
          </g>

          {/* Head */}
          <g className="worm-cursor-head">
            <ellipse
              cx="54"
              cy="16"
              rx="10"
              ry="8.5"
              fill="url(#wormHeadGradient)"
            />

            <ellipse
              cx="51"
              cy="12"
              rx="4.5"
              ry="2.2"
              fill="#E3B88D"
              opacity=".38"
            />

            {/* Eyes */}
            <ellipse cx="53" cy="15" rx="1.8" ry="2.2" fill="#FFF8EA" />
            <circle cx="53.5" cy="15.2" r=".9" fill="#2C2119" />
            <ellipse cx="60" cy="14.5" rx="1.7" ry="2.1" fill="#FFF8EA" />
            <circle cx="60.4" cy="14.8" r=".85" fill="#2C2119" />

            {/* Smile */}
            <path
              d="M54.5 20C56.5 21.8 58.5 21.8 60 19.8"
              stroke="#EBC7A5"
              strokeWidth="1.2"
              strokeLinecap="round"
            />

            <ellipse
              cx="49.5"
              cy="20"
              rx="2.1"
              ry="1.2"
              fill="#D99A82"
              opacity=".55"
            />
          </g>
        </svg>
      </div>
    </>
  );
}

export default WormCursor;
