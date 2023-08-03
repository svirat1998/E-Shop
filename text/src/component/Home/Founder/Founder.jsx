import React from "react";
import { motion } from "framer-motion";
import "./founder.css"
import me from "../../../images/founder.jpg";
const Founder = () => {
  const options = {
    initial: {
      x: "-100%",
      opacity: 0,
    },
    whileInView: {
      x: 0,
      opacity: 1,
    },
  };

  return (
    <section className="founder">
      <motion.div className="options"{...options}>
        <img className="images" src={me} alt="Founder" height={200} width={200} />
        <h3 className="name">Sonu Singh</h3>

        <p className="Details">
          Hey, Everyone I am Sonu Singh, the Student  of BCA.
          <br />
          Our aim is to create the  Website.
        </p>
      </motion.div  >
    </section>
  );
};

export default Founder;
