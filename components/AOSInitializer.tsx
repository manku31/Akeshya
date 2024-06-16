"use client";

import { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";

export default function AOSInitializer() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Customize the duration here
      once: true, // Whether animation should happen only once - while scrolling down
    });
  }, []);

  return null;
}
