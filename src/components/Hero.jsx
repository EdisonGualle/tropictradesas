const Hero = () => {
    return (
      <section id="inicio" className="relative h-screen w-full overflow-hidden">
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
        <div className="relative z-10 flex items-center h-full ps-32">
          <div className="max-w-xl text-white">
            <h1
              className="text-[80px] font-extrabold leading-[90px] transition-all duration-500 transform hover:scale-110 hover:text-yellow-400 hover:drop-shadow-2xl"
              style={{
                fontFamily: 'Notion, sans-serif', // Si tienes la fuente Notion
                textTransform: 'uppercase',
                letterSpacing: '2px',
                textShadow: '2px 2px 10px rgba(0, 0, 0, 0.8)', // Sombra para resaltar el texto
              }}
            >
              EXPORTADORA DE BANANO
            </h1>
            <button className="bg-amber-300 py-3 px-6 mt-10 rounded-full text-2xl font-medium hover:bg-yellow-600 transition-colors duration-300 text-black">
              Contáctanos
            </button>
          </div>
        </div>
      </section>
    );
  };
  
  export default Hero;
