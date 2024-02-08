import React from "react";
import GridPattern from "./GridPattern";
import SectionIntro from "./SectionIntro";
import Container from "./Container";
import { GridList, GridListItem } from "./GridList";

const Values = () => {
  return (
    <div className="relative mt-24 pt-24 sm:mt-32 sm:pt-32 lg:mt-40 lg:pt-40">
      <div className="absolute inset-x-0 top-0 -z-10 h-[884px] overflow-hidden rounded-t-4xl bg-gradient-to-b from-neutral-50">
        <GridPattern
          className="absolute inset-0 h-full w-full fill-neutral-100 stroke-neutral-950/5 [mask-image:linear-gradient(to_bottom_left,white_40%,transparent_50%)]"
          yOffset={-270}
        />
      </div>
      <SectionIntro
        eyebrow="Nossos Valores"
        title="Equilibrando confiabilidade e inovação"
      >
        <p>
          Nos empenhamos em estar na vanguarda das tendências e tecnologias
          emergentes, aplicando-as para melhorar a saúde bucal e a experiência
          de nossos pacientes. Mantemos nossos valores fundamentais para
          orientar essas decisões.
        </p>
      </SectionIntro>
      <Container className="mt-24">
        <GridList>
          <GridListItem title="Atenção aos Detalhes">
            Cada aspecto do atendimento ao paciente é meticulosamente planejado,
            desde a consulta inicial até o tratamento final, assegurando a mais
            alta qualidade.
          </GridListItem>
          <GridListItem title="Eficiência">
            Orgulhamo-nos de nossa capacidade de oferecer tratamentos eficazes e
            oportunos, maximizando os resultados sem comprometer a qualidade.
          </GridListItem>
          <GridListItem title="Adaptabilidade">
            Reconhecemos que cada paciente tem necessidades únicas,
            personalizando nossos tratamentos para atender a essas
            especificidades com precisão.
          </GridListItem>
          <GridListItem title="Honestidade">
            Somos transparentes em todos os nossos processos, comunicando
            abertamente os planos de tratamento, opções e expectativas.
          </GridListItem>
          <GridListItem title="Lealdade">
            Cultivamos relacionamentos de longo prazo com nossos pacientes,
            excedendo suas expectativas para garantir sua satisfação contínua.
          </GridListItem>
          <GridListItem title="Inovação">
            O cenário tecnológico na odontologia está sempre evoluindo, e
            estamos comprometidos em incorporar as últimas inovações para
            melhorar os cuidados com os pacientes.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  );
};

export default Values;
