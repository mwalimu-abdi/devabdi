import "../styles/contact.css";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaWhatsapp,
} from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="contact-container">

        <span className="contact-label">CONTACT</span>

        <h2 className="contact-title">
          Feel free to contact me if any assistance is <br />
          needed in the future
        </h2>

        <div className="contact-items">
          {/* Location */}
          <div className="contact-item">
            <div className="contact-icon">
              <FaMapMarkerAlt />
            </div>
            <h4>Location</h4>
            <p>Nairobi, Kenya</p>
          </div>

          {/* Phone */}
          <div className="contact-item">
            <div className="contact-icon">
              <FaPhoneAlt />
            </div>
            <h4>Phone</h4>
            <p>
              <a href="tel:+254722353802">
                +254 722 353 802
              </a>
            </p>
          </div>

          {/* WhatsApp */}
          <div className="contact-item">
            <div className="contact-icon">
              <FaWhatsapp />
            </div>
            <h4>WhatsApp</h4>
            <p>
              <a
                href="https://wa.me/254722353802"
                target="_blank"
                rel="noreferrer"
              >
                +254 722 353 802
              </a>
            </p>
          </div>

          {/* Email */}
          <div className="contact-item">
            <div className="contact-icon">
              <FaEnvelope />
            </div>
            <h4>Mail</h4>
            <p>
              <a href="mailto:devabdi@gmail.com">
                devabdi@gmail.com
              </a>
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}