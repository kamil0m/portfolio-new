import ContactForm from "../components/ContactForm"
import MainBackground from "../components/MainBackground"

export default function Contact() {
  return (
    <div className="flex flex-col grow">

      < MainBackground />

      <section className="pt-14 text-center tablet:max-w-3/5 mb-10 tablet:w-full tablet:mx-auto">

        <h2 className="text-center">Contact</h2>
        <h3 className="mt-6">Interested in my work?
        <br />Let's get in touch!</h3>

        < ContactForm />
        
      </section>

    </div>
  )
}
