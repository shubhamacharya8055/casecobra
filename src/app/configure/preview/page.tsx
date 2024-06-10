import { db } from '@/db'
import { notFound } from 'next/navigation'
import React from 'react'
import DesignPreview from './DesignPreview'

type SearchParamType = {
    searchParams : {
        [key: string] : string | string[] | undefined
    }
    
}

export default async function Page({searchParams} : SearchParamType ) {

    const {id} = searchParams

    if(!id || typeof id !== "string") {
        notFound()
    }

    const configuration = await db.configuration.findUnique({
        where:  {
            id
        } 
    })

    if(!configuration) {
        notFound()
    }


  return (
    <DesignPreview 
    configuration = {configuration}
    
    />
  )
}
