import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const IntroSection = ({ section, index }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <section
      className={`flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} items-center gap-10`}
      data-aos="fade-up"
    >
      {/* BLOQUE DE IMÁGENES / SLIDER / TECH GRID */}
      <div className="w-full md:w-2/5 flex justify-center">
        {section.isTech ? (
          /* Renderizado especial para los 14 logos */
          <div className="grid grid-cols-4 gap-4 p-6 bg-green-500/5 rounded-3xl border border-green-500/20 backdrop-blur-md">
            {section.img.map((logo, i) => (
              <img
                key={i}
                src={logo}
                className="w-10 h-10 object-contain hover:scale-110 transition-transform"
                alt="tech"
              />
            ))}
          </div>
        ) : (
          /* Renderizado para fotos normales con Slider si hay más de una */
          <div className="w-full max-w-sm">
            {section.img.length > 1 ? (
              <Slider {...settings}>
                {section.img.map((src, i) => (
                  <div key={i} className="outline-none">
                    <img
                      src={src}
                      className="rounded-3xl border-2 border-green-500/30 shadow-lg mx-auto h-64 w-64 object-cover"
                    />
                  </div>
                ))}
              </Slider>
            ) : (
              <img
                src={section.img[0]}
                className="rounded-3xl border-2 border-green-500/30 shadow-lg w-64 h-64 object-cover"
              />
            )}
          </div>
        )}
      </div>

      {/* BLOQUE DE TEXTO */}
      <div className="w-full md:w-3/5">
        <h2 className="font-special text-3xl font-bold text-green-400 mb-6 drop-shadow-[0_0_8px_rgba(74,222,128,0.3)]">
          {section.title}
        </h2>
        <div className="border border-green-500/40 prose-text text-gray-200 text-lg md:text-xl text-justify backdrop-blur-md bg-black/40 p-8 rounded-3xl shadow-2xl">
          {section.text}
        </div>
      </div>
    </section>
  );
};
