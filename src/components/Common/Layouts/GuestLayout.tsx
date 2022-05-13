import Head from 'next/head'
import React from 'react'

type Props = {
  children: React.ReactNode
}

const GuestLayout: React.VFC<Props> = ({ children }) => {
  return (
    <div>
      <Head>
        <title>MyNote</title>
      </Head>

      <div className="font-sans text-gray-900 antialiased">{children}</div>
    </div>
  )
}

export default GuestLayout
