import React from "react";
import FadeIn from "./FadeIn";
import Offices from "./Offices";
import Border from "./Border";
import SocialMedia from "./SocialMedia";

const ContactDetails = () => {
  const officeHours = "Atendimento das 8:00 às 18:00 todos os dias";
  const contactInfo = [
    { label: "Wagner", email: "wfodont@gmail.com" },
    { label: "Fernanda", email: "fernanda@gmail.com" },
  ];

  return (
    <FadeIn>
      <section className="mt-8">
        <h2 className="font-display text-lg font-semibold text-neutral-900 mb-2">
          Horário de Funcionamento
        </h2>
        <p className="text-base text-neutral-700">{officeHours}</p>
        <div className="mt-6">
          <Offices className="grid grid-cols-1 gap-8 sm:grid-cols-2" />
        </div>
      </section>

      <section className="mt-12">
        <Border className="py-8">
          <h2 className="font-display text-lg font-semibold text-neutral-900 mb-2">
            Entre em Contato
          </h2>
          <dl className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {contactInfo.map(({ label, email }) => (
              <div key={email}>
                <dt className="font-semibold text-neutral-900">{label}</dt>
                <dd className="text-sm text-neutral-700">
                  <a
                    href={`mailto:${email}`}
                    className="hover:text-primary transition duration-300"
                  >
                    {email}
                  </a>
                </dd>
              </div>
            ))}
          </dl>
        </Border>

        <Border className="mt-8 py-8">
          <h2 className="font-display text-lg font-semibold text-neutral-900 mb-2">
            Outras formas de contato.
          </h2>
          <SocialMedia className="mt-4" />
        </Border>
      </section>
    </FadeIn>
  );
};

export default ContactDetails;
