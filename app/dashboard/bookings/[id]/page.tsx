import UserInfoPage from '@/components/shared/UserInfoDisplay'
import React from 'react'

function page({ params }: { params: { id: string } }) {
  return (
    <div>
      <UserInfoPage id={params.id} />
    </div>
  )
}

export default page