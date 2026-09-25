import { Footer } from "../../components/common/Footer";
import { Header } from "../../components/common/Header";
import { PageProps } from "../../types";
import { ContactForm } from "./components/ContactForm";

export function ContactPage({ active, setActive }: PageProps) {
  return (
    <main className="contact-page">
      <section className="contact-shell">
        <div className="contact-background" />
        <Header active={active} setActive={setActive} />
        <section className="contact-content">
          <div className="contact-left">
            <div className="contact-title">
              <h1>CONTACT</h1>
            </div>
          </div>
          <ContactForm />
        </section>
        <Footer setActive={setActive} variant="contact" />
      </section>
    </main>
  );
}
