import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const LandingPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const animationVariants = {
    closed: {
      height: "100vh",
      backgroundPosition: "center",
    },
    open: {
      height: "10vh",
      backgroundPosition: "top",
      transition: {
        height: { duration: 1.5, ease: "easeInOut" },
        backgroundPosition: { duration: 1.5, ease: "easeInOut" },
      },
    },
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <div className="font-sans bg-black text-white">
      {/* Navbar fija */}
      <motion.nav
        className="fixed top-0 left-0 w-full bg-black bg-opacity-70 backdrop-blur-md z-30 p-4 flex justify-between items-center"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <div className="text-lg font-bold">Mi Portafolio</div>
        <div className="space-x-4">
          <a href="#section1" className="hover:underline">
            Sección 1
          </a>
          <a href="#section2" className="hover:underline">
            Sección 2
          </a>
        </div>
      </motion.nav>

      {/* Sección animada */}
      <motion.div
        className="bg-cover flex justify-center items-center overflow-hidden"
        style={{
          backgroundImage: isOpen ? "linear-gradient(to bottom, #ff7e5f, #feb47b)" : "url('/assets/img/Logo_porfolio_1.png')",
        }}
        variants={animationVariants}
        initial="closed"
        animate={isOpen ? "open" : "closed"}
      >
        <motion.div
          className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black to-transparent opacity-50"
          initial={{ opacity: 0.8 }}
          animate={{ opacity: isOpen ? 0 : 0.5 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />
        <button
            onClick={() => setIsOpen(true)}
            className="absolute top-0 left-0 w-full h-full opacity-0"
          >
          
        </button>
      </motion.div>

      {/* Contenido con animación al hacer scroll */}
      <div className="p-8">
        <Section
          id="section1"
          title="Sección 1"
          text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium exercitationem doloribus maxime magni facere pariatur vel! Itaque, id exercitationem iusto officia assumenda labore veritatis corrupti est quasi vel, voluptatum repellat."
        />
        <Section
          id="section2"
          title="Sección 2"
          text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto iste repudiandae exercitationem, quo obcaecati voluptates ab, earum perspiciatis nemo quidem, at ratione cupiditate quaerat temporibus quae nam minus blanditiis consectetur?"
        />
      </div>
    </div>
  );
};

// Componente para una sección con animación al hacer scroll
const Section = ({ id, title, text }) => {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <motion.div
      id={id}
      ref={ref}
      className="mb-12"
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
      }}
    >
      <h2 className="text-2xl font-semibold mb-4">{title}</h2>
      <p className="text-gray-400">{text}</p>
    </motion.div>
  );
};

export default LandingPage;
