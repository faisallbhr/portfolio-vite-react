import { useSection } from "../../hooks/useSection";

const About = () => {
  const section = useSection();
  return (
    <section id="about" className="space-y-4">
      <h2
        className={`title-section ${
          section === "about" ? "sticky-title" : ""
        }`}>
        about
      </h2>
      <div className="px-4">
        <span className="h-px w-full px-4 bg-white md:block hidden relative"></span>
      </div>
      <div className="space-y-4 text-gray-400 mx-4">
        <p>
          I&apos;m an Informatics student at the University of Jember who loves
          programming. Besides learning through lectures, I also develop my
          programming skills independently, especially in{" "}
          <span className="text-white"> website development</span>. I&apos;m
          also active in opening software development services. This helped me
          gain a lot of{" "}
          <span className="text-white">
            {" "}
            experience in industry-relevant technology
          </span>
          .
        </p>
        <p>
          When I gain valuable knowledge about programming, I like to share it
          through{" "}
          <a
            href="https://medium.com/@faisallbhr"
            target="_blank"
            className="underline underline-offset-2 text-white"
            rel="noreferrer">
            Medium
          </a>{" "}
          which also serves as my documentation :D.
        </p>
        <p>
          My main focus now is frontend web development. I enjoy the process of
          implementing designs into neat and structured code, making it{" "}
          <span className="text-white"> easier to maintain</span> in the future.
        </p>
        <p className="italic text-cyan-400 hover:text-cyan-400 duration-300">
          &#47;* Programming is an art where abstract ideas are transformed into
          concrete works that can be seen and felt. *&#47;
        </p>
      </div>
    </section>
  );
};

export default About;
