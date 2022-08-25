import ApplicationLogo from '@/components/Common/ApplicationLogo'
import Link from 'next/link'
import NavLink from '@/components/Common/Header/NavLink'
import { useRouter } from 'next/router'
import React from 'react'

const Header: React.VFC = () => {
  const router = useRouter()

  return (
    <nav className="bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/">
                <a>
                  <ApplicationLogo className="block h-10 w-auto fill-current" />
                </a>
              </Link>
            </div>

            <div className="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex">
              <NavLink href="/" active={router.pathname === '/'}>
                Home
              </NavLink>
            </div>

            <div className="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex">
              <NavLink href="/login/" active={router.pathname === '/login'}>
                Login
              </NavLink>
            </div>

            <div className="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex">
              <NavLink
                href="/register/"
                active={router.pathname === '/register'}>
                Sign up
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Header
