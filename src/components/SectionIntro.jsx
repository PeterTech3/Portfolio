import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export const IntroSection = ({ section, index }) => {
  useEffect(() => {
    AOS.init({
      duration: 800,
    });
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div
      className='grid grid-cols-1 md:grid-cols-5 md:grid-rows-3 sm:grid-cols-1 sm:grid-rows-2 items-center gap-4 section'
      data-aos="fade-up"
      data-aos-delay={section.delay}
    >
      {index % 2 === 0 ? (
        // Caso para index par (imagen primero, luego texto)
        <>
          <aside className="md:col-start-1 md:col-end-3 md:row-start-2 md:row-end-3 sm:row-start-1 sm:row-end-2 order-1 sm:order-2">
            {section.img.length > 1 ? (
              <Slider {...settings}>
                {section.img.map((src, indx) => (
                  <div key={indx}>
                    <img
                      src={src}
                      style={section.styles[indx]}
                      className="h-auto img"
                    />
                  </div>
                ))}
              </Slider>
            ) : (
              <img
                src={section.img[0]}
                style={section.styles[0]}
                alt="profile"
                className=" h-auto img"
              />
            )}
          </aside>
          <div className="text md:col-span-3 md:row-span-3 order-2 md:order-1 sm:row-start-2 sm:row-end-2">
            {section.text}
          </div>
        </>
      ) : (
        // Caso para index impar (texto primero, luego imagen)
        <>
          <div className="text md:col-span-3 md:row-span-3 order-2 md:order-1 sm:row-start-2 sm:row-end-2">
            {section.text}
          </div>
          <aside className="md:col-start-1 md:col-end-3 md:row-start-2 md:row-end-3 sm:row-start-1 sm:row-end-2 sm:row-span-1 sm:col-span-1 order-1 sm:order-2">
            {section.img.length > 1 ? (
              <Slider {...settings}>
                {section.img.map((src, indx) => (
                  <div key={indx}>
                    <img
                      src={src}
                      style={section.styles[indx]}
                      className="h-auto img"
                    />
                  </div>
                ))}
              </Slider>
            ) : (
              <img
                src={section.img[0]}
                style={section.styles[0]}
                alt="profile"
                className=" h-auto img"
              />
            )}
          </aside>
        </>
      )}
    </div>
  );
};
