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
  electronics,
  footwear,
  cart,
  checkout,
  login,
];

export default function Home() {
  const [index, setIndex] = useState(0);

  /* auto slide */
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % heroSlides.length);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

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

          {/* LABEL + ICONS ROW */}
          <div className="skills-row">
            <span className="skills-label">
              High knowledge on softwares
            </span>

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

        {/* RIGHT – ECOMMERCE HERO SLIDER */}
        <div className="home-right">
          <div className="hero-slider">
            <div
              className="hero-track"
              style={{ transform: `translateX(-${index * 100}%)` }}
            >
              {heroSlides.map((img, i) => (
                <div className="hero-slide" key={i}>
                  <img src={img} alt="Ecommerce preview" />
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}