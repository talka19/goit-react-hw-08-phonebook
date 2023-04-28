import { NavTag, StyledNavLink, Ul } from "./Navigation.styled"
import { useAuth } from "hooks";

export function Navigation() {
    const {isLoggedIn} = useAuth();

    return(
        <NavTag>
            <Ul>
                {isLoggedIn 
                ?
                <li><StyledNavLink to="/contacts">contacts</StyledNavLink></li>
                : 
                <>
                    <li><StyledNavLink to="/login">login</StyledNavLink></li>
                    <li><StyledNavLink to="/register">register</StyledNavLink></li>
                </>}
            </Ul>
        </NavTag>
    )
};