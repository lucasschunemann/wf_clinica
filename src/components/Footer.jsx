import React from "react";
import Container from "./Container";
import FadeIn from "./FadeIn";
import FooterNavigation from "./FooterNavigation";
import Logo from "./Logo";
import Link from "next/link";

const Footer = () => {
  return (
    <Container as="footer" className="mt-24 w-full py-12 sm:mt-32 lg:mt-40">
      <FadeIn>
        <div className="grid grid-cols-1 gap-y-16 md:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col items-center lg:items-start">
            <Logo className="h-8 mb-4" />
            <p className="text-sm text-neutral-700 text-center lg:text-left">
              Comprometidos com a excelência em saúde bucal, proporcionamos
              tratamentos inovadores para garantir o seu sorriso mais brilhante.
            </p>
          </div>
          <div className="flex justify-center">
            <FooterNavigation />
          </div>
          <div className="flex flex-col items-center lg:items-end">
            <h3 className="font-semibold text-neutral-900 mb-4">Contato</h3>
            <p className="text-sm text-neutral-700 mb-2">wf@clinicawf.com</p>
            <p className="text-sm text-neutral-700">+55 47 1234-5678</p>
          </div>
        </div>
        <div className="mt-16 border-t border-neutral-950/10 pt-8 lg:pt-12 text-center">
          <Link href="/" aria-label="Voltar para a página inicial">
            {/* Corrigido para remover o <a> desnecessário */}
            Home
          </Link>
          <p className="text-sm text-neutral-700 mt-4">
            © Clínica WF. {new Date().getFullYear()}. Todos os direitos
            reservados.
          </p>
        </div>
      </FadeIn>
    </Container>
  );
};

export default Footer;
