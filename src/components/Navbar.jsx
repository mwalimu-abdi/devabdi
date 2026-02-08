import { useEffect, useRef, useState } from "react";
import "../styles/navbar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const dropdownRef = useRef(null);

  // 🔊 sound only for menu open / close
  const playClick = () => {
    const audio = new Audio("/sounds/click.mp3");
    audio.play();
  };

  const toggleMenu = () => {
    playClick();
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
        playClick();
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () =>
      document.removeEventListener("mousedown", handleOutsideClick);
  }, [open]);

  // smooth slow scroll (NO sound)
  const scrollToSection = (id) => {
    setOpen(false);

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
    const sections = ["home", "about", "services", "contact"];

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
        <div className="logo">DevAbdi</div>

        {/* DESKTOP NAV */}
        <nav className="nav-links">
          {["home", "about", "services", "contact"].map((item) => (
            <button
              key={item}
              className={active === item ? "active" : ""}
              onClick={() => scrollToSection(item)}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </button>
          ))}
        </nav>

        {/* MOBILE MENU BUTTON */}
        <div className="menu-btn" onClick={toggleMenu}>
          {open ? "✕" : "☰"}
        </div>
      </div>

      {/* MOBILE DROPDOWN (FULL WIDTH, SMALL HEIGHT) */}
      {open && (
        <div className="mobile-dropdown" ref={dropdownRef}>
          {["home", "about", "services", "contact"].map((item) => (
            <button
              key={item}
              className={active === item ? "active" : ""}
              onClick={() => scrollToSection(item)}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}