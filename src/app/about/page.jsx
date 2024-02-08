import React from "react";
import ContactSection from "@/components/ContactSection";
import Container from "@/components/Container";
import Cultures from "@/components/Cultures";
import PageIntro from "@/components/PageIntro";
import { StatList, StatListItem } from "@/components/StatList";
import teamPhoto from "@/images/guinhofe.jpeg";
import Image from "next/image";

const AboutPage = () => {
  return (
    <>
      <PageIntro eyebrow="Sobre nós" title="Nossa força é a colaboração">
        <p>
          Acreditamos que nossa força reside em nossa abordagem colaborativa,
          colocando nossos pacientes no centro de tudo que fazemos.
        </p>
        <div className="mt-10 max-w-2xl space-y-6 text-base">
          <p>
            Nossa clínica foi iniciada por dois dentistas apaixonados por
            transformar sorrisos e melhorar a saúde bucal. Desde o início,
            estamos comprometidos em oferecer tratamentos de qualidade superior
            e um atendimento personalizado.
          </p>
          <p>
            Na nossa clínica, somos mais do que apenas colegas — somos uma
            equipe dedicada a oferecer o melhor para nossos pacientes. Isso
            significa horas dedicadas a estudos contínuos e a prática de
            técnicas avançadas em odontologia.
          </p>
        </div>
      </PageIntro>
      <Container className="my-16">
        <StatList>
          <StatListItem value="10+" label="Anos de experiência" />
          <StatListItem value="1000+" label="Pacientes satisfeitos" />
          <StatListItem value="5" label="Especialidades odontológicas" />
        </StatList>
      </Container>
      <TeamPhotoSection />
      <Cultures />
      <ContactSection />
    </>
  );
};

const TeamPhotoSection = () => {
  return (
    <Container className="my-16">
      <div className="text-center">
        <h2 className="text-2xl font-semibold text-black">
          Conheça Nossa Equipe
        </h2>
        <p className="mt-4 text-black">
          Dentistas dedicados a cuidar do seu sorriso.
        </p>
      </div>
      <div className="flex justify-center mt-8">
        <div className="px-4">
          <Image
            src={teamPhoto}
            alt="Nossa Equipe"
            width={600}
            height={600}
            className="rounded-lg shadow-md"
          />
          <p className="mt-2 font-semibold text-black">
            Dra. Fernanda & Dr. Wagner
          </p>
          <p className="text-sm text-black">Especialistas em Ortodontia</p>
        </div>
      </div>
    </Container>
  );
};

export default AboutPage;
