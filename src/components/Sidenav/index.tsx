import { useSidenav } from "../../hooks/useSidenav";
import { NAV_ITEMS } from "../../utils/constant";

const Sidenav = () => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (sectionId == "about") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const active = useSidenav();
  return (
    <ul className="hidden md:block space-y-2 -mt-40">
      {NAV_ITEMS.map((item) => (
        <li key={item.section}>
          <button
            onClick={() => scrollToSection(item.section)}
            className="flex gap-2 items-center group w-fit">
            <span
              className={`block h-px group-hover:bg-white group-hover:w-20 duration-300 ${
                active === item.section ? "bg-white w-20" : "bg-gray-400 w-12"
              }`}></span>
            <small
              className={`group-hover:font-semibold group-hover:text-white duration-300 uppercase ${
                active === item.section
                  ? "font-semibold"
                  : "font-normal text-gray-400"
              }`}>
              {item.section}
            </small>
          </button>
        </li>
      ))}
    </ul>
  );
};

export default Sidenav;
