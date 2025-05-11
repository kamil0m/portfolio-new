import ContactForm from "../components/ContactForm"
import MainBackground from "../components/MainBackground"

export default function Contact() {
  return (
    <div className="flex flex-col grow">

      < MainBackground />

      <section className="px-6 pt-10 text-center tablet:max-w-3/5 tablet:mx-auto">

        <h2 className="pt-10 text-center">Contact</h2>
        <p>Interested in my work?
        <br />Let's get in touch!</p>

        < ContactForm />
        
      </section>

    </div>
  )
}
