// These component runs on the server and only html is sent back to client.

import { db } from "@/db";
import { notFound } from "next/navigation"
import DesignConfigurator from "./DesignConfigurator";

interface PageProps {
  searchParams : {
    [key: string]: string | string[] | undefined
  }
}

export default async function Page({searchParams}: PageProps) {

  const {id} = searchParams

    // make the db call

  if(!id || typeof id !== "string") {
    return notFound();
  }

  const configuration = await db.configuration?.findUnique({
    where: {
      id
    }
  })

  if(!configuration) {
    return notFound()
  }

  const {imageUrl, width , height} = configuration



  return (
    <DesignConfigurator
    configId={configuration.id}
    imageDimensions={{width , height}}
    imageUrl={imageUrl}
    
    />
  )
}
