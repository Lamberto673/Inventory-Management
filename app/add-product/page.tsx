import { getCurrentUser } from '@/lib/auth'
import React from 'react'
import SideBar from '../components/sidebar';
import Link from 'next/link';
import { createProducts } from '@/lib/actions/products';


const AddProductPage = async () => {
    const user = await getCurrentUser();
    
  return (
    <div className='min-h-screen'>
        <SideBar currentPath='/add-product'/>

        <main className='ml-64 p-8'>
             <div className='mb-8'>
                <div className='flex items-center justify-between'>
                    <div>
                        <h1 className='text-2xl font-semibold text-gray-900'>Add Product</h1>
                        <p className='text-sm text-gray-500'>
                            Add new product to your inventory
                        </p>
                    </div>
                </div>
            </div>
            <div className='max-w-2xl'>
                <div className='bg-white rounded-lg border border-gray-200 p-6'>
                    <form className='space-y-6' action={createProducts}>
                        <div>
                            <label htmlFor='name' className='block text-sm font-medium text-gray-700 mb-2'>
                                Product Name *
                            </label>
                            <input type="text" id="name" name="name" required className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:border-transparent' placeholder='Enter Product Name'/>
                        </div>

                        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                             <div>
                            <label htmlFor='price' className='block text-sm font-medium text-gray-700 mb-2'>
                                Price *
                            </label>
                            <input type="number" id="price" name="price" step="0.01" min="0" required className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:border-transparent' placeholder='0.0'/>
                        </div>
                         <div>
                            <label htmlFor='quantity' className='block text-sm font-medium text-gray-700 mb-2'>
                                Quantity *
                            </label>
                            <input type="number" id="quantity" name="quantity" min="0" required className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:border-transparent' placeholder='0'/>
                         </div>
                          <div>
                            <label htmlFor='SKU' className='block text-sm font-medium text-gray-700 mb-2'>
                                SKU (optional)
                            </label>
                            <input type="text" id="sku" name="sku" min="0"  className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:border-transparent' placeholder='Enter SKU'/>
                         </div>
                          <div>
                            <label htmlFor='lowStock' className='block text-sm font-medium text-gray-700 mb-2'>
                                Low Stock At (optional)
                            </label>
                            <input type="number" id="lowStock" name="lowStock" min="0"  className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:border-transparent' placeholder='Enter Low Stock Threshold'/>
                         </div>
                        </div>

                        <div className='flex gap-5'>
                            <button type='submit' className='cursor-pointer px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-600'>Add Product</button>
                            <Link href="/inventory" className='px-6 py-3 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300'>
                                Cancel
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </main>
    </div>
  )
}

export default AddProductPage