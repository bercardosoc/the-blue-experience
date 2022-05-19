import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { useContext } from "react"
import Astro from "../../assets/2.svg"
import { SignUpContext } from "../../contexts/Signup"
import { Container, Content } from "./styled";

export const Signup = () => {

    const { toSignUp } = useContext(SignUpContext)

    const schema = yup.object().shape({        
        age: yup.number(),
        name: yup.string(),
        email: yup.string(),
        password: yup.string(),
    })

    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm({
        resolver: yupResolver(schema)
    })
    
    const handleSignup = (data: any) => {
        console.log(data)
        toSignUp(data)
    }

    return (
        <Container>
            <h1>Welcome to the blue experience</h1>
            <h3>You deserve it</h3>
            <Content>
            <img src={Astro} alt="A space person"/>
            <form
            onSubmit={handleSubmit(handleSignup)}
            >
                <h3>
                    Sign Up and start your jorney
                </h3>
                <input
                {...register("name")}
                placeholder="Your name"
                />
                <input
                {...register("email")}
                placeholder="Your email"
                />
                <input
                {...register("password")}
                placeholder="Your password"
                />

                <div id="InputAndButton" >

                <input
                id="AgeInput"
                type="number"
                min="12" max="100"
                {...register("age")}
                placeholder="Your age"
                />
                <button>
                    Submit
                </button>

                </div>
            </form>
            </Content>
        </Container>
    )
}