import "../styles/about.css";
import profile from "../assets/profile.png";

export default function About() {
  return (
    <section id="about" className="about">
      <div className="about-container">

        {/* LEFT */}
        <div className="about-left">
          <div className="about-image-wrapper">
            <img src={profile} alt="DevAbdi" />

            {/* Rotating circle */}
            <div className="experience-circle">
              <svg viewBox="0 0 200 200">
                <defs>
                  <path
                    id="circlePath"
                    d="
                      M 100, 100
                      m -75, 0
                      a 75,75 0 1,1 150,0
                      a 75,75 0 1,1 -150,0
                    "
                  />
                </defs>

                <text>
                  <textPath href="#circlePath">
                    YEARS OF WORK EXPERIENCE • SUCECCFUL WEB DEVELOPMENT • 
                  </textPath>
                </text>
              </svg>

              <span className="experience-number">4</span>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="about-right">
          <span className="about-label">ABOUT ME</span>

          <h2 className="about-title">Web Developer</h2>

          <p>
            I’m <strong>DevAbdi</strong>, a dedicated Web Developer based in
            Nairobi, Kenya, with over four years of hands-on experience in
            building modern web applications.
          </p>

          <p>
            I specialize in creating clean, scalable, and high-performance
            solutions using modern JavaScript technologies. My focus is on
            writing maintainable code, delivering great user experiences, and
            building products that solve real-world problems.
          </p>

          <p>
            I enjoy working on both frontend and full-stack projects and I’m
            always eager to learn, improve, and adapt to new technologies.
          </p>
        </div>

      </div>
    </section>
  );
}