const Footer = () => {
  return (
    <footer className=" text-gray-300 py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <h3 className="text-xl font-semibold mb-2">Sulayman | S8Globals</h3>
          <p className="text-sm">
            Bridging innovation with tradition — one project at a time.
          </p>
        </div>

        <div className="flex gap-6 text-lg">
          <a href="https://x.com/devs_spark" target="_blank" rel="noopener noreferrer" className="hover:text-white">
            Twitter
          </a>
          <a href="https://github.com/devspak-s8" target="_blank" rel="noopener noreferrer" className="hover:text-white">
            GitHub
          </a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </div>
      </div>

      <div className="mt-8 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Sulayman. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
