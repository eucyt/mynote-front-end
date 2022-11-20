import React from 'react'

type Props = {
  type?: 'button' | 'reset' | 'submit'
  className?: string
  children: React.ReactNode
  onClick?: () => void
  designType?: 'outline'
}

const Button: React.VFC<Props> = ({
  type = 'submit',
  className,
  children,
  onClick,
  designType
}) => {
  let design
  switch (designType) {
    case 'outline':
      design =
        'text-gray-900 border-gray-800 hover:bg-gray-800 hover:text-white active:bg-gray-800 focus:outline-none focus:border-gray-900 focus:ring ring-gray-300'
      break
    default:
      design =
        'text-white bg-gray-800 hover:bg-white hover:border-gray-800 hover:text-gray-900 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring ring-gray-300'
      break
  }
  return (
    <button
      onClick={onClick}
      type={type}
      className={
        `${className} font-sans inline-flex items-center px-4 py-2 border border-transparent rounded-md font-semibold text-xs uppercase tracking-widest focus:ring disabled:opacity-25 transition ease-in-out duration-150 ` +
        design
      }>
      {children}
    </button>
  )
}

export default Button
