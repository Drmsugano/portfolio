function Inicio() {
    return (
        <section
            id="Inicio"
            className="flex justify-center items-center min-h-screen bg-gradient-to-b from-gray-800 to-gray-900"
        >
            <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
                {/* Texto de introdução */}
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font font-serif sm:text-6xl text-4xl mb-6 font-bold text-white animate-fadeIn">
                        Bem-vindo, ao meu{" "}
                        <span className="text-red-400">
                            Portfólio
                        </span>
                        .
                        <br className="hidden lg:inline-block" />
                        Desenvolvedor{" "}
                        <span className="text-blue-400">Fullstack</span>.
                    </h1>
                    <p className="mb-8 leading-relaxed text-gray-300 text-lg">
                        Sou <span className="text-purple-400">Analista de Sistemas</span> e desenvolvedor Fullstack, dedicado a criar experiências digitais eficientes e de alta qualidade. Tenho especialização em desenvolvimento de sistemas web, com foco em soluções inovadoras e eficazes.
                    </p>
                    <div className="flex justify-center">
                        <a
                            href="#contato"
                            className="inline-flex items-center justify-center font-serif text-white bg-green-500 border-0 py-3 px-8 focus:outline-none hover:bg-green-600 rounded-full shadow-lg text-lg transition-all duration-300 ease-in-out"
                        >
                            Contato
                        </a>
                        <a
                            href="#projetos"
                            className="ml-4 inline-flex items-center justify-center font-serif text-gray-400 bg-gray-800 border-0 py-3 px-8 focus:outline-none hover:bg-gray-700 hover:text-white rounded-full shadow-lg text-lg transition-all duration-300 ease-in-out"
                        >
                            Projetos
                        </a>
                    </div>
                </div>
                {/* Imagem */}
                <div className="lg:max-w-lg lg:w-3/12 md:w-1/2 w-5/6">
                    <div className="relative">
                        <img
                            className="bg-slate-200 object-cover object-center rounded-full shadow-2xl transition-transform transform hover:scale-105 duration-300 ease-in-out"
                            alt="hero"
                            src="images/douglas.jpeg"
                        />
                        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-green-400 to-blue-500 opacity-20 blur-lg"></div>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default Inicio;
