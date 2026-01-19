"use client"
import React from 'react'
import { AreaChart, Area, CartesianGrid, ResponsiveContainer, XAxis, YAxis, Tooltip } from 'recharts';
interface ChartData{
    week: string;
    products: number;
}

const ProductsChart = ({data}: {data:ChartData[]}) => {
  return (
    <div className='h-48 w-full'>
        <ResponsiveContainer width="100%" height="100%">
        
            <AreaChart data={data} margin={{top: 5, right: 30, left: 20, bottom: 5}}>
                <CartesianGrid strokeDasharray="3 3" stroke="#c2c2c2"/>
                <XAxis dataKey="week" stroke="#666" fontSize={12} tickLine={false} axisLine={false}/>
                <YAxis stroke="#666" fontSize={12} tickLine={false} axisLine={false} allowDecimals={false}/>

                <Area type="monotone" dataKey="products" stroke='#0f4296' fill="#346fcf" fillOpacity={`0.3`} strokeWidth={2.5} dot={{fill: "#0f4296", strokeWidth: 2, r:3}} activeDot={{fill: "#0f4296", r:4}}/>

                <Tooltip 
                contentStyle={{
                    backgroundColor: "white",
                    border: "1px solid #e1e3e6",
                    borderRadius: "8px",
                    boxShadow: "0 4px 6px -1px rgb(0,0,0,0.1)",
                }}
                labelStyle={{color: "#2d3033", fontWeight: "500"}}
                />

            </AreaChart>
        </ResponsiveContainer></div>
  )
}

export default ProductsChart