"use client";

import Nav from "@/components/Nav";
import Projeto from "@/components/Projetos";

function Projetos() {
    return (
        <div>
            <header>
                <Nav />
            </header>
            <section id="projetos" className="flex justify-center items-center min-h-screen bg-gradient-to-b pt-11 from-gray-800 to-gray-900 relative">
                <div className="container mx-auto flex px-10 py-10 md:flex-row flex-col items-center">
                    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:text-left mb-16 md:mb-0 items-center text-center">
                        <h1 className="text-4xl font-bold text-center mb-8">
                            Projetos
                        </h1>
                        <Projeto />
                    </div>
                </div>
            </section>
        </div>

    );
};

export default Projetos;