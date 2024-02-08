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
      <Container className="px-4 sm:px-6 lg:px-8 mt-12 sm:mt-24 lg:mt-32">
        <FadeIn className="max-w-xl md:max-w-2xl lg:max-w-4xl mx-auto">
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tighter text-neutral-900 sm:leading-tight">
            A sua meta é cuidar do sorriso, a nossa meta é cumprir a sua.
          </h1>
          <p className="mt-6 text-base sm:text-lg md:text-xl text-neutral-700">
            Somos um time dedicado à odontologia, navegando entre a estética e a inovação. Nossa jornada é movimentada, com muitos de nós transformando obstáculos em motivos para sorrir.
          </p>
        </FadeIn>
      </Container>
      <section className="mt-16 sm:mt-24 lg:mt-32">
        <Clients />
      </section>
      <section className="mt-16 sm:mt-24 lg:mt-32">
        <Testimonials
          className="py-8 sm:py-12"
          client={{ name: "Thiara Kuchler", logo: thiara }}
        >
          A clínica conta com uma tecnologia que eu nunca tinha visto antes, o que torna tudo mais fácil, eficiente e com resultados maravilhosos. E por trás de toda tecnologia tem muito estudo e dedicação de ambas as partes.
        </Testimonials>
      </section>
      <section className="mt-16 sm:mt-24 lg:mt-32">
        <Services />
      </section>
      <section className="mt-16 sm:mt-24 lg:mt-32">
        <ContactSection />
      </section>
    </main>
  );
}
