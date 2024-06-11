"use server"

import { db } from "@/db"
import { OrderStatus } from "@prisma/client"

export async function ChangeOrderStatus({id , newStatus} : {
    id: string , 
    newStatus: OrderStatus
}) {

    await db.order.update({
        where: {
            id : id
        } ,
        data : {
            status: newStatus
        }
    })

}