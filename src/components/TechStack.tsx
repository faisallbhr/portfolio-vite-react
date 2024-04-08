const TechStack = ({ index, tech }: { index: number; tech: string }) => {
  return (
    <small
      key={index}
      className="px-3 py-1 rounded-full bg-cyan-200/20 text-cyan-500 group-hover:text-cyan-400 duration-300 font-medium shadow"
    >
      {tech}
    </small>
  );
};

export default TechStack;
