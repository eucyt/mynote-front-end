import React from 'react'
import Header from '@/components/Common/Header/Public/Header'

type Props = {
  children: React.ReactNode
}

// 一般公開画面
const PublicLayout: React.VFC<Props> = ({ children }) => {
  return (
    <>
      <div className="min-h-screen bg-gray-100">
        <Header />
        <main className="">{children}</main>
      </div>
    </>
  )
}

export default PublicLayout
