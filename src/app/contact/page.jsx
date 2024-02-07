import ContactDetails from "@/components/ContactDetails";
import ContactForm from "@/components/ContactForm";
import Container from "@/components/Container";
import PageIntro from "@/components/PageIntro";

const ContactPage = () => {
  return (
    <>
      <PageIntro eyebrow="Nos contate" title="Queremos escutar a sua necessidade.">
        <p>Queremos te ajudar.</p>
      </PageIntro>
      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <div className="grid grid-cols-1 gap-x-8 gap-y-24 lg:grid-cols-2">
          <ContactDetails />
        </div>
      </Container>
    </>
  );
};

export default ContactPage;
