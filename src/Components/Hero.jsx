import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import "../Assets/style.css";
import profile from "../Assets/sagarimg1.png"; // add your image here

export default function Hero() {
  const words = ["UI/UX Designer", "Web Developer", "Software Developer"];

  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];
    let timeout;

    if (!isDeleting) {
      if (charIndex < currentWord.length) {
        timeout = setTimeout(() => {
          setText((prev) => prev + currentWord[charIndex]);
          setCharIndex(charIndex + 1);
        }, 150);
      } else {
        setIsDeleting(true);
      }
    } else {
      if (charIndex > 0) {
        timeout = setTimeout(() => {
          setText((prev) => prev.slice(0, -1));
          setCharIndex(charIndex - 1);
        }, 100);
      } else {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, wordIndex, words]);

  return (
    <section id="hero" className="hero">
      <motion.div
        className="hero-container"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Left Content */}
        <div className="hero-content">
          <h5>Hi I am</h5>
          <h1>
            Sagar <span>Shinde</span>
          </h1>

          <h2>
            {text}
            <span className="cursor">|</span>
          </h2>

          <div className="hero-buttons">
            <a href="#contact" className="btn-primary">Hire Me</a>
            <button className="btn-outline">Download CV</button>
          </div>

          <div className="stats">
            <div>
              <h3>3+</h3>
              <p>Experience</p>
            </div>
            <div>
              <h3>20+</h3>
              <p>Projects</p>
            </div>
            <div>
              <h3>30+</h3>
              <p>Happy Clients</p>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <motion.div
          className="hero-image"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <div className="image-bg">
            <img src={profile} alt="profile" />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
