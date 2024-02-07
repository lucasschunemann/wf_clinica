import React from "react";
import SectionIntro from "./SectionIntro";
import Container from "./Container";
import FadeIn from "./FadeIn";
import StylizedImage from "./StylizedImage";
import imageEles from "../images/heroimagem.jpeg";
import List, { ListItem } from "./List";

const Services = () => {
  return (
    <>
      <SectionIntro
        eyebrow="Serviços"
        title="Descubra e aproveite novas oportunidades para seu sorriso."
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          Temos infinitas soluções para renovar e investir no seu sorriso, podemos criar inúmeras possibilidades.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <div className="lg:flex lg:items-center lg:justify-end">
          <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
            <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
              <StylizedImage
                src={imageEles}
                sizes="(min-width: 1024px) 41rem, 31rem"
                className="justify-center lg:justify-end"
              />
            </FadeIn>
          </div>
          <List className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-[33rem] lg:pl-4">
            <ListItem title="Limpeza dental">
            Nós nos especializamos em realizar limpezas dentais de alta qualidade. Para os demais tratamentos, focamos em manter a excelência, mesmo que sejam procedimentos simples.
            </ListItem>
            <ListItem title="Nome de algum serviço">
            Nós nos especializamos em realizar limpezas dentais de alta qualidade. Para os demais tratamentos, focamos em manter a excelência, mesmo que sejam procedimentos simples.
            </ListItem>
            <ListItem title="Nome de algum serviço">
            Nós nos especializamos em realizar limpezas dentais de alta qualidade. Para os demais tratamentos, focamos em manter a excelência, mesmo que sejam procedimentos simples.
            </ListItem>
            <ListItem title="Nome de algum serviço">
            Nós nos especializamos em realizar limpezas dentais de alta qualidade. Para os demais tratamentos, focamos em manter a excelência, mesmo que sejam procedimentos simples.
            </ListItem>
          </List>
        </div>
      </Container>
    </>
  );
};

export default Services;
