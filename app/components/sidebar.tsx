import React from 'react'
import {ChartNoAxesCombined, CirclePile, Plus, Settings} from 'lucide-react'
import Link from 'next/link'
import { UserButton } from '@stackframe/stack'

const SideBar = ({currentPath="/dashboard"}: {currentPath:string}) => {

    const navigation = [
        {name: "DashBoard", href: "/dashboard", icon:ChartNoAxesCombined },
        {name: "Inventory", href:"/inventory", icon:CirclePile},
        {name: "Add Product", href:"/add-product", icon:Plus},
        {name: "Settings", href:"/settings", icon: Settings},
    ]
  return (
    <div className='fixed left-0 top-0 bg-neutral-900 text-white w-64 min-h-screen p-6 z-1'>
        <div className='mb-8'>
            <div className='flex items-center space-x-2 mb-4'>
                <ChartNoAxesCombined className='bg-white w-8 h-8 rounded-xl text-black p-1'/>
                 <span className='text-md font-semibold mt-1'>Inventor Management</span>
            </div>
        </div>
        <nav className='space-y-1'>
            <div className='text-sm font-semibold text-gray-400 uppercase'>
                Inventory
            </div>
                {navigation.map((item, key) => {
                    const IconComponent = item.icon;
                    const isActive = currentPath === item.href;
                   return ( 
                   <Link href={item.href} key={key} className={`flex items-center space-x-3 py-2 px-3 rounded-lg ${isActive ? "bg-purple-100 text-gray-800" : "text-gray-300 hover:bg-gray-800"}`}>
                    <IconComponent className='w-5 h-5'/>
                    <span className='text-sm lowercase'>{item.name}</span>
                    
                    </Link>
                   )
                })}

        </nav>
        <div className='absolute bottom-0 left-0 right-0 p-6 border-t border-gray-700'>
            <div className='flex items-center justify-between'>
                <UserButton showUserInfo/>
            </div>

        </div>
    </div>
  )
}

export default SideBar