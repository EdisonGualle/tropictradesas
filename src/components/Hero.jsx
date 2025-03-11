const Hero = () => {
  return (
    <section
      id="inicio"
      className="relative h-screen w-full overflow-hidden flex items-center text-center md:text-left"
    >
      {/* Video de fondo */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="src/assets/videos/hero_fondo.mp4"
        autoPlay
        loop
        muted
        playsInline
      ></video>

      {/* Contenido sobre el video */}
      <div className="relative z-10 flex flex-col items-center md:items-start w-full px-6 sm:px-12 md:pl-48 text-white">
        <div className="max-w-2xl">
          <h1
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold leading-tight transition-all duration-500 hover:scale-110 hover:text-yellow-400 hover:drop-shadow-2xl uppercase tracking-wide"
            style={{
              fontFamily: "Notion, sans-serif",
              textShadow: "2px 2px 10px rgba(0, 0, 0, 0.8)",
            }}
          >
            EXPORTADORA DE BANANO
          </h1>
          <button className="bg-amber-300 py-3 px-6 mt-8 rounded-full text-lg sm:text-2xl font-medium hover:bg-yellow-600 transition duration-300 text-black">
            Contáctanos
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
