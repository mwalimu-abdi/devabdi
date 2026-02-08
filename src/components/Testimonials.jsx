import { useEffect, useState } from "react";
import "../styles/testimonials.css";
import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    name: "James Mwangi",
    role: "Business Owner",
    rating: 5,
    message:
      "Abdi delivered an excellent website for my business. The design was modern, fast, and exactly what I needed. Communication was smooth and professional throughout.",
  },
  {
    name: "Amina Hassan",
    role: "Startup Founder",
    rating: 5,
    message:
      "Working with DevAbdi was a great experience. He understood our requirements clearly and built a scalable web app that exceeded our expectations.",
  },
  {
    name: "Kevin Otieno",
    role: "E-commerce Manager",
    rating: 4,
    message:
      "Very skilled and reliable developer. Our e-commerce site performance improved greatly after his work. I highly recommend his services.",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  /* AUTO SLIDE */
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" className="testimonials">
      <div className="testimonials-container">

        {/* SLIDING LABEL */}
        <div className="testimonials-marquee">
          <span>TESTIMONIALS</span>
          <span>TESTIMONIALS</span>
          <span>TESTIMONIALS</span>
        </div>

        <h2 className="testimonials-title">What Clients Say</h2>

        {/* SLIDER */}
        <div className="testimonial-slider">
          <div
            className="testimonial-track"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {testimonials.map((item, i) => (
              <div className="testimonial-slide" key={i}>

                {/* STARS */}
                <div className="stars">
                  {[...Array(item.rating)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>

                {/* QUOTED MESSAGE */}
                <p className="testimonial-text">
                  <span className="quote open">❝</span>
                  {item.message}
                  <span className="quote close">❞</span>
                </p>

                {/* PERSON */}
                <div className="person">
                  <h4>{item.name}</h4>
                  <span>{item.role}</span>
                </div>

              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}