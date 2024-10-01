import ProfilePage from '@/components/shared/ProfilePage'
import React from 'react'

function creatorid({ params }: { params: { id: string } }) {

  
  return (
    <div>
      <ProfilePage id={params.id} />
    </div>
  )
}

export default creatorid