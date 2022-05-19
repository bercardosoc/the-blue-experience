import axios from "axios"
import { createContext, ReactNode, useContext } from "react"

// interface User {
//     id: string 
//     age: number
//     name: string 
//     email: string
//     password?: string 
//     createdAt: string 
//     updatedAt: string
// }
interface SignUpProviderProps {
    children: ReactNode
}

interface signUpCredentials {
    age: number
    name: string 
    email: string
    password?: string 
} 

interface SignUpContextData {
    toSignUp: (credentials: signUpCredentials) => void
}

export const SignUpContext = createContext<SignUpContextData>({} as SignUpContextData)

export const SignUpProvider = ({ children }: SignUpProviderProps) => {

    const toSignUp = (data: signUpCredentials) => {
    const { age,email,name,password } = data
    axios
    .post("http://localhost:3333/users",
    {
        age: age,
        name: name,
        email: email,
        password: password
    })
    .then((response) => {
        console.log("Criou o usuário")
    })
    .catch((err) => {
        console.log(err)
    })
}

return (
    <SignUpContext.Provider 
    value={{ toSignUp }}
    >
        {children}
    </SignUpContext.Provider>
)

}

export const useSignup = () => useContext(SignUpContext)