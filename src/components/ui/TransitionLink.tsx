"use client"
import Link from "next/link"
import React from "react"
import { useTransition } from "@/context/TransitionContext"

interface TransitionLinkProps extends React.ComponentProps<typeof Link> {
  href: string
  children: React.ReactNode
}

export const TransitionLink = ({ href, children, ...props }: TransitionLinkProps) => {
  const { navigate } = useTransition()

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault()
    if (props.onClick) {
      props.onClick(e)
    }
    navigate(href)
  }

  return (
    <Link href={href} {...props} onClick={handleClick}>
      {children}
    </Link>
  )
}
