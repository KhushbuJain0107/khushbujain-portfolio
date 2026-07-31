const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16 px-6">

      <div className="max-w-7xl mx-auto text-center">

        {/* Name */}
        <h2
          className="text-3xl font-bold"
          style={{ fontFamily: "Sora, sans-serif" }}
        >
          Khushbu Jain
        </h2>

        {/* Tagline */}
        <p className="mt-5 max-w-2xl mx-auto text-gray-400 leading-8">
          Turning ideas into scalable, user-centric, and impactful digital
          experiences.
        </p>

        {/* Links */}
        <div className="flex justify-center gap-8 mt-10 flex-wrap">

          <a
            href="mailto:kjain8429@gmail.com"
            className="text-gray-300 hover:text-white transition duration-300"
          >
            Email
          </a>

          <a
            href="https://github.com/KhushbuJain0107"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white transition duration-300"
          >
            GitHub
          </a>

          <a
            href="https://linkedin.com/in/khushbu-jain-4a346025a/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white transition duration-300"
          >
            LinkedIn
          </a>

        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gray-700 my-10"></div>

        {/* Designed By */}
        <p className="text-gray-400">
          Designed & Developed by{" "}
          <span className="font-semibold text-white">
            Khushbu Jain
          </span>
        </p>

        {/* Copyright */}
        <p className="mt-3 text-sm text-gray-500">
          © {new Date().getFullYear()} All Rights Reserved.
        </p>

      </div>

    </footer>
  );
};

export default Footer;