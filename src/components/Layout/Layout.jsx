import { Suspense } from "react"
import { Outlet } from "react-router-dom"
import { Navigation } from "components/Navigation/Navigation"
import { UserMenu } from "components/UserMenu/UserMenu"
import { Header } from "components/Header/Header"
import { useAuth } from 'hooks';

export function Layout() {
    const {isLoggedIn} = useAuth()

    return (
        <>
            <Header>
                <Navigation /> 
                {isLoggedIn && <UserMenu />}
            </Header>
            <main>
                <Suspense fallback={null}>
                    <Outlet />
                </Suspense>
            </main>
        </>
    )
};