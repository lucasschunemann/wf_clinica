import React from "react";
import Container from "./Container";
import FadeIn from "./FadeIn";
import Button from "./Button";
import Offices from "./Offices";

const ContactSection = () => {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <FadeIn className="-mx-6 rounded-4xl bg-neutral-900 px-6 py-20 sm:mx-0 sm:py-32 md:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-3xl font-medium text-white sm:text-4xl">
            Fale Conosco
          </h2>
          <p className="mt-4 text-white sm:text-lg">
            Tem alguma dúvida ou precisa agendar uma consulta? Estamos aqui para
            ajudar!
          </p>
          <div className="mt-8">
            <Button
              href="/contact"
              className="bg-red-600 text-white hover:bg-red-900 focus:ring-4 focus:ring-red-300 py-3 px-8 rounded-lg font-medium transition duration-150 ease-in-out"
            >
              Entre em Contato
            </Button>
          </div>
          <div className="mt-16 border-t border-white/10 pt-10">
            <h3 className="font-display text-xl font-semibold text-white">
              Onde Estamos?
            </h3>
            <p className="mt-4 text-white sm:text-lg">
              Visite nossas instalações para um atendimento personalizado.
            </p>
            <Offices className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 text-white" />
          </div>
        </div>
      </FadeIn>
    </Container>
  );
};

export default ContactSection;
