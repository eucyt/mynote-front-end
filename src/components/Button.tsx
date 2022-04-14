import React from "react"

type Props = {
    type?: "button" | "reset" | "submit";
    className?: string;
    children: React.ReactNode;
}

const Button: React.VFC<Props> = ({type = "submit", className, children}) => (
    <button
        type={type}
        className={`${className} inline-flex items-center px-4 py-2 bg-gray-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring ring-gray-300 disabled:opacity-25 transition ease-in-out duration-150`}
        children={children}
    />
)

export default Button
