"use client";

import { useState } from "react";
import Image from "next/image";
import "tailwindcss/tailwind.css";

function Sobre() {
  const tecnologias = [
    { src: "/images/php-logo.png", alt: "PHP" },
    { src: "/images/laravel-logo.png", alt: "Laravel" },
    { src: "/images/docker-logo.png", alt: "Docker" },
    { src: "/images/java-logo.png", alt: "Java" },
    { src: "/images/javascript-logo.png", alt: "JavaScript" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % tecnologias.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? tecnologias.length - 1 : prevIndex - 1
    );
  };

  return (
    <section
      id="Sobre"
      className="flex justify-center h-screen bg-gradient-to-b from-gray-800 to-gray-900 text-white"
    >
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="text-center font-serif sm:text-5xl text-4xl mb-6 font-bold text-gray-100">
            Sobre
          </h1>
          <p className="text-lg leading-relaxed">
            Estudante do 3º Ano do curso de Análise e Desenvolvimento de
            Sistemas no Instituto Federal do Paraná. Apaixonado por tecnologia e
            desenvolvimento de software, sempre buscando aprender novas
            habilidades e melhorar as existentes. Tenho experiência em
            desenvolvimento web com front-end utilizando tecnologias
            como React, Next.js, HTML, CSS, Javascript, Bootstrap e Tailwind CSS. Além disso, possuo
            conhecimentos em back-end com PHP e Laravel, e estou constantemente
            explorando novas ferramentas e frameworks para expandir meu conjunto
            de habilidades.
          </p>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <h2 className="text-center font-serif sm:text-4xl text-3xl mb-9 font-semibold">
            Principais Tecnologias
          </h2>
          <br />
          <div className="relative flex items-center mx-auto top-10">
            {/* Botão de Navegação Esquerdo */}
            <button
              onClick={prevSlide}
              className="absolute left-2 bg-gray-700 hover:bg-gray-600 p-3 rounded-full shadow-lg text-white z-10 focus:outline-none transition-all"
            >
              &#8592;
            </button>
            {/* Carrossel */}
           <div className="carousel-inner flex justify-center items-center w-full relative">
                {tecnologias.map((tecnologia, index) => (
                  <div
                    key={index}
                    className={`absolute transition-transform duration-700 ease-in-out ${
                      index === currentIndex
                        ? "opacity-100 scale-100"
                        : "opacity-0 scale-75"
                    }`}
                  >
                    <Image
                      src={tecnologia.src}
                      alt={tecnologia.alt}
                      width={112}
                      height={112}
                      className="w-25 h-15  mx-auto"
                    />
                  </div>
                ))}
            </div>
            {/* Botão de Navegação Direito */}
            <button
              onClick={nextSlide}
              className="absolute right-2 bg-gray-700 hover:bg-gray-600 p-3 rounded-full shadow-lg text-white z-10 focus:outline-none transition-all"
            >
              &#8594;
            </button>
          </div>
          <br /><br /><br /><br />
          {/* Indicadores */}
            <div className="flex justify-center mt-6">
              {tecnologias.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 mx-2 rounded-full transition-all ${
                    index === currentIndex
                      ? "bg-white scale-125"
                      : "bg-gray-500"
                  }`}
                ></button>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Sobre;
