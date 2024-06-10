import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

interface PhoneProps extends HTMLAttributes<HTMLDivElement> {
    imgSrc: string , 
    darkMode?: boolean
}

export default function Phone({imgSrc ,className , darkMode = false, ...props}: PhoneProps) {
  return (
    <div className={cn("relative pointer-events-none z-50 overflow-hidden", className)}
    {...props}
    >
        <img src={darkMode ? "/phone-template-dark-edges.png" : "/phone-template-white-edges.png"} alt="Phone Case" className="pointer-events-none z-50 select-none" />

        <div className="inset-0 -z-10 absolute">
            <img className="object-cover min-w-full min-h-full" src={imgSrc} alt="Overlaying phone image" />
        </div>
    </div>
  )
}
