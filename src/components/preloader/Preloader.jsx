import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import "./Preloader.css";

function Preloader({ onComplete }) {
  const preloaderRef = useRef(null);
  const numberRef = useRef(null);

  const [progress, setProgress] = useState(0);

  useEffect(
    function () {
      const progressObject = { value: 0 };

      const animation = gsap.to(progressObject, {
        value: 100,
        duration: 3,
        ease: "power2.out",

        onUpdate: function () {
          setProgress(Math.floor(progressObject.value));
        },

        onComplete: function () {
          const timeline = gsap.timeline({
            onComplete: onComplete,
          });

          timeline.to(preloaderRef.current, {
            yPercent: -100,
            duration: 1.2,
            ease: "power4.inOut",
          });
        },
      });

      return function () {
        animation.kill();
      };
    },
    [onComplete],
  );

  return (
    <div className="preloader" ref={preloaderRef}>
      <div className="preloader-content">
        <p className="preloader-name">GABRIEL</p>

        <div className="preloader-progress">
          <span ref={numberRef}>{progress.toString().padStart(2, "0")}</span>
          <span>%</span>
        </div>

        <div className="preloader-line">
          <div
            className="preloader-line-progress"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        <p className="preloader-loading">LOADING</p>
      </div>
    </div>
  );
}

export default Preloader;
