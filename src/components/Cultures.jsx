import React from "react";
import SectionIntro from "./SectionIntro";
import Container from "./Container";
import { GridList, GridListItem } from "./GridList";

const Cultures = () => {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-24 sm:mt-32 lg:mt-40 lg:py-32">
      <SectionIntro
        eyebrow="Nossa Cultura"
        title="Equilibre sua paixão pela odontologia com a paixão pela vida."
        invert // Assume que esta prop inverte as cores para melhor contraste
      >
        <p>
          Somos um grupo de pessoas com ideias semelhantes que compartilham os
          mesmos valores fundamentais, promovendo um ambiente que valoriza o
          equilíbrio entre a vida profissional e pessoal.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <GridList>
          <GridListItem title="Lealdade" invert>
            Nossa equipe está conosco desde o início, criando um forte senso de
            comunidade e pertencimento, fundamentado no respeito mútuo e no
            apoio contínuo.
          </GridListItem>
          <GridListItem title="Confiança" invert>
            Valorizamos a autonomia e a flexibilidade, confiando em nossa equipe
            para encontrar o melhor equilíbrio entre trabalho e vida pessoal,
            garantindo assim a excelência no atendimento aos nossos pacientes.
          </GridListItem>
          <GridListItem title="Compaixão" invert>
            Entendemos que a empatia e o cuidado são essenciais, tanto dentro de
            nossa equipe quanto no tratamento de nossos pacientes, assegurando
            um ambiente acolhedor e de suporte para todos.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  );
};

export default Cultures;
