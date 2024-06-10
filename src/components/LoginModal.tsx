import type { Dispatch, SetStateAction } from "react";
import { Dialog, DialogHeader, DialogContent, DialogTitle, DialogDescription } from "./ui/dialog";
import Image from "next/image";
import { LoginLink, RegisterLink } from "@kinde-oss/kinde-auth-nextjs";
import { buttonVariants } from "./ui/button";

type ModalProps = {
    isOpen: boolean
    setIsOpen: Dispatch<SetStateAction<boolean>>
}

export default function LoginModal({isOpen , setIsOpen}: ModalProps) {
  return (
    <Dialog 
    onOpenChange={setIsOpen}
    open = {isOpen}
    >

        <DialogContent className="absolute z-[9999999] ">
                <DialogHeader >
                    <div className="relative mx-auto w-24 h-24 mb-2">
                            <Image 
                            alt="snake"
                            src={"/snake-1.png"}
                            className="object-contain"
                            fill
                            />
                    </div>

                    <DialogTitle className="text-3xl text-center font-bold tracking-tighter text-gray-900">
                        Login to continue
                    </DialogTitle>

                    <DialogDescription
                    className="text-base text-center py-2"
                    >
                        <span className="font-medium text-zinc-900">
                            You Configuration was saved! 
                        </span> {" "}

                        Please Login in / Create an account to complete your purchase
                    </DialogDescription>
                </DialogHeader>


            <div className="grid grid-cols-2 gap-6 divide-x divide-gray-300">
                <LoginLink  className={buttonVariants({
                    variant: "outline"
                })} >
                    Login
                </LoginLink>

                <RegisterLink
                className={buttonVariants({
                    variant: "default"
                })}
                >
                    Sign up
                </RegisterLink>
            </div>

        </DialogContent>

    </Dialog>
  )
}
