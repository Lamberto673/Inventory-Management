import { SignIn } from '@stackframe/stack'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className='min-h-screen flex items-center justify-center from-gray-300 to-blue-200 bg-linear-to-br'>
        <div className='max-w-md w-full space-y-8  '>
            <SignIn/>
            <Link  href={'/'}>Go Back Home</Link>
        </div>
    </div>
  )
}

export default page