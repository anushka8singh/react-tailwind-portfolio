function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-sm">
      <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo / Name */}
        <h1 className="text-lg font-semibold">
          My Portfolio
        </h1>

        {/* Navigation Links */}
        <div className="flex gap-6 text-gray-600">
          <a href="#home" className="hover:text-black">
            Home
          </a>
          <a href="#projects" className="hover:text-black">
            Projects
          </a>
          <a href="#contact" className="hover:text-black">
            Contact
          </a>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;
