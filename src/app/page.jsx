import Clients from "@/components/Clients";
import ContactSection from "@/components/ContactSection";
import Container from "@/components/Container";
import FadeIn from "@/components/FadeIn";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import thiara from "@/images/unnamed.png";

export default function Home() {
  return (
    <main className="text-black">
      <Container className="mt-24 sm:mt-32">
        <FadeIn className="max-w-3xl">
          <h1 className="font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-7xl">
          Arte e Carinho em Cada Sorriso Transformado!
          </h1>
          <p className="mt-6 text-xl text-neutral-600">
          Somos um time dedicado à odontologia, navegando entre a estética e a inovação. Nossa jornada é movimentada, com muitos de nós transformando obstáculos em motivos para sorrir.
          </p>
        </FadeIn>
      </Container>
      <Clients />
      <Testimonials
        className="mt-24 sm:mt-32 lg:mt-40"
        client={{ name: "Thiara Kuchler", logo: thiara }}
      >
        A clínica conta com uma tecnologia que eu nunca tinha visto antes, o que torna tudo mais fácil, eficiente e com resultados maravilhosos. E por trás de toda tecnologia tem muito estudo e dedicação de ambas as partes.
      </Testimonials>
      <Services />
      <ContactSection />
    </main>
  );
}
