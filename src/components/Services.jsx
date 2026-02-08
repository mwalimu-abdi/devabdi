import "../styles/services.css";
import {
  FaShoppingCart,
  FaGlobe,
  FaGoogle,
  FaSearch,
  FaUserCog,
} from "react-icons/fa";

export default function Services() {
  return (
    <section id="services" className="services">

      {/* ===== CODE BACKGROUND ===== */}
      <pre className="code-background">
{`const buildEcommerce = () => {
  return {
    cart: true,
    checkout: true,
    adminPanel: true,
  };
};

function setupSEO(site) {
  optimize(site);
  index(site);
}

export default function Services() {
  return <BusinessOnline />;
}`}
      </pre>

      <div className="services-container">

        {/* INTRO */}
        <div className="services-left">
          <span className="services-label">SERVICES</span>

          <h2 className="services-title">
            I offer a Full-cycle of Web <br />
            Development Services
          </h2>

          <p className="services-text">
            I deliver modern, reliable and scalable web solutions using
            up-to-date technologies to help businesses grow online.
          </p>

          <p className="services-text">
            From design to deployment and ongoing support, everything is built
            to be easy to manage and ready for real-world use.
          </p>
        </div>

        {/* CARDS */}
        <div className="services-cards">

          <div className="service-card">
            <FaShoppingCart />
            <h3>E-commerce Website</h3>
            <div className="service-desc">
              <span className="code-tag open">&lt;h3&gt;</span>
              <p>
                Complete online store with product listings, shopping cart,
                checkout system and payment integration.
              </p>
              <span className="code-tag close">&lt;/h3&gt;</span>
            </div>
          </div>

          <div className="service-card">
            <FaGlobe />
            <h3>Free Hosting & Domain</h3>
            <div className="service-desc">
              <span className="code-tag open">&lt;h3&gt;</span>
              <p>
                Hosting setup and domain connection so your website goes live
                smoothly without extra setup stress.
              </p>
              <span className="code-tag close">&lt;/h3&gt;</span>
            </div>
          </div>

          <div className="service-card">
            <FaGoogle />
            <h3>Google Business Profile</h3>
            <div className="service-desc">
              <span className="code-tag open">&lt;h3&gt;</span>
              <p>
                Setup and optimization of your Google Business profile to help
                customers find you easily online.
              </p>
              <span className="code-tag close">&lt;/h3&gt;</span>
            </div>
          </div>

          <div className="service-card">
            <FaSearch />
            <h3>Search Engine Optimization</h3>
            <div className="service-desc">
              <span className="code-tag open">&lt;h3&gt;</span>
              <p>
                Improve website visibility with proper SEO structure and
                optimization.
              </p>
              <span className="code-tag close">&lt;/h3&gt;</span>
            </div>
          </div>

          <div className="service-card">
            <FaUserCog />
            <h3>Admin Panel & Free Training</h3>
            <div className="service-desc">
              <span className="code-tag open">&lt;h3&gt;</span>
              <p>
                Admin panel with free training so you can manage products,
                content and stock yourself.
              </p>
              <span className="code-tag close">&lt;/h3&gt;</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}