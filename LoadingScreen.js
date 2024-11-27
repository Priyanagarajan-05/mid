/*
import React from "react";
import { motion } from "framer-motion";
import logo from "../assets/DiGiPo.png";
 
// LogoSpinner component accepts a `isPulse` prop to decide the animation type
const LogoSpinner = ({ isPulse }) => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-blue-100">
      <motion.img
        src={logo}
        alt="Loading"
        className="w-40 h-40"
        animate={{
          // Choose animation based on `isPulse` prop
          rotateY: isPulse ? 0 : 360, // No rotation in pulse, rotation in old effect
          scale: isPulse ? [1, 1.1, 1] : [1, 1.2, 1], // Pulse effect or larger scaling for old effect
        }}
        transition={{
          repeat: isPulse ? Infinity : 0, // Pulse loops infinitely, rotation does not
          duration: isPulse ? 1.5 : 2, // Shorter duration for pulse
          ease: "easeInOut",
          times: [0, 0.5, 1], // Pulse timing
        }}
        style={{ transformStyle: "preserve-3d" }} // Keep 3D effect for the old animation
      />
    </div>
  );
};
 
export default LogoSpinner;
 */

/*
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import logo from "../assets/DiGiPo.png";

const LogoSpinner = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate page load complete after 3 seconds
    setTimeout(() => setIsLoading(false), 3000);
  }, []);

  return (
    <div className="flex justify-center items-center min-h-screen bg-blue-100">
      {}
      <div
        className="relative"
        style={{
          width: "120px",
          height: "120px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {}
        <motion.div
          className="absolute inset-0 border-4 border-t-blue-500 border-r-transparent border-b-blue-500 border-l-transparent rounded-full"
          animate={{
            rotate: 360,
          }}
          transition={{
            repeat: Infinity,
            duration: 1.5,
            ease: "linear",
          }}
          style={{
            width: "100%",
            height: "100%",
          }}
        />
        {}
        <motion.img
          src={logo}
          alt="Loading"
          className="absolute inset-0 m-auto"
          style={{
            width: "50px", // Adjust the logo size to small
            height: "50px", // Adjust the logo size to small
            objectFit: "contain", // Keep logo proportions intact
            opacity: isLoading ? 1 : 0, // Blinking effect when loading
            animation: isLoading
              ? "blink 1s linear infinite"
              : "none", // Blink while loading
          }}
          animate={{
            scale: [1, 1.1, 1],
          }}
          transition={{
            repeat: Infinity,
            duration: 1.5,
            ease: "easeInOut",
          }}
        />
      </div>

      {}
      <div className="flex justify-center items-center gap-2 mt-4">
        <span className="dot animate-bounce"></span>
        <span className="dot animate-bounce delay-200"></span>
        <span className="dot animate-bounce delay-400"></span>
      </div>

      {}
      <style>{`
        @keyframes blink {
          0% {
            opacity: 1;
          }
          50% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};

export default LogoSpinner;
*/


import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const LogoSpinner = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate page load complete after 3 seconds
    setTimeout(() => setIsLoading(false), 3000);
  }, []);

  return (
    <div className="flex justify-center items-center min-h-screen bg-blue-100">
      {/* Wrapper for loading dots */}
      <div className="flex justify-center items-center">
        {/* Loading dots */}
        <motion.div
          className="flex gap-2"
          animate={{ opacity: [0, 1, 0] }}
          transition={{
            repeat: Infinity,
            duration: 1.5,
            ease: "easeInOut",
            times: [0, 0.5, 1],
          }}
        >
          <span
            className="dot animate-bounce"
            style={{
              opacity: isLoading ? 1 : 0,
              animationDelay: "0s",
            }}
          ></span>
          <span
            className="dot animate-bounce"
            style={{
              opacity: isLoading ? 1 : 0,
              animationDelay: "0.2s",
            }}
          ></span>
          <span
            className="dot animate-bounce"
            style={{
              opacity: isLoading ? 1 : 0,
              animationDelay: "0.4s",
            }}
          ></span>
        </motion.div>
      </div>

      {/* Loading spinner CSS */}
      <style>{`
        @keyframes blink {
          0% {
            opacity: 1;
          }
          50% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }

        .dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background-color: #000;
          display: inline-block;
        }
      `}</style>
    </div>
  );
};

export default LogoSpinner;


