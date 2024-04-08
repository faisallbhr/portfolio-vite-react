import { LuArrowUpRight } from "react-icons/lu";
import { PROJECTS } from "../../utils/constant";
import TechStack from "../TechStack";
import JobDescription from "../JobDescription";
import { useSection } from "../../hooks/useSection";

const Project = () => {
  const section = useSection();
  return (
    <section id="projects" className="space-y-2">
      <h2
        className={`title-section mb-4 ${
          section === "projects" ? "sticky-title" : ""
        }`}>
        projects
      </h2>
      <div className="px-4">
        <span className="h-px w-full px-4 bg-white md:block hidden relative"></span>
      </div>
      <div className="space-y-4">
        {PROJECTS.map((item, index) => (
          <a
            href={item.link}
            target="_blank"
            key={index}
            className="block"
            rel="noreferrer">
            <div className="group hover:md:bg-gray-50 hover:md:bg-opacity-10 p-4 duration-300 rounded">
              <h3 className=" group-hover:text-cyan-400">
                {item.name} &bull; {item.position}{" "}
                <span className="arrow-link">
                  <LuArrowUpRight />
                </span>
              </h3>
              <span className="italic text-sm">{item.description}</span>
              <ul className="my-2">
                {item.jobDesc.map((job, jobIndex) => (
                  <JobDescription key={jobIndex} index={jobIndex} job={job} />
                ))}
              </ul>
              <div className="flex flex-wrap gap-2">
                {item.techStack.map((tech, techIndex) => (
                  <TechStack key={techIndex} index={techIndex} tech={tech} />
                ))}
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Project;
