import ApplicationLogo from '@/components/Common/ApplicationLogo'
import Dropdown from '@/components/Common/Header/Dropdown'
import Link from 'next/link'
import NavLink from '@/components/Common/Header/NavLink'
import { ResponsiveNavButton } from '@/components/Common/Header/ResponsiveNavLink'
import { DropdownButton } from '@/components/Common/Header/DropdownLink'
import { useAuth } from '@/hooks/auth'
import { useRouter } from 'next/router'
import React, { useState } from 'react'

type Props = {
  user: any
  setLoading: React.Dispatch<React.SetStateAction<boolean>>
}

const Navigation: React.VFC<Props> = (props) => {
  const router = useRouter()
  const { logout, withdraw } = useAuth({})
  const logoutOnClick = () => {
    props.setLoading(true)
    logout()
  }
  const withdrawOnClick = () => {
    if (confirm('退会してもよろしいですか？\n作成したデータは消去されます。')) {
      props.setLoading(true)
      withdraw()
    }
  }

  const [open, setOpen] = useState<boolean>(false)

  return (
    <nav className="bg-white border-b border-gray-100">
      {/* Primary Navigation Menu */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <Link href="/">
                <a>
                  <ApplicationLogo className="block h-10 w-auto fill-current" />
                </a>
              </Link>
            </div>

            {/* Navigation Links */}
            <div className="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex">
              <NavLink href="/" active={router.pathname === '/'}>
                Home
              </NavLink>
            </div>
            <div className="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex">
              <NavLink href="/notes/" active={router.pathname === '/notes'}>
                Notes
              </NavLink>
            </div>
          </div>

          {/* Settings Dropdown */}
          <div className="hidden sm:flex sm:items-center sm:ml-6">
            <Dropdown
              trigger={
                <button className="flex items-center text-sm font-medium text-gray-500 hover:text-gray-700 focus:outline-none transition duration-150 ease-in-out">
                  <div>{props.user?.name}</div>

                  <div className="ml-1">
                    <svg
                      className="fill-current h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </button>
              }>
              {/* Authentication */}
              <DropdownButton onClick={logoutOnClick}>Logout</DropdownButton>
              <DropdownButton onClick={withdrawOnClick}>
                Withdraw
              </DropdownButton>
            </Dropdown>
          </div>

          {/* Hamburger */}
          <div className="-mr-2 flex items-center sm:hidden">
            <button
              onClick={() => setOpen((open) => !open)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out">
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24">
                {open ? (
                  <path
                    className="inline-flex"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    className="inline-flex"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Responsive Navigation Menu */}
      {open && (
        <div className="block sm:hidden">
          {/* <div className="pt-2 pb-3 space-y-1"> */}
          {/*    <ResponsiveNavLink */}
          {/*        href="/" */}
          {/*        active={router.pathname === '/'}> */}
          {/*        Home */}
          {/*    </ResponsiveNavLink> */}
          {/* </div> */}

          {/* Responsive Settings Options */}
          <div className="pt-4 pb-1 border-t border-gray-200">
            <div className="flex items-center px-4">
              <div className="flex-shrink-0">
                <svg
                  className="h-10 w-10 fill-current text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>

              <div className="ml-3">
                <div className="font-medium text-base text-gray-800">
                  {props.user?.name}
                </div>
                <div className="font-medium text-sm text-gray-500">
                  {props.user?.email}
                </div>
              </div>
            </div>

            <div className="mt-3 space-y-1">
              {/* Authentication */}
              <ResponsiveNavButton onClick={logoutOnClick}>
                Logout
              </ResponsiveNavButton>
              <ResponsiveNavButton onClick={withdrawOnClick}>
                Withdraw
              </ResponsiveNavButton>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navigation
