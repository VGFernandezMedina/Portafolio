import { useEffect, useRef } from "react";
import gsap from "gsap";
import "./Preloader.css";

function Preloader({ onComplete }) {
  const preloaderRef = useRef(null);
  const containerRef = useRef(null);
  const textoSaludo = "Bienvenido";

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: onComplete,
      });

      tl.from(".letra", {
        yPercent: 100,
        duration: 0.9,
        stagger: 0.04,
        ease: "power4.out",
      })

        .from(
          ".preloader-subtitle",
          {
            opacity: 0,
            y: 10,
            duration: 0.5,
            ease: "power2.out",
          },
          "-=0.4",
        )

        .to({}, { duration: 0.5 })

        .to(preloaderRef.current, {
          opacity: 0,
          duration: 0.8,
          ease: "power2.inOut",
        });
    }, containerRef);

    return () => ctx.revert();
  }, [onComplete]);

  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    window.scrollTo(0, 0);

    return () => {
      if ("scrollRestoration" in window.history) {
        window.history.scrollRestoration = "auto";
      }
    };
  }, []);

  return (
    <div className="preloader" ref={preloaderRef}>
      <div className="preloader-content" ref={containerRef}>
        <h1 className="preloader-title">
          {textoSaludo.split("").map((letra, index) => (
            <span key={index} className="letra-wrapper">
              <span className="letra">{letra === " " ? "\u00A0" : letra}</span>
            </span>
          ))}
        </h1>
        <p className="preloader-subtitle">portafolio</p>
      </div>
    </div>
  );
}

export default Preloader;
