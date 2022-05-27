import Navigation from '@/components/Common/Header/Navigation'
import { useAuth } from '@/hooks/auth'
import React, { useState } from 'react'
import Loading from '@/components/Common/Loading'
import FullSizeLoading from '@/components/Common/FullSizeLoading'

type Props = {
  children?: React.ReactNode
}

const AppLayout: React.VFC<Props> = (props) => {
  const { user } = useAuth({ middleware: 'auth' })
  const [loading, setLoading] = useState(false)

  if (loading) {
    return <FullSizeLoading />
  } else {
    return (
      <div className="min-h-screen bg-gray-100">
        <Navigation user={user} setLoading={setLoading} />

        {/* Page Content */}
        <main>{props.children}</main>
      </div>
    )
  }
}

export default AppLayout
