import ContactForm from "../components/ContactForm"

export default function Contact() {
  return (
    <div className="container home__container">
        <h2 className="contact__title">
            <span>Interested in my work?</span>
            <span>Let's get in touch!</span>
        </h2>
        <ContactForm />
    </div>
  )
}
