import { cn } from '@/lib/utils'
import React, { FC } from 'react'


interface MaxWidthWrapperProps {
  className?: string,
  children: React.ReactNode
}

const MaxWidthWrapper: FC<MaxWidthWrapperProps> = ({className, children}) => {
  return <div className={cn("w-full h-full max-w-screen-xl mx-auto px-3 md:px-10 lg:px-20 xl:px-40", className)}>
    {children}
    </div>
}

export default MaxWidthWrapper