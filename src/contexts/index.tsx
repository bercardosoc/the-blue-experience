import { ReactNode } from "react";
import { SignUpProvider } from "./Signup"

interface AppProviderProps {
    children: ReactNode
}

export const AppProvider = ({ children }: AppProviderProps) => (
 
    <SignUpProvider>
        {children}
    </SignUpProvider>
)