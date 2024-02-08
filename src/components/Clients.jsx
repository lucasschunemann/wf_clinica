import Image from "next/image";
import Container from "./Container";
import FadeIn, { FadeInStagger } from "./FadeIn";

// Exemplos de tecnologias com descrições. Ajuste os caminhos das imagens conforme necessário.
const technologies = [
  {
    name: "Radiografia Digital",
    logo: "/images/technologies/digital-xray-logo.svg",
    description: "Imagens detalhadas com menos exposição à radiação.",
  },
  {
    name: "Escaneamento Intraoral 3D",
    logo: "/images/technologies/intraoral-scanner-logo.svg",
    description: "Impressões precisas para um diagnóstico rápido e confortável.",
  },
  {
    name: "Laser Dentário",
    logo: "/images/technologies/dental-laser-logo.svg",
    description: "Tratamento de gengiva e cárie sem dor.",
  },
  {
    name: "CEREC",
    logo: "/images/technologies/cerec-logo.svg",
    description: "Restaurações dentárias em uma única visita.",
  },
];

const Technologies = () => {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-20 sm:mt-32 sm:py-32 lg:mt-56">
      <Container>
        <FadeIn className="flex flex-col items-center text-center gap-4">
          <h2 className="font-display text-lg font-semibold tracking-wider text-white">
            Tecnologias Avançadas para um Sorriso Perfeito
          </h2>
          <div className="h-px w-full bg-neutral-800" />
        </FadeIn>
        <FadeInStagger faster>
          <ul
            role="list"
            className="mt-10 grid grid-cols-2 gap-8 lg:grid-cols-4"
          >
            {technologies.map(({ name, logo, description }) => (
              <li key={name} className="flex flex-col items-center text-white">
                <FadeIn>
                  <Image src={logo} alt={name} width={100} height={100} objectFit="contain" className="mb-4" />
                  <h3 className="text-lg font-semibold">{name}</h3>
                  <p className="text-sm text-neutral-500 mt-2">{description}</p>
                </FadeIn>
              </li>
            ))}
          </ul>
        </FadeInStagger>
      </Container>
    </div>
  );
};

export default Technologies;
