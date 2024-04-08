import About from "./components/About";
import Article from "./components/Article";
import Experience from "./components/Experience";
import Profile from "./components/Profile";
import Project from "./components/Project";

function App() {
  return (
    <div className="w-full bg-black bg-dot-white/20 text-white font-medium relative">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center md:bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <main className="max-w-7xl mx-auto flex flex-col md:flex-row md:gap-20 relative md:px-4">
        <div className="flex-1 md:sticky md:top-0 md:left-0 h-dvh">
          <Profile />
        </div>
        <div className="flex-1 mb-14 md:my-24 space-y-16 md:space-y-24">
          <About />
          <Experience />
          <Project />
          <Article />
          <small className="flex justify-center md:justify-end">
            Made with ❤ Faisal Bahari
          </small>
        </div>
      </main>
    </div>
  );
}

export default App;
