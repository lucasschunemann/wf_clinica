import PageIntro from "@/components/PageIntro";
import React from "react";

const WorkPage = () => {
  return (
    <>
      <PageIntro
        eyebrow="Nossos Serviços Odontológicos"
        title="Soluções Comprovadas para um Sorriso Saudável"
        eyebrowClassName="text-red-900"
        titleClassName="text-red-900"
      >
        <p className="text-red-900">
          Na nossa clínica odontológica, oferecemos tratamentos completos e
          personalizados para garantir um sorriso saudável e bonito. Desde
          cuidados preventivos até procedimentos avançados, estamos aqui para
          cuidar da sua saúde bucal com as melhores soluções comprovadas.
        </p>
      </PageIntro>
    </>
  );
};

export default WorkPage;
