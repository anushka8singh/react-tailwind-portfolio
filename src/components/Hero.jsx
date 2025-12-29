import FadeInSection from "./FadeInSection";
import PHOTO from "../assets/PHOTO.jpeg";
function Hero() {
  return (
    <section id="home"
  className="min-h-screen snap-start pt-24 px-4 md:px-8 flex items-center
             bg-gradient-to-b from-indigo-50 to-white">
       <FadeInSection>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10 items-center md:items-start">
        
        {/* LEFT COLUMN */}
        <div className="w-full md:w-1/2 text-center md:text-left space-y-4">
         <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
          Hi, I’m <span className="text-indigo-600">Anushka Singh</span>
        </h1>

        <h2 className="text-xl md:text-2xl text-gray-700 mt-2">
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
          <div className="mt-8">
            <h3 className="text-lg font-semibold md-3">
              Skills
            </h3>
           <div className="flex flex-wrap gap-3">
              {["HTML", "CSS", "JavaScript", "React", "Tailwind CSS", "Git"].map(
              (skill) => (
              <span
              key={skill}
              className="px-3 py-1 text-sm bg-indigo-100 text-indigo-700 rounded-full">
              {skill}
              </span>
              )
            )}
           </div> 
          </div>
          <div className="mt-8">
               <h3 className="text-lg font-semibold mb-2">
                 Education
                </h3>

              <p className="text-gray-600">
                B.Tech in Computer Science Engineering  
                <br />
                SRM University, Chennai  
                  <br />
                 <span className="text-sm text-gray-500">
                 2024 – Present
                 </span>
                 </p>
            </div>

        </div>

        {/* RIGHT COLUMN */}
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="w-64 h-64 md:w-72 md:h-72 rounded-full overflow-hidden shadow-lg ring-4 ring-indigo-200">
  <img
    src={PHOTO}
    alt="Anushka"
    className="w-full h-full object-cover"
  />
</div>

        </div>

      </div>
      </FadeInSection>
    </section>
  );
}

export default Hero;
