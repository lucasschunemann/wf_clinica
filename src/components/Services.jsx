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
        <p className="text-red-900">
          Exploramos soluções inovadoras para cuidar da sua saúde bucal, valorizando cada sorriso com tecnologia de ponta e atendimento personalizado.
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
          <ListItem title="Limpeza Dental Profunda">
            Utilizamos técnicas modernas para uma limpeza profunda, garantindo a saúde e o brilho do seu sorriso.
          </ListItem>
          <ListItem title="Ortodontia Avançada">
            Oferecemos soluções ortodônticas personalizadas, incluindo aparelhos invisíveis e tratamentos acelerados.
          </ListItem>
          <ListItem title="Restaurações Estéticas">
            Restauramos dentes danificados com materiais da mais alta qualidade, mantendo a naturalidade do seu sorriso.
          </ListItem>
          <ListItem title="Clareamento Dental">
            Procedimentos de clareamento dental que proporcionam resultados duradouros, para um sorriso mais branco e brilhante.
          </ListItem>
          </List>
        </div>
      </Container>
    </>
  );
};

export default Services;
