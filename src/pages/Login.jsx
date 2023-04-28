import { useState } from "react";
import { useDispatch} from "react-redux";
import { Section } from "components/Section/section";
import { logIn } from "redux/auth/operations";
import { Form,  LabelStyle, InputNameStyle, Button } from 'components/ContactForm/ContactForm.styled';

export default function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const dispatch = useDispatch();

    const handleInputChange = e => {
        const { name, value } = e.currentTarget;
        switch (name) {
            case "email":
                setEmail(value);
                break;
            case "password":
                setPassword(value);
                break;
            default:
                return;
        };
    };

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(logIn({ email, password}));
        resetForm();
    };

    const resetForm = () => {
        setEmail("");
        setPassword("");
    };

    return (
        <>
            <Section title="Authorization">
                <Form onSubmit={handleSubmit}>
                    < LabelStyle>
                        Email
                        <InputNameStyle
                            type="mail"
                            name="email"
                            required
                            value={email}
                            onChange={handleInputChange}
                        />
                    </ LabelStyle>
                    
                    < LabelStyle>
                        Password
                        <InputNameStyle
                            type="text"
                            name="password"
                            required
                            value={password}
                            onChange={handleInputChange}
                        />
                    </ LabelStyle>  

                    <Button type="submit">Sign in</Button>
                </Form>
            </Section>
        </>
    );  
};