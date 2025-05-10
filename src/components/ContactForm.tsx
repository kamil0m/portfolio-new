import Input from "./Input"
import { useState } from "react"

export default function ContactForm() {
    
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    })

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()

        const nameInput:string = (event.currentTarget as HTMLElement).querySelector<HTMLInputElement>('#name')!.value
        
        const emailInput:string = (event.currentTarget as HTMLElement).querySelector<HTMLInputElement>('#email')!.value
        
        const messageInput:string = (event.currentTarget as HTMLElement).querySelector<HTMLTextAreaElement>('#message')!.value
        
        const successMessage:HTMLElement = document.querySelector('.success__message')!
    
        setFormData({
            name: nameInput,
            email: emailInput,
            message: messageInput
        })
        
        console.log(formData)
        successMessage.classList.remove('hidden')

    }

    return (
        <>
            <form className="contact__form" onSubmit={handleSubmit}>
                < Input 
                    label="Your name" 
                    type="text" 
                    id="name" 
                />
                < Input 
                    label="Your email" 
                    type="email" 
                    id="email" 
                />
                < Input 
                    label="Your message" 
                    type="textarea" 
                    id="message" 
                    placeholder="Your message goes here"
                />
                <input className="form__input" type="submit" value="Envoyer" />
            </form>

            <div className="success__message hidden">
                <p>Thank you for your message, {formData.name}!</p>
                <p>I will get back to you at 
                    <br/>{formData.email}
                </p>
            </div>
        </>
    )
}
