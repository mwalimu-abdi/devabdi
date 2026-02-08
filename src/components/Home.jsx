import { useEffect, useState } from "react";
import "../styles/home.css";

import {
  FaHtml5,
  FaReact,
  FaVuejs,
  FaJs,
  FaBootstrap,
  FaCss3Alt,
} from "react-icons/fa";

/* HERO IMAGES */
import electronics from "../assets/electronics.png";
import footwear from "../assets/footwear.png";
import cart from "../assets/cart.png";
import checkout from "../assets/checkout.png";
import login from "../assets/login.png";

const heroSlides = [
  { img: electronics },
  { img: footwear },
  { img: cart },
  { img: checkout },
  { img: login },
];

/* ROTATING STATEMENTS */
const statements = [
  "Make your business live with DevAbdi.",
  "Get your business recognized on Google.",
  "Build a strong online presence today.",
  "Your business, professionally online.",
  "Grow your brand beyond social media.",
  "Reach more customers online.",
];

export default function Home() {
  const [index, setIndex] = useState(0);
  const [fading, setFading] = useState(false);

  const [textIndex, setTextIndex] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  /* IMAGE SLIDE – DESKTOP SLOW, MOBILE SAME */
  useEffect(() => {
    const isDesktop = window.innerWidth >= 1024;
    const intervalTime = isDesktop ? 8000 : 3500;

    const interval = setInterval(() => {
      if (index === heroSlides.length - 1) {
        // fade out before reset
        setFading(true);

        setTimeout(() => {
          setIndex(0);
          setFading(false);
        }, 400);
      } else {
        setIndex((prev) => prev + 1);
      }
    }, intervalTime);

    return () => clearInterval(interval);
  }, [index]);

  /* TYPE + ERASE EFFECT */
  useEffect(() => {
    const currentText = statements[textIndex];
    let timeout;

    if (!isDeleting && charIndex < currentText.length) {
      timeout = setTimeout(() => {
        setTypedText(currentText.slice(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
      }, 90);
    } else if (!isDeleting && charIndex === currentText.length) {
      timeout = setTimeout(() => setIsDeleting(true), 1400);
    } else if (isDeleting && charIndex > 0) {
      timeout = setTimeout(() => {
        setTypedText(currentText.slice(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);
      }, 45);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setTextIndex((prev) => (prev + 1) % statements.length);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, textIndex]);

  return (
    <section id="home" className="home">
      <div className="home-container">

        {/* LEFT */}
        <div className="home-left">
          <h1 className="home-title">
            <span>Web</span>
            <span>Developer</span>
          </h1>

          <p className="home-description">
            I’m <strong>DevAbdi</strong>, a passionate Web Developer based in
            Nairobi, Kenya, specializing in building modern, fast, and scalable
            web applications with great user experience.
          </p>

          <div className="skills-row">
            <span className="skills-label">High knowledge on softwares</span>
            <div className="tech-icons">
              <span className="icon html"><FaHtml5 /></span>
              <span className="icon react"><FaReact /></span>
              <span className="icon vue"><FaVuejs /></span>
              <span className="icon js"><FaJs /></span>
              <span className="icon bootstrap"><FaBootstrap /></span>
              <span className="icon css"><FaCss3Alt /></span>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="home-right">
          <div className="hero-slider">

            <div className="hero-handwriting">
              {typedText}
              <span className="cursor">|</span>
            </div>

            <div className={`hero-fade ${fading ? "fade" : ""}`}>
              <img
                src={heroSlides[index].img}
                alt="Project preview"
                className="hero-image"
              />
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}