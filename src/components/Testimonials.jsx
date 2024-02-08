import React from "react";
import GridPattern from "./GridPattern";
import clsx from "clsx";
import Container from "./Container";
import FadeIn from "./FadeIn";
import Image from "next/image";

const Testimonials = ({ children, client, className }) => {
  return (
    <div className={clsx("relative isolate bg-neutral-50 py-16 sm:py-28 md:py-32", className)}>
      <GridPattern className="absolute inset-0 -z-10 h-full w-full fill-neutral-100 stroke-neutral-950/5 [mask-image:linear-gradient(to_bottom,white_50%,transparent_60%)]" yOffset={-256} />
      <Container>
        <FadeIn>
          <figure className="mx-auto max-w-4xl text-center">
            <blockquote className="relative font-display text-3xl font-medium tracking-tight text-neutral-950 sm:text-4xl">
              {/* Melhoria: Removido uso de pseudo-elementos para citações, favorecendo acessibilidade */}
              <p>“{children}”</p>
            </blockquote>
            <figcaption className="mt-10 flex justify-center items-center">
              {/* Adicionando dimensões explícitas para otimização */}
              <Image src={client.logo} alt={`Logo de ${client.name}`} width={40} height={40} objectFit="contain" />
              <span className="text-neutral-600 font-medium ml-4">{client.name}</span>
            </figcaption>
          </figure>
        </FadeIn>
      </Container>
    </div>
  );
};

export default Testimonials;
