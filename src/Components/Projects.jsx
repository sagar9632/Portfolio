import { motion } from "framer-motion";
import { useState } from "react";
import "../Assets/style.css";
import lodge from "../Assets/hotel.jpg";
import leafchap from "../Assets/leafchap.jpg";
import mobile from "../Assets/mobile.jpg";
import realestate from "../Assets/realestate.jpg";
import job from "../Assets/job.jpg";
import gym from "../Assets/gym.jpg";
import resto from "../Assets/restraunt.jpg";
import vlss from "../Assets/vlss.jpg";

const filters = [
  "All",
  "Website Design",
  "Billing Software",
  "IOT Software",
];

const projects = [
  { title: "Parth Builders", category: "Website Design", image: realestate },
  { title: "The Job Factory", category: "Website Design", image: job },
  { title: "The Leaf Chap", category: "Website Design", image: leafchap },
  { title: "Gym Management", category: "Billing Software", image: gym },
  { title: "Restraunt Management", category: "Billing Software", image: resto },
  { title: "Lodge Management", category: "Billing Software", image: lodge },
  { title: "Vertical Lift", category: "IOT Software", image: vlss },
  { title: "Mobile Unit", category: "IOT Software", image: mobile },
];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects">
      <div className="portfolio-container">
        <motion.div
          className="portfolio-card"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2><span class="firstletter">P</span>rojects</h2>

          {/* Filters */}
          <div className="portfolio-filters">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`filter-btn ${
                  activeFilter === filter ? "active" : ""
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Grid */}
          <motion.div layout className="portfolio-grid">
            {filteredProjects.map((p, i) => (
              <motion.div
                key={p.title}
                layout
                className="portfolio-item"
                whileHover={{ scale: 1.04 }}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <img src={p.image} alt={p.title} />
                <div className="portfolio-overlay">
                  <h3>{p.title}</h3>
                  <span>{p.category}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
