import { createUploadthing, type FileRouter } from "uploadthing/next";
import { UploadThingError } from "uploadthing/server";
import sharp from "sharp"
import {z} from "zod"
import { db } from "@/db";
 
const f = createUploadthing();
  
export const ourFileRouter = {
  imageUploader: f({ image: { maxFileSize: "4MB" } })
  .input(z.object({
    configId: z.string().optional()
  }))
    .middleware(async ({ input }) => {
      return {input}
    })
    .onUploadComplete(async ({ metadata, file }) => {
      const {configId} = metadata.input

      // fetch the image
      const res = await fetch(file.url)
      // convert it into buffer
      const buffer = await res.arrayBuffer();
      // grab the image metadata
      const imgMetaData = await sharp(buffer).metadata()
      const {width, height} = imgMetaData

      // in step 1 there will be no config id , hence we need to create it
      if(!configId) {
        const configuration = await db.configuration.create({
          data  : {
            // file.url will be unCroppedImage in Step 1
            imageUrl: file.url , 
            height: height || 500 , 
            width: width || 500 , 
          }
        })

        return {configId : configuration.id}
      } else {
        // step 2 
        const updatedConfiguration = await db.configuration.update({
          where: {
            id: configId 
          },
          data: {
            // Im step 2 , the file.url will be croppedImage
            croppedImageUrl: file.url,
          }
        })

        return { configId : updatedConfiguration.id}
      }
    }),
} satisfies FileRouter;
 
export type OurFileRouter = typeof ourFileRouter;