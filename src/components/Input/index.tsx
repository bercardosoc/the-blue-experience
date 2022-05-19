import { FC, InputHTMLAttributes } from "react"
import { StyledInput } from "./styled"

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string 
    error?: string
    label?: string 

}

export const Input: FC<InputProps> = ({
    name,
    error,
    label,
    ...rest
    
}) => {
    return (
        <>
        {label && <label htmlFor={name}>{label}</label>}
        
        <StyledInput
            aria-invalid={error ? "true" : "false"}
            id={name}
            name={name}  
            {...rest}
        />
        
        {error && <span>{error}</span>}
        </>
    )
}