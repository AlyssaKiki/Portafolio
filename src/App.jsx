import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./App.scss";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  const kimTextRef = useRef(null);
  const kimImageRef = useRef(null);
  const topTextRef = useRef(null);
  const bottomTextRef = useRef(null);
  const hireMeButtonRef = useRef(null);
  const aboutSectionRef = useRef(null);
  const windowBoxRef = useRef(null);

  // Animación del texto "KIM" y la imagen
  useEffect(() => {
    gsap.to(kimTextRef.current, {
      opacity: 0,
      y: -100,
      scrollTrigger: {
        trigger: kimTextRef.current,
        start: "top center",
        end: "bottom center",
        scrub: true,
      },
    });

    gsap.fromTo(
      kimImageRef.current,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: kimImageRef.current,
          start: "top bottom",
          end: "center center",
          scrub: true,
        },
      }
    );
  }, []);

  // Animación del texto en bucle (cinta)
  useEffect(() => {
    gsap.to(topTextRef.current, {
      x: "-100%",
      duration: 10,
      repeat: -1,
      ease: "none",
    });

    gsap.to(bottomTextRef.current, {
      x: "100%",
      duration: 10,
      repeat: -1,
      ease: "none",
    });
  }, []);

  // Efecto Hover del Botón Circular
  useEffect(() => {
    const button = hireMeButtonRef.current;
    gsap.to(button, {
      backgroundColor: "#FF3B3B",
      color: "#FFFFFF",
      duration: 0.3,
      paused: true,
    });

    button.addEventListener("mouseenter", () => {
      gsap.to(button, { backgroundColor: "#FF3B3B", color: "#FFFFFF", duration: 0.3 });
    });

    button.addEventListener("mouseleave", () => {
      gsap.to(button, { backgroundColor: "transparent", color: "#000000", duration: 0.3 });
    });
  }, []);

  // Animación de entrada y salida de la sección "About"
  useEffect(() => {
    gsap.fromTo(
      aboutSectionRef.current,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: aboutSectionRef.current,
          start: "top 80%",
          end: "top 50%",
          scrub: true,
        },
      }
    );
  }, []);

  // Animación de la caja "Estilo Ventana"
  useEffect(() => {
    gsap.fromTo(
      windowBoxRef.current,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: windowBoxRef.current,
          start: "top 80%",
          end: "top 50%",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <div className="app">
      {/* Sección "KIM" */}
      <div className="hero-section">
        <h1 ref={kimTextRef} className="kim-text">
          KIM
        </h1>
        <img
          ref={kimImageRef}
          src="//colocar imagen"
          alt="Hero"
          className="hero-image"
        />
      </div>

      {/* Texto en bucle */}
      <div className="text-loop">
        <div ref={topTextRef} className="top-text">
          •Aly brand ••Aly brand ••ALY BRAND•
        </div>
        <div ref={bottomTextRef} className="bottom-text">
          •SELECTED WORKS2025 ••SELECTED WORKS2025 ••SELECTED WORKS2025 •
        </div>
      </div>

      {/* Botón "Hire me now" */}
      <button ref={hireMeButtonRef} className="hire-me-button">
        Hire me now
      </button>

      {/* Sección "About" */}
      <div ref={aboutSectionRef} className="about-section">
        <h2>About Me</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel
          purus nec nisi tincidunt tincidunt.
        </p>
      </div>

      {/* Caja "Estilo Ventana" */}
      <div ref={windowBoxRef} className="window-box">
        <video
          src="//colocar video"
          autoPlay
          loop
          muted
          className="window-video"
        />
      </div>
    </div>
  );
};

export default App;