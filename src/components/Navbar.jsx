import { useEffect, useRef, useState } from "react";
import "../styles/navbar.css";
import { FaLaptopCode } from "react-icons/fa";

// ✅ IMPORT AUDIO FROM ASSETS (VITE SAFE)
import clickOpen from "../assets/click.mp3";
import clickClose from "../assets/click2.mp3";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const dropdownRef = useRef(null);

  // 🔊 audio refs
  const openSoundRef = useRef(null);
  const closeSoundRef = useRef(null);

  // preload audio ONCE
  useEffect(() => {
    openSoundRef.current = new Audio(clickOpen);
    closeSoundRef.current = new Audio(clickClose);

    openSoundRef.current.volume = 0.5;
    closeSoundRef.current.volume = 0.5;
  }, []);

  const playOpenSound = () => {
    if (!openSoundRef.current) return;
    openSoundRef.current.currentTime = 0;
    openSoundRef.current.play().catch(() => {});
  };

  const playCloseSound = () => {
    if (!closeSoundRef.current) return;
    closeSoundRef.current.currentTime = 0;
    closeSoundRef.current.play().catch(() => {});
  };

  const toggleMenu = () => {
    if (!open) {
      playOpenSound(); // opening
    } else {
      playCloseSound(); // closing
    }
    setOpen((prev) => !prev);
  };

  // close menu when clicking outside (mobile)
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (
        open &&
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target) &&
        !e.target.closest(".menu-btn")
      ) {
        playCloseSound();
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () =>
      document.removeEventListener("mousedown", handleOutsideClick);
  }, [open]);

  // smooth scroll (NO sound except close)
  const scrollToSection = (id) => {
    if (open) {
      playCloseSound();
      setOpen(false);
    }

    const target = document.getElementById(id);
    const navbar = document.querySelector(".navbar");
    if (!target || !navbar) return;

    const navbarHeight = navbar.offsetHeight;
    const startY = window.pageYOffset;
    const targetY =
      target.getBoundingClientRect().top +
      window.pageYOffset -
      navbarHeight;

    const distance = targetY - startY;
    const duration = 900;
    let startTime = null;

    const easeInOut = (t) =>
      t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;

    const animateScroll = (time) => {
      if (!startTime) startTime = time;
      const progress = Math.min((time - startTime) / duration, 1);

      window.scrollTo(0, startY + distance * easeInOut(progress));

      if (progress < 1) requestAnimationFrame(animateScroll);
    };

    requestAnimationFrame(animateScroll);
  };

  // active section tracking
  useEffect(() => {
    const sections = ["home", "about", "services", "contact", "testimonials"];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <header className="navbar">
      <div className="nav-container">

        {/* LOGO */}
        <div className="logo" onClick={() => scrollToSection("home")}>
          <span className="logo-icon">
            <FaLaptopCode />
          </span>
          <span className="logo-text">
            &lt;
            <span className="logo-dev">Dev</span>
            <span className="logo-abdi">Abdi</span>
            /&gt;
          </span>
        </div>

        {/* DESKTOP NAV */}
        <nav className="nav-links">
          {["home", "about", "services", "contact", "testimonials"].map(
            (item) => (
              <button
                key={item}
                className={active === item ? "active" : ""}
                onClick={() => scrollToSection(item)}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </button>
            )
          )}
        </nav>

        {/* MOBILE MENU BUTTON */}
        <div className="menu-btn" onClick={toggleMenu}>
          {open ? "✕" : "☰"}
        </div>
      </div>

      {/* MOBILE DROPDOWN */}
      {open && (
        <div className="mobile-dropdown" ref={dropdownRef}>
          {["home", "about", "services", "contact", "testimonials"].map(
            (item) => (
              <button
                key={item}
                className={active === item ? "active" : ""}
                onClick={() => scrollToSection(item)}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </button>
            )
          )}
        </div>
      )}
    </header>
  );
}