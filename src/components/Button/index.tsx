import { FC, ReactNode } from "react"

interface Props {
    children?: ReactNode
}

export const Button: FC<Props> = ({ children, ...rest }) => {
    return (
        <button type="submit" {...rest} >
            {children}
        </button>
    )
}