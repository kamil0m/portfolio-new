import Input from "./Input"
import { useState } from "react"

interface FormData {
    name: string;
    surname: string;
    email: string;
    message: string;
}

export default function ContactForm() {
    
    const [formData, setFormData] = useState <FormData>({
        name: '',
        surname: '',
        email: '',
        message: ''
    })

    const [status, setStatus] = useState<string>("");

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) =>{
        event.preventDefault();

        const nameInput:string = (event.currentTarget as HTMLElement).querySelector<HTMLInputElement>('#name')!.value
        const surnameInput:string = (event.currentTarget as HTMLElement).querySelector<HTMLInputElement>('#surname')!.value
        const emailInput:string = (event.currentTarget as HTMLElement).querySelector<HTMLInputElement>('#email')!.value
        const messageInput:string = (event.currentTarget as HTMLElement).querySelector<HTMLTextAreaElement>('#message')!.value
        const successMessage:HTMLElement = document.querySelector('.success__message')!
    
        const form = {
            name: nameInput,
            surname: surnameInput,
            email: emailInput,
            message: messageInput
        };

        setFormData(form);

        setStatus("Wysyłanie...");
        
        console.log(form);
        successMessage.classList.remove('hidden');

        try {
            console.log(form);
            const response = await fetch('http://localhost:5000/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(form)
            });
    
            const result = await response.json();

            // let result = {};
            // try {
            //     result = await response.json();
            // } catch {
            // result = { message: 'Brak treści odpowiedzi z serwera' };
            // }
    
            if (response.ok) {
                setStatus("Wiadomość została wysłana!");
                setFormData({
                    name: "",
                    surname: "",
                    email: "",
                    message: "",
                });
                (event.target as HTMLFormElement).reset();
            } else {
                setStatus(`Błąd: ${result.message}`);
            }
        } catch (error) {
            console.error("Błąd:", error);
            setStatus("Wystąpił błąd podczas wysyłania wiadomości.");
        }
    }



    return (
        <div className="card bg-main-verylight flex flex-col my-5">
            <form className="flex flex-col w-full text-start" onSubmit={handleSubmit}>
                
                <div className="flex flex-col tablet:flex-row tablet:gap-x-2">
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

                <label className="flex flex-col text-start text-lg font-light" htmlFor="message">
                    Your message:
                    < textarea
                        className="text-center flex py-4 w-full h-40 text-start text-sm border-b-1 focus:border-accent focus:border-b-2 focus:outline-none resize-y"
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
            {status && <p className="text-green-500 font-bold text-lg mt-4"><span className="text-green-500">✓ </span>{status}</p>}
        </div>
    )
}

// Standard version to be tested later on :
// const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//         ...prev,
//         [name]: value,
//     }));
// };