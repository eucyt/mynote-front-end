import React from 'react'

type Props = {
  className?: string
  htmlFor?: string
  children?: React.ReactNode
}

const Label: React.VFC<Props> = (props) => (
  <label
    className={`${props.className} block font-medium text-sm text-gray-700`}
    htmlFor={props.htmlFor}>
    {props.children}
  </label>
)

export default Label
