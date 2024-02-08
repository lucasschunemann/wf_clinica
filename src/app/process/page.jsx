import Build from "@/components/Build";
import ContactSection from "@/components/ContactSection";
import Deliver from "@/components/Deliver";
import Discover from "@/components/Discover";
import PageIntro from "@/components/PageIntro";
import Values from "@/components/Values";
import React from "react";

const ProcessPage = () => {
  return (
    <>
      <PageIntro eyebrow="Nosso Processo Odontológico" title="Como Trabalhamos para o Seu Sorriso">
        <p>
          Na nossa clínica odontológica, temos um processo meticuloso para garantir o melhor cuidado para o seu sorriso. Desde a descoberta das suas necessidades até a entrega dos tratamentos, estamos comprometidos em fornecer uma experiência positiva e resultados excepcionais.
        </p>
      </PageIntro>
      <div className="mt-24 space-y-24 sm:mt-32 sm:space-y-32 lg:mt-40 lg:space-y-40">
        {/* Descoberta */}
        <Discover />
        {/* Construção */}
        <Build />
        {/* Entrega */}
        <Deliver />
      </div>
      {/* Nossos Valores */}
      <Values />
      {/* Entre em Contato */}
      <ContactSection />
    </>
  );
};

export default ProcessPage;
