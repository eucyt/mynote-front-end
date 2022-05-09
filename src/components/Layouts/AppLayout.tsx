import Navigation from '@/components/Layouts/Navigation'
import {useAuth} from '@/hooks/auth'
import React from "react";

type Props = {
    children?: React.ReactNode;
}

const AppLayout: React.VFC<Props> = (props) => {
    const {user} = useAuth({middleware: 'auth'})

    return (
        <div className="min-h-screen bg-gray-100">
            <Navigation user={user}/>

            {/* Page Content */}
            <main>{props.children}</main>
        </div>
    )
}

export default AppLayout
