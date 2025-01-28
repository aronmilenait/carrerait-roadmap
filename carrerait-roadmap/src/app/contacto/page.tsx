import Head from "next/head";
import { Contact } from "../components/Contact/Contact";
import { ContactForm } from "../components/Contact/ContactForm";

export default function ContactPage() {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
        />
      </Head>
      <Contact />
      <ContactForm />
    </>
  );
}
