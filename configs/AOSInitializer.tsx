"use client";

import AOS from "aos";
import { useEffect } from "react";

// Import AOS styles
import "aos/dist/aos.css";

export default function AOSInitializer() {
  useEffect(() => {
    AOS.init({
      // Set animation duration to 1000ms (1 second)
      duration: 1000,

      // Ensure animations happen only once
      once: true,
    });
  }, []);

  // This component does not render anything
  return null;
}
