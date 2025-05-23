const CTABanner = () => {
  return (
    <section className=" text-white py-12 px-6 text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Let’s Build Something Great Together</h2>
        <p className="text-lg mb-6">
          Ready to collaborate, hire, or just chat about tech and tradition? I’m just a message away.
        </p>
        <a
          href="#contact"
          className="inline-block bg-white text-blue-700 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition"
        >
          Get In Touch
        </a>
      </div>
    </section>
  );
};

export default CTABanner;
