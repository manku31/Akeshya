"use client";

import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  // Function to scroll the window to the top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      {isVisible && (
        <div className="fixed bottom-10 right-10">
          <button
            onClick={scrollToTop}
            className="bg-blue-900 w-[40px] h-[40px] flex justify-center items-center  hover:bg-primary-light text-white font-bold rounded-[2px]"
          >
            <FaArrowUp className="text-[20px]" />
          </button>
        </div>
      )}
    </>
  );
}
