import React from "react";
import Nosotros1 from "../assets/trabajando1.jpg";

const AboutUs = () => {
    return (
        <section className="bg-[#1C2751] text-white py-16 px-6 md:px-20">
            <div className="grid md:grid-cols-2 items-center gap-10">
                {/* Columna de texto */}
                <div>
                    <p className="text-[#82A1D1] uppercase font-bold tracking-wider mb-2">
                        Asesoramiento Financiero
                    </p>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Invertir con EstrategiasLB
                    </h2>
                    <p className="text-lg md:text-xl text-[#c9daff]">
                        En EstrategiasLB nos enfocamos en brindar asesoramiento financiero de calidad,
                        con transparencia, innovación y compromiso. Analizamos cada oportunidad con rigor
                        y creamos estrategias adaptadas al perfil de cada cliente, acompañándolos en cada
                        decisión para alcanzar sus objetivos de manera segura y sostenible.
                    </p>
                    <button className="mt-6 py-2 px-6 bg-[#00A3FF] text-white rounded-full hover:bg-[#82A1D1] hover:text-[#1C2751] transition">
                        Contáctanos
                    </button>
                </div>

                {/* Columna de imagen */}
                <div className="flex justify-center">
                    <div className="relative w-full max-w-sm">
                        <img
                            src={Nosotros1}
                            alt="Asesor financiero"
                            className="rounded-lg shadow-lg w-full"
                        />
                        <div className="absolute bottom-0 left-0 bg-[#1C2751]/80 p-4 text-white w-full">
                            <p className="text-lg font-bold">EstrategiasLB</p>
                            <p className="text-sm">Tu socio financiero de confianza</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutUs;

