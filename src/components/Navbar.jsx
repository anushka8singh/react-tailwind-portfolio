import { useEffect, useState } from "react";

function Navbar() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = ["home", "projects", "contact"];

    const handleScroll = () => {
      let current = "home";

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            current = section;
          }
        }
      });

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const linkClass = (section) =>
    `transition ${
      activeSection === section
        ? "text-white font-semibold"
        : "text-gray-300 hover:text-white"
    }`;

  return (
    <nav className="fixed top-0 left-0 w-full bg-slate-900 z-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex justify-between items-center">
        <h1 className="text-lg font-semibold text-white">
          My Portfolio
        </h1>

        <div className="flex gap-6">
          <a href="#home" className={linkClass("home")}>
            Home
          </a>
          <a href="#projects" className={linkClass("projects")}>
            Projects
          </a>
          <a href="#contact" className={linkClass("contact")}>
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
