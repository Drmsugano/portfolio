/* eslint-disable @next/next/no-html-link-for-pages */
"use client"
import { useState } from "react";

function Nav() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="text-white shadow-sm w-svw z-40 fixed">
            <div className="backdrop-blur-sm">
                <div className="py-3">
                    <div className="container mx-auto px-3">
                        <div className="flex justify-between items-center p-2">
                            {/* Logo */}
                            <h1 className="text-2xl font-serif tracking-wider font-semibold transition-all duration-300 hover:text-red-500">
                                Douglas Sugano
                            </h1>

                            {/* Botão do menu hambúrguer */}
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className="md:hidden text-white hover:text-red-500 focus:outline-none"
                            >
                                <svg
                                    className="w-6 h-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    {isOpen ? (
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    ) : (
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M4 6h16M4 12h16m-7 6h7"
                                        />
                                    )}
                                </svg>
                            </button>

                            {/* Menu */}
                            <div
                                className={`${
                                    isOpen ? "block" : "hidden"
                                } md:flex items-center space-x-4 outline outline-offset-2 outline-red-500 py-2 px-4 rounded-2xl drop-shadow-2xl`}
                            >
                                <a
                                    href="/"
                                    className="block md:inline-block font-semibold tracking-wider text-white transition-all duration-300 hover:text-red-500 ease-in-out"
                                >
                                    Inicio
                                </a>
                                <a
                                    href="/Sobre"
                                    className="block md:inline-block font-semibold tracking-wider text-white transition-all duration-300 hover:text-red-500 ease-in-out"
                                >
                                    Sobre
                                </a>
                                <a
                                    href="/Projetos"
                                    className="block md:inline-block font-semibold tracking-wider text-white transition-all duration-300 hover:text-red-500 ease-in-out"
                                >
                                    Projetos
                                </a>
                                <a
                                    href="#Contato"
                                    className="block md:inline-block font-semibold tracking-wider text-white transition-all duration-300 hover:text-red-500 ease-in-out"
                                >
                                    Contato
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Nav;
