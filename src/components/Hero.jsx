function Hero(){
    return(
        <section className="py-16 px-6">
            <div className="max-auto max-w-4xl space-y-4 text-center md:text-left">
                <h1 className="text-4xl md:text-5xl text-bold">Anushka Singh</h1>
                <h2 className="text-xl md:text-2xl text-grey-600 mt-2">Aspiring Software Developer</h2>
                <p className="text-base text-grey-500 leading-relaxed">I am an aspiring Software Developer with a strong interest in building real-world web applications. I enjoy turning ideas into functional and user-friendly solutions using modern technologies. Currently, I am focused on improving my problem-solving skills, learning best development practices, and building projects that strengthen my foundation in software engineering.</p>
                <button className="bg-black text-white px-6 py-3 rounded-lg mt-6 hover:bg-grey-600">Contact Me</button>
            </div>
            Hero Section
        </section>
    );
}

export default Hero;