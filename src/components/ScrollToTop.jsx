import React, { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <>
      <style>{`
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideOutDown {
          from {
            opacity: 1;
            transform: translateY(0);
          }
          to {
            opacity: 0;
            transform: translateY(20px);
          }
        }

        .scroll-to-top-btn {
          animation: slideInUp 0.4s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }

        .scroll-to-top-btn.hidden {
          animation: slideOutDown 0.4s cubic-bezier(0.4, 0, 0.2, 1) forwards;
          pointer-events: none;
        }

        .scroll-btn-icon {
          transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .scroll-btn-container:hover .scroll-btn-icon {
          transform: translateY(-3px);
        }
      `}</style>

      {isVisible && (
        <button
          onClick={scrollToTop}
          className="scroll-to-top-btn fixed bottom-8 right-8 z-40 p-3 rounded-full bg-primary text-primary-foreground shadow-glow hover:shadow-[0_0_30px_rgba(0,119,255,0.6)] transition-all duration-300 scroll-btn-container hover:cursor-pointer"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-5 h-5 scroll-btn-icon" />
        </button>
      )}

      {!isVisible && (
        <div className="scroll-to-top-btn hidden" />
      )}
    </>
  );
} 