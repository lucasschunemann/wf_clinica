import React from "react";
import Section from "./Section";
import imageWhiteboard from "@/images/tela1.jpeg";
import { TagList, TagListItem } from "./TagList";

const Discover = () => {
  return (
    <Section title="Inicialização" image={{ src: imageWhiteboard, shape: 1 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          Na nossa clínica odontológica, nos dedicamos a entender as{" "}
          <strong className="font-semibold text-neutral-950">
            necessidades
          </strong>{" "}
          e objetivos de nossos pacientes, oferecendo um atendimento
          personalizado e completo para garantir o melhor tratamento possível.
        </p>
        <p>
          Nossa equipe de especialistas utiliza tecnologia de ponta para
          realizar um diagnóstico preciso, incluindo exames de imagem avançados,
          para entender a saúde bucal do paciente em detalhes e planejar o
          tratamento mais eficaz.
        </p>
        <p>
          Após a avaliação completa, apresentamos um{" "}
          <strong className="font-semibold text-neutral-950">
            plano de tratamento
          </strong>{" "}
          detalhado, discutindo todas as opções disponíveis, incluindo custos e
          expectativas de resultados, para que o paciente possa tomar uma
          decisão informada sobre sua saúde bucal.
        </p>
      </div>
      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Incluído nesta fase
      </h3>
      <TagList className="mt-4">
        <TagListItem>Consultas iniciais detalhadas</TagListItem>
        <TagListItem>Estudos de viabilidade do tratamento</TagListItem>
        <TagListItem>Exames de imagem digital</TagListItem>
        <TagListItem>Análises de saúde bucal</TagListItem>
        <TagListItem>Modelos de tratamento em 3D</TagListItem>
        <TagListItem>Plano de tratamento personalizado</TagListItem>
      </TagList>
    </Section>
  );
};

export default Discover;
