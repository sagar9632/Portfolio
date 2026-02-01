import { motion } from "framer-motion";
import "../Assets/style.css";
import profile from "../Assets/sagarimg1.png"; // replace with your image

const skills = [
  { name: "Bootstrap", value: 100 },
  { name: "Wordpress", value: 100 },
  { name: ".Net", value: 85 },
  { name: "React js", value: 60 },
  { name: "Php", value: 70 },
];

export default function About() {
  return (
    <section id="about">
      <div className="about-container">
        <motion.div
          className="about-card"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2> <span class="firstletter">A</span>bout Me</h2>
          <p className="about-subtitle">
            I am a creative professional specializing in User Interface (UI) and User Experience (UX) design, crafting intuitive and visually appealing digital experiences.
          </p>

          <div className="about-content">
            <motion.div
              className="about-image"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <img src={profile} alt="Profile" />
            </motion.div>

            <motion.div
              className="about-text"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <p>
               I am a passionate Software and Web Developer with experience in building responsive, scalable, and efficient applications. I specialize in creating modern web solutions and custom software that solve real-world problems, focusing on clean code, performance, and user-friendly design. I enjoy turning ideas into functional digital products that make a difference.
              </p>

              <button className="download-btn">⬇ Download CV</button>
            </motion.div>
          </div>

          <div className="skills">
            {skills.map((skill, i) => (
              <motion.div
                className="skill"
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
              >
                <div
                  className="skill-circle"
                  style={{
                    background: `conic-gradient(#ff8a00 ${skill.value}%, #222 0)`,
                  }}
                >
                  <span>{skill.value}%</span>
                </div>
                <p>{skill.name}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
