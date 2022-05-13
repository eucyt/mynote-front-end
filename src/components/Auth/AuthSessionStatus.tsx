import React from 'react'

type Props = {
  status: string | null
  className?: string
}

const AuthSessionStatus: React.VFC<Props> = (props) => (
  <>
    {props.status && (
      <div className={`${props.className} font-medium text-sm text-green-600`}>
        {props.status}
      </div>
    )}
  </>
)

export default AuthSessionStatus
