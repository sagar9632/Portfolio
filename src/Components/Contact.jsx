import { motion } from "framer-motion";
import "../Assets/style.css";

export default function Contact() {
  return (
    <section id="contact">
      <div className="contact-container">
        <motion.div
          className="contact-card"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2><span class="firstletter">C</span>ontact me</h2>
          <p className="contact-subtitle">
            Cultivating Connections: Reach Out And Connect With Me
          </p>

          <form className="contact-form">
            <div className="form-grid">
              <input type="text" placeholder="Name" />
              <input type="email" placeholder="Email" />
              <input type="tel" placeholder="Phone Number" />
              <select>
                <option>Service Of Interest</option>
                <option>Website Design</option>
                <option>App Design</option>
                <option>Branding</option>
                <option>Video Editing</option>
              </select>
              <input type="text" placeholder="Timeline" />
              <textarea placeholder="Project Details..." />
            </div>

            <button type="submit" className="send-btn">
              Send
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
