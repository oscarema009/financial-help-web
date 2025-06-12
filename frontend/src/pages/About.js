import React from "react"; 
import Cuadro from "../componentes/cuadro";

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
                        Invertir con Estrategias LB
                    </h2>
                    <p className="text-lg md:text-xl text-[#c9daff]">
                        En EstrategiasLB nos enfocamos en brindar asesoramiento financiero de calidad,
                        con transparencia, innovación y compromiso. Analizamos cada oportunidad con rigor
                        y creamos estrategias adaptadas al perfil de cada cliente, acompañándolos en cada
                        decisión para alcanzar sus objetivos de manera segura y sostenible.
                    </p>
                </div>

                {/* Columna de card Cuadro */}
                <div className="flex justify-center">
                    <Cuadro />
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
