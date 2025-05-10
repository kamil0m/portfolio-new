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
        <>
            <label htmlFor={id}>{label}:
                <input 
                    className="form__input" 
                    type={type} 
                    id={id} 
                    name={id} 
                    placeholder={placeholder || ''} 
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={inputData}
                />
                <div className="error__message">
                    {errorMessage}
                </div>
            </label>
            
        </>
        
    )
}
