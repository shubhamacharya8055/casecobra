"use server"

import { db } from "@/db"
import { CaseColors, CaseFinish, CaseMaterial, PhoneModel } from "@prisma/client"

export type SaveConfigOptions = {
    color: CaseColors 
    finish: CaseFinish 
    material: CaseMaterial 
    model: PhoneModel 
    configId: string
}

export async function saveConfig({color, finish, material, model, configId}: SaveConfigOptions) {
    await db.configuration.update({
        where: {
            id: configId
        }, 
        data: {
            color , 
            finish , 
            material,
            model
        }
    })
}
