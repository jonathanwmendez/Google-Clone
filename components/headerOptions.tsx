import React from 'react'

type Props = {}

function HeaderOptions({}: Props) {
  return (
    <div>
        {/* Left */}

        {/* Right */}
        <div className='flex space-x-4'>
            <p className='link'>Settings</p>
            <p className='link'>Tools</p>
        </div>
    </div>
  )
}

export default HeaderOptions