import Head from 'next/head'
import React from 'react'

type Props = {
  children: React.ReactNode
}

// ログイン画面などのヘッダーがない認証前の画面
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
