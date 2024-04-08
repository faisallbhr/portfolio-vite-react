import { useEffect, useState } from "react";

export const useSidenav = () => {
  const [active, setActive] = useState<string | null>("about");
  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.getElementById("about");
      const experienceSection = document.getElementById("experience");
      const projectsSection = document.getElementById("projects");
      const articlesSection = document.getElementById("articles");

      const sections = [
        { id: "about", section: aboutSection },
        { id: "experience", section: experienceSection },
        { id: "projects", section: projectsSection },
        { id: "articles", section: articlesSection },
      ];

      sections.forEach(({ id, section }) => {
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.clientHeight;
          if (
            window.scrollY >= sectionTop - 200 &&
            window.scrollY < sectionTop + sectionHeight + 200
          ) {
            setActive(id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return active;
};
