import React, { ChangeEventHandler } from 'react'

type Props = {
  id?: string
  type?: string
  name?: string
  value?: string
  className?: string
  onChange?: ChangeEventHandler<HTMLInputElement>
  autoComplete?: string
  required?: boolean
  autoFocus?: boolean
  disabled?: boolean
}

const Input: React.VFC<Props> = ({
  id,
  type,
  name,
  value,
  className,
  onChange,
  autoComplete,
  required = false,
  autoFocus = false,
  disabled = false
}) => (
  <input
    id={id}
    type={type}
    name={name}
    value={value}
    onChange={onChange}
    autoComplete={autoComplete}
    required={required}
    autoFocus={autoFocus}
    disabled={disabled}
    className={`${className} rounded-md shadow-sm border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50`}
  />
)

export default Input
