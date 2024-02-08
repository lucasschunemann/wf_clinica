import React from "react";
import Section from "./Section";
import imageLaptop from "@/images/tela2.jpeg";
import Blockquote from "./Blockquote";

const Build = () => {
  return (
    <Section
      title="Contruindo seu Plano de Tratamento"
      image={{ src: imageLaptop, shape: 2 }}
    >
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          Com base na fase de inicialização, desenvolvemos um roteiro abrangente
          para o plano de tratamento de cada paciente, iniciando o trabalho em
          direção à realização. Este roteiro é cuidadosamente elaborado para
          combinar as mais avançadas tecnologias odontológicas com as
          necessidades específicas do paciente.
        </p>
        <p>
          Cada paciente é atribuído a um gerente de conta chave para manter as
          linhas de comunicação abertas e transparentes, garantindo que todos
          estejam informados sobre o progresso do tratamento. Eles atuam como um
          elo de ligação entre o paciente e a equipe de desenvolvimento do plano
          de tratamento, que trabalha diligentemente para personalizar soluções
          de cuidados bucais.
        </p>
        <p>
          Nossos gerentes de conta estão treinados para responder aos emails dos
          pacientes de maneira oportuna, mantendo-os atualizados com os avanços
          e etapas do tratamento. Isso reforça nosso compromisso com a
          comunicação clara e ajuda a estabelecer expectativas realistas para o
          paciente.
        </p>
      </div>
      <Blockquote
        author={{ name: "Dra. Fernanda", role: "CEO da WF Odontologia" }}
        className="mt-12"
      >
        Nossa clínica se destaca por manter atualizações de progresso tão
        regulares que os pacientes se sentem plenamente acompanhados em cada
        etapa do tratamento!
      </Blockquote>
    </Section>
  );
};

export default Build;
