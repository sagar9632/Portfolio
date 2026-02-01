import { motion } from "framer-motion";
import "../Assets/style.css";
import s1 from "../Assets/s1.png";
import s2 from "../Assets/s2.png";
import s3 from "../Assets/s3.png";
import s4 from "../Assets/s4.png";
import s5 from "../Assets/s5.png";
import s6 from "../Assets/s6.png";
const services = [
  {
    title: "Website Development",
    desc: "I build fast, responsive, and scalable websites that deliver seamless user experiences and strong performance.",
    image: s1
  },
  {
    title: "Billing Software Development",
    desc: "I develop secure, accurate, and user-friendly billing software to streamline invoicing and payment processes.",
    image: s2
  },
  {
    title: "UI/UX Design",
    desc: "I design intuitive and visually appealing interfaces that enhance user experience and usability.",
  image: s3
  },
  {
    title: "E-Commerce Store Development",
    desc: "I develop secure, scalable, and user-friendly e-commerce stores that drive sales and deliver smooth shopping experiences.",
  image: s4
  },
  {
    title: "IoT Software Development",
    desc: "I build intelligent IoT software solutions that connect devices, collect data, and enable real-time monitoring and control.",
    image: s5
  },
  {
    title: "Digital Marketing",
    desc: "I create data-driven digital marketing strategies that increase brand visibility, engagement, and conversions.",
    image: s6
  },
];

export default function Services() {
  return (
    <section className="services">
      <motion.div
        className="services-container"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2><span class="firstletter">S</span>ervices</h2>
        <p className="services-sub">
         I build scalable, secure, and high-performance software solutions tailored to business needs. From concept to deployment, I focus on clean architecture and efficient code.
        </p>

        <div className="services-grid">
          {services.map((item, index) => (
            <motion.div
              key={index}
              className="service-card"
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <div className="service-icon"><img src={item.image} alt={item.title} /></div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
