"use client";
import "tailwindcss/tailwind.css";

function Projeto() {
    const projetos = [
        { id: 1, img: 'images/java-logo.png', title: 'LP3', description: 'Repositório voltado para Projetos em Java (Puro e Hibernate)', link:'https://github.com/Drmsugano/LP3'},
        { id: 2, img: 'images/php-logo.png', title: 'Techweb-3', description: 'Repositório voltado para Projetos em PHP (Puro e Doctrine)', link:'https://github.com/Drmsugano/Techweb-3'},
        { id: 3, img: 'images/php-logo.png', title: 'Techweb-3', description: 'Repositório voltado para Projetos em PHP (Puro e Doctrine)', link:'https://github.com/Drmsugano/Techweb-3'},
        { id: 4, img: 'images/php-logo.png', title: 'Techweb-3', description: 'Repositório voltado para Projetos em PHP (Puro e Doctrine)', link:'https://github.com/Drmsugano/Techweb-3'}
        
    ];

    return (
        <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {projetos.map(projeto => (
                    <div key={projeto.id} className="group relative cursor-pointer overflow-hidden w-full bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10">
                        <span className="absolute top-10 z-0 h-20 w-20 rounded-full bg-red-500 transition-all duration-300 group-hover:scale-[10]"></span>
                        <div className="relative z-10 mx-auto max-w-md">
                            <span className="grid h-20 w-20 place-items-center rounded-full bg-black transition-all duration-300 group-hover:bg-slate-200">
                                <img src={projeto.img} alt={projeto.title} className="h-18 w-14 text-white transition-all" />
                            </span>
                            <div className="space-y-6 pt-5 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90">
                                <h2 className="text-2xl font-semibold mb-2 text-black transition-all duration-300 group-hover:text-white/90">{projeto.title}</h2>
                                <p>{projeto.description}</p>
                            </div>
                            <div className="pt-5 text-base font-semibold leading-7">
                                <p>
                                    <a href={projeto.link} className="text-sky-500 transition-all duration-300 group-hover:text-white">Ir para o Repositório</a>
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default Projeto;