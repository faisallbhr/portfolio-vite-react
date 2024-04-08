import { AnimatePresence, motion } from "framer-motion";
import { ARTICLES } from "../../utils/constant";
import { useState } from "react";
import { useSection } from "../../hooks/useSection";

const Article = () => {
  const section = useSection();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  return (
    <section id="articles" className="space-y-2">
      <h2
        className={`title-section mb-4 ${
          section === "articles" ? "sticky-title" : ""
        }`}>
        articles
      </h2>
      <div className="px-4">
        <span className="h-px w-full px-4 bg-white md:block hidden relative"></span>
      </div>
      <div className="grid p-2">
        {ARTICLES.map((item, index) => (
          <a
            href={item.link}
            key={index}
            target="_blank"
            className="relative group block p-2 h-full w-full"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            rel="noreferrer">
            <AnimatePresence>
              {hoveredIndex === index && (
                <motion.span
                  className="absolute inset-0 h-full w-full bg-cyan-200/20 block rounded"
                  layoutId="hoverBackground"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    transition: { duration: 0.15 },
                  }}
                  exit={{
                    opacity: 0,
                    transition: { duration: 0.15, delay: 0.03 },
                  }}
                />
              )}
            </AnimatePresence>
            <div className="rounded h-full w-full overflow-hidden bg-black border border-gray-400 relative z-20">
              <div className="relative z-50">
                <div className="p-4">{item.title}</div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Article;
