const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-xl border-b border-gray-100 shadow-sm">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-5">

        {/* Logo */}
        <a
          href="#home"
          className="text-2xl font-bold tracking-tight text-gray-900 hover:text-blue-600 transition-colors duration-300"
          style={{ fontFamily: "Sora, sans-serif" }}
        >
          Khushbu Jain
        </a>

        {/* Navigation */}
        <ul className="hidden md:flex items-center gap-10 text-[15px] font-medium text-gray-600">

          <li>
            <a
              href="#about"
              className="relative transition-colors duration-300 hover:text-blue-600 after:absolute after:left-0 after:-bottom-2 after:h-[2px] after:w-0 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full"
            >
              About
            </a>
          </li>

          <li>
            <a
              href="#projects"
              className="relative transition-colors duration-300 hover:text-blue-600 after:absolute after:left-0 after:-bottom-2 after:h-[2px] after:w-0 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full"
            >
              Projects
            </a>
          </li>

          <li>
            <a
              href="#tools"
              className="relative transition-colors duration-300 hover:text-blue-600 after:absolute after:left-0 after:-bottom-2 after:h-[2px] after:w-0 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full"
            >
              Tools
            </a>
          </li>

          <li>
            <a
              href="#contact"
              className="relative transition-colors duration-300 hover:text-blue-600 after:absolute after:left-0 after:-bottom-2 after:h-[2px] after:w-0 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full"
            >
              Contact
            </a>
          </li>

        </ul>

      </nav>
    </header>
  );
};

export default Navbar;