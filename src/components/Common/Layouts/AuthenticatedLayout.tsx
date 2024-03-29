import Navigation from '@/components/Common/Header/Authenticated/Navigation'
import { useAuth } from '@/hooks/auth'
import React, { useState } from 'react'
import FullSizeLoading from '@/components/Common/FullSizeLoading'
import Head from 'next/head'

type Props = {
  children?: React.ReactNode
}

// 認証済みの画面
const AuthenticatedLayout: React.VFC<Props> = (props) => {
  const { user } = useAuth({ middleware: 'auth' })
  const [loading, setLoading] = useState(false)

  if (loading) {
    return (
      <>
        <Head>
          <meta name="robots" content="noindex,nofollow" />
        </Head>
        <FullSizeLoading />
      </>
    )
  } else {
    return (
      <>
        <Head>
          <meta name="robots" content="noindex,nofollow" />
        </Head>
        <div className="min-h-screen bg-gray-100 font-sans">
          <Navigation user={user} setLoading={setLoading} />

          {/* Page Content */}
          <main className="">{props.children}</main>
        </div>
      </>
    )
  }
}

export default AuthenticatedLayout
