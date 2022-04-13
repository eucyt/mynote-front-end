import React from "react"

type Props = {
    status: string;
    className: string;
}

const AuthSessionStatus: React.FC<Props> = (props) => (
    <>
        {props.status && (
            <div className={`${props.className} font-medium text-sm text-green-600`}>
                {props.status}
            </div>
        )}
    </>
)

export default AuthSessionStatus
