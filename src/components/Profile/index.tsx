import { SOCIAL_MEDIA } from "../../utils/constant";
import Sidenav from "../Sidenav";

const Profile = () => {
  return (
    <section className="h-full flex flex-col md:justify-between py-14 md:py-24 px-4">
      <div>
        <h1 className="font-bold text-4xl md:text-5xl">Faisal Bahari</h1>
        <h2 className="font-medium text-xl md:text-2xl my-2 text-cyan-400">
          Frontend Web Developer
        </h2>
        <p className="text-gray-400 mb-4">
          Crafting responsive and engaging user interfaces, emphasizing clean
          and maintainable code.
        </p>
      </div>
      <Sidenav />
      <div className="flex flex-wrap gap-4 items-center">
        <a
          href="https://wa.me/6282229406271"
          target="_blank"
          className="bg-black duration-300 w-fit" rel="noreferrer"
        >
          <button className="flex gap-2 items-center border px-3 py-[9px] text-[14px] leading-3 font-normal rounded light">
            {/* <SiWhatsapp size={20} /> */}
            Contact Now
          </button>
        </a>
        {SOCIAL_MEDIA.map((item, index) => (
          <a
            href={item.link}
            target="_blank"
            key={index}
            className="bg-black duration-300 w-fit" rel="noreferrer"
          >
            <item.image
              size={32}
              title={item.title}
              className="border p-1.5 rounded light"
            />
          </a>
        ))}
      </div>
    </section>
  );
};

export default Profile;
