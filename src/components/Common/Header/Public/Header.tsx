import ApplicationLogo from '@/components/Common/ApplicationLogo'
import Link from 'next/link'
import React from 'react'

const Header: React.VFC = () => {
  return (
    <nav className="bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/">
                <a>
                  <ApplicationLogo className="block h-10 w-auto fill-current"/>
                </a>
              </Link>
            </div>
            <div className="flex items-center ml-4">
              <p className="text-sm font-medium">
                MyNote
              </p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Header
