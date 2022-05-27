import React from 'react'
import Loading from '@/components/Common/Loading'

const FullSizeLoading: React.VFC = () => (
  <div className="h-screen w-screen flex justify-center items-center bg-gray-100">
    <Loading />
  </div>
)

export default FullSizeLoading
