import "../styles/footer.css";
import {
  FaTiktok,
  FaWhatsapp,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
  FaXTwitter,
} from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <p className="footer-text">
          © {new Date().getFullYear()} DevAbdi. All rights reserved
        </p>

        <div className="footer-socials">
          {/* TikTok */}
          <a
            href="https://www.tiktok.com/@devabdii1"
            target="_blank"
            rel="noreferrer"
            aria-label="TikTok"
          >
            <FaTiktok />
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/254722353802"
            target="_blank"
            rel="noreferrer"
            aria-label="WhatsApp"
          >
            <FaWhatsapp />
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/devabdi1"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>

          {/* LinkedIn (update when ready) */}
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn />
          </a>

          {/* GitHub (update when ready) */}
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>

          {/* X (formerly Twitter) */}
          <a
            href="https://x.com"
            target="_blank"
            rel="noreferrer"
            aria-label="X"
          >
            <FaXTwitter />
          </a>
        </div>

      </div>
    </footer>
  );
}