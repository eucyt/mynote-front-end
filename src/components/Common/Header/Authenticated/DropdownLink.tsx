import Link from 'next/link'
import { Menu } from '@headlessui/react'
import React, { MouseEventHandler } from 'react'

type DropdownLinkProps = {
  children?: React.ReactNode
  href: string
}

const DropdownLink: React.VFC<DropdownLinkProps> = ({ children, href }) => (
  <Menu.Item>
    {({ active }) => (
      <Link href={href}>
        <a
          className={`w-full text-left block px-4 py-2 text-sm leading-5 text-gray-700 ${
            active ? 'bg-gray-100' : ''
          } focus:outline-none transition duration-150 ease-in-out`}>
          {children}
        </a>
      </Link>
    )}
  </Menu.Item>
)

type DropdownButtonProps = {
  children?: React.ReactNode
  onClick?: MouseEventHandler<HTMLButtonElement>
  active?: boolean
}

export const DropdownButton: React.VFC<DropdownButtonProps> = ({
  children,
  onClick,
  active = false
}) => (
  <Menu.Item>
    {({ active }) => (
      <button
        onClick={onClick}
        className={`w-full text-left block px-4 py-2 text-sm leading-5 text-gray-700 ${
          active ? 'bg-gray-100' : ''
        } focus:outline-none transition duration-150 ease-in-out`}>
        {children}
      </button>
    )}
  </Menu.Item>
)

export default DropdownLink
