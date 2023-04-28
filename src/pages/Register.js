import { useState } from "react";
import { useDispatch } from "react-redux";
import { signUp } from "redux/auth/operations";
import { Section } from "components/Section/section";
import { Form, LabelStyle, InputNameStyle, InputNumberStyle, Button } from 'components/ContactForm/ContactForm.styled';

export default function Register() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const dispatch = useDispatch();

    const handleInputChange = e => {
        const { name, value } = e.currentTarget;
        switch (name) {
            case "name":
                setName(value);
                break;
            case "email":
                setEmail(value);
                break;
            case "password":
                setPassword(value);
                break;
            case "confirmPassword":
                setConfirmPassword(value);
                break;
            default:
                return;
        };
    };

    const handleSubmit = e => {
        e.preventDefault();
        if(password !== confirmPassword) {
            alert("Password confiramation has an error");
            return;
        };
        dispatch(signUp({ name, email, password}));
        resetForm();
    };

    const resetForm = () => {
        setName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
    };

    return (
        <Section title="Registration">
            <Form onSubmit={handleSubmit}>
                <LabelStyle>
                    Name
                    <InputNameStyle
                        type="text"
                        name="name"
                        required
                        value={name}
                        onChange={handleInputChange}
                    />
                </LabelStyle>

                <LabelStyle>
                    Email
                    <InputNameStyle
                        type="mail"
                        name="email"
                        required
                        value={email}
                        onChange={handleInputChange}
                    />
                </LabelStyle>
                
                <LabelStyle>
                    Password
                    <InputNameStyle
                        type="text"
                        name="password"
                        required
                        value={password}
                        onChange={handleInputChange}
                    />
                </LabelStyle>  

                <LabelStyle>
                    Confirm Password
                    <InputNumberStyle
                        type="text"
                        name="confirmPassword"
                        required
                        value={confirmPassword}
                        onChange={handleInputChange}
                    />
                </LabelStyle>  

                <Button type="submit">Sign up</Button>
            </Form>
        </Section>
    );  
};