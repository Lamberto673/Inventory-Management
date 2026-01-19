"use server"
import React from 'react'
import { getCurrentUser } from '../auth'
import { prisma } from '../prisma';
import { z } from "zod"
import { parse } from 'path';
import { redirect } from 'next/navigation';




const ProductSchema = z.object({
    name: z.string().min(1, "Name is Required"),
    price: z.coerce.number().nonnegative("Price must be non-negative"),
    quantity: z.coerce.number().int().min(0, "Quantity must be non-negataive"),
    sku: z.string().optional(),
    lowStock: z.coerce.number().int().min(0).optional(),
})
const deleteProducts =  async (formData : FormData) => {
    const user = await getCurrentUser();
    const id = String(formData.get("id") || "")
    
    await prisma.product.deleteMany({
        where: {id:id, userId: user.id},
    })

  return (
    <div>products</div>
  )
}

const createProducts = async (formData: FormData) => {
    const user = await getCurrentUser();

    const parsed = ProductSchema.safeParse({
        name: formData.get("name"),
        price: formData.get("price"),
        quantity: formData.get("quantity"),
        sku: formData.get("sku") || undefined,
        lowStock: formData.get("lowStock") || undefined,
    });

    if(!parsed.success){
        throw new Error("Validation Failed");
    }
    try {
        await prisma.product.create({
            data: {
                ...parsed.data,
                userId: user.id
            }
        });
        redirect("/inventory");
    } catch (error: any) {
        if (error?.digest === "NEXT_REDIRECT") {
            throw error; // Let Next.js handle the redirect
        }
        console.error("Create product error:", error);
        throw new Error(`Failed to create product: ${error?.message || error}`);
    }
}

export {deleteProducts, createProducts}