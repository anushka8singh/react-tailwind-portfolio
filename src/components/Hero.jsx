function Hero() {
  return (
    <section className="py-16 px-6">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-12 items-center md:items-start">
        
        {/* LEFT COLUMN */}
        <div className="w-full md:w-1/2 text-center md:text-left space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold">
            Anushka Singh
          </h1>

          <h2 className="text-xl md:text-2xl text-gray-600">
            Aspiring Software Developer
          </h2>

          <p className="text-base text-gray-500 leading-relaxed">
            I am an aspiring Software Developer with a strong interest in building
            real-world web applications. I enjoy turning ideas into functional and
            user-friendly solutions using modern technologies. Currently, I am
            focused on improving my problem-solving skills, learning best
            development practices, and building projects that strengthen my
            foundation in software engineering.
          </p>

          <button className="inline-block bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition">
            Contact Me
          </button>
        </div>

        {/* RIGHT COLUMN */}
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="w-48 h-48 bg-gray-200 rounded-xl flex items-center justify-center text-gray-500">
            Image Here
          </div>
        </div>

      </div>
    </section>
  );
}

export default Hero;
