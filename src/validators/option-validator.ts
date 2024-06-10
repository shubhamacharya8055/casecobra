//bg-blue-950 border-blue-950
//bg-zinc-900 border-zinc-900
//bg-rose-950 border-rose-950

import { PRODUCT_PRICES } from "@/config/product"


export const COLORS = [
    {
        label: "Black" , 
        value: "black" , 
        tw: "zinc-900"
    },
    {
        label: "Blue" , 
        value: "blue" , 
        tw: "blue-950"
    },
    {
        label: "Rose" , 
        value: "rose" , 
        tw: "rose-950"
    }
] as const

export const MODEL = {
    name: "models" , 
    options: [
        {
            label: "Iphone X",
            value: "iphonex"
        }, 
        {
            label: "Iphone 11",
            value: "iphone11"
        },
        {
            label: "Iphone 12",
            value: "iphone12"
        },
        {
            label: "Iphone 13",
            value: "iphone13"
        },
        {
            label: "Iphone 14",
            value: "iphone14"
        },
        {
            label: "Iphone 15",
            value: "iphone15"
        }
    ]
} as const


export const MATERIALS = {
    name: "material" , 
    options: [
        {
            label: "Silicone" , 
            value: "silicone" , 
            description: undefined , 
            price: PRODUCT_PRICES.material.silicone
        } , 
        {
            label: "Soft Poly Carbonate" , 
            value: "polycarbonate" , 
            description: "Scratch-resistant Coating" , 
            price: PRODUCT_PRICES.material.polycarbonate
        } , 


    ]
} as const

export const FINISHES = {
    name: "finish" , 
    options: [
        {
            label: "Smooth Finish" , 
            value: "smooth" , 
            description: undefined , 
            price: PRODUCT_PRICES.finish.smooth
        } , 
        {
            label: "Textured Finish" , 
            value: "textured" , 
            description: "Soft Grippy texture" , 
            price: PRODUCT_PRICES.finish.textured
        } , 
    ]
} as const
