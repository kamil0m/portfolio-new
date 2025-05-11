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
        <div className="card bg-main-verylight flex flex-col my-5">
            <form className="flex flex-col w-full text-start" onSubmit={handleSubmit}>
                
                <div className="flex flex-col tablet:flex-row">
                    < Input 
                        label="First name" 
                        type="text" 
                        id="name" 
                    />
                    < Input 
                        label="Last name" 
                        type="text" 
                        id="surname"
                    />
                </div>

                < Input 
                    label="Your email" 
                    type="email" 
                    id="email" 
                />

                <label className="flex flex-col text-start" htmlFor="message">
                    Your message:
                    < textarea
                        className="text-center flex text-start py-4 w-full h-40 border-b-1 focus:border-accent focus:border-b-2 focus:outline-none resize-y"
                        id="message" 
                        placeholder="Your message goes here"
                    />
                </label>

                <input className="button button-accent mt-4" type="submit" value="Envoyer" />
            </form>

            <div className="success__message hidden">
                <p>Thank you for your message, {formData.name}!</p>
                <p>I will get back to you at 
                    <br/>{formData.email}
                </p>
            </div>
        </div>
    )
}
