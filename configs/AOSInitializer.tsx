"use client";

import { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";

export default function AOSInitializer() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return null;
}
