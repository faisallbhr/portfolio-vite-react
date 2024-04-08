import { useState, useEffect } from "react";

export const useSection = () => {
  const [section, setSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth < 768) {
        const sections = document.querySelectorAll("section");
        sections.forEach((section) => {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.clientHeight;
          if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight + 100
          ) {
            setSection(section.id);
          }
        });
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return section;
};
