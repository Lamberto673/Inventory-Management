import { SignIn } from '@stackframe/stack'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className='min-h-screen flex flex-col items-center justify-center from-gray-300 to-blue-200 bg-linear-to-br '>
        <div className='max-w-md w-full space-y-8  '>
            <SignIn/>
        </div>
        <Link className='text-center mr-20' href={'/dashboard'}>Let's Go</Link>
    </div>
  )
}

export default page