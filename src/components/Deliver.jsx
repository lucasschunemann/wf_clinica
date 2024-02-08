import React from "react";
import Section from "./Section";
import imageMeeting from "@/images/tela3.jpeg";
import List, { ListItem } from "./List";

const Deliver = () => {
  return (
    <Section
      title="Entregando seu Sorriso"
      image={{ src: imageMeeting, shape: 1 }}
    >
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          Concluindo a fase de construção do plano de tratamento, nos dedicamos
          a finalizar cada procedimento com a mais alta qualidade e precisão,
          garantindo que as{" "}
          <strong className="font-semibold text-neutral-950">
            expectativas
          </strong>{" "}
          dos pacientes sejam não apenas atendidas, mas superadas.
        </p>
        <p>
          A maioria do{" "}
          <strong className="font-semibold text-neutral-950">progresso</strong>{" "}
          significativo é alcançada com uma atenção meticulosa aos detalhes,
          assegurando que cada aspecto do tratamento seja realizado com o máximo
          cuidado.
        </p>
        <p>
          Garantimos que todos os aspectos do tratamento estejam{" "}
          <strong className="font-semibold text-neutral-950">
            plenamente funcionais
          </strong>{" "}
          e satisfatórios no momento da entrega. Além disso, oferecemos um
          acompanhamento detalhado e orientações de cuidados pós-tratamento como
          parte do nosso compromisso contínuo com a saúde bucal do paciente.
        </p>
      </div>
      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Incluído nesta fase <br />
        <br />
      </h3>
      <List>
        <ListItem title="Orientações de Cuidados Pós-Tratamento">
          Fornecemos instruções detalhadas e personalizadas para cuidados
          pós-tratamento, assegurando uma recuperação rápida e eficaz.
        </ListItem>
        <ListItem title="Suporte Contínuo">
          Nossa equipe está sempre disponível para oferecer suporte contínuo,
          respondendo a quaisquer perguntas e assegurando a satisfação a longo
          prazo com os resultados do tratamento.
        </ListItem>
      </List>
    </Section>
  );
};

export default Deliver;
