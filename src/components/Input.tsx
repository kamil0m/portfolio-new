import { useState } from "react"
import FormInputProps from "../models/FormInputProps"
import validateFormInput from "./validateFormInput"

export default function Input({ label, type, id, placeholder }: FormInputProps) {
    
    const [inputData, setInputData] = useState('')
    const [errorMessage, setErrorMessage] = useState('')
    const [isFirstInput, setIsFirstInput] = useState(true)
    
    function handleChange(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        setInputData(event.target.value)
      
        if (!isFirstInput) {
            setErrorMessage(validateFormInput(event.target.value, type));
        }
    }

    function handleBlur(event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) {
        setIsFirstInput(false)
        setErrorMessage(validateFormInput(event.target.value, type))
    }

    return (
        <div >
            <label className="flex flex-col mb-2 font-light text-lg focus:text-accent" htmlFor={id}>
                
                {label}:

                <input 
                    className="h-10 border-b-1 focus:border-accent focus:border-b-2 focus:outline-none Xtablet:mr-2" 
                    type={type} 
                    id={id} 
                    name={id} 
                    placeholder={placeholder || ''} 
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={inputData}
                />

                <div className="text-red-500 text-xs error__message">
                    {errorMessage}
                </div>

            </label>
            
        </div>
        
    )
}
