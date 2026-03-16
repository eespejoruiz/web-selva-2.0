"use client"

import React, { createContext, useContext, useRef, useState, useEffect } from "react"
import gsap from "gsap"
import { useRouter, usePathname } from "next/navigation"

interface TransitionContextType {
  navigate: (href: string) => void
}

const TransitionContext = createContext<TransitionContextType>({
  navigate: () => {},
})

export const TransitionProvider = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter()
  const pathname = usePathname()
  const overlayRef = useRef<HTMLDivElement>(null)
  const [isAnimating, setIsAnimating] = useState(false)

  // Initial load animation
  useEffect(() => {
    if (overlayRef.current) {
      gsap.to(overlayRef.current, {
        opacity: 0,
        duration: 0.6,
        ease: "power2.out",
        onComplete: () => {
            gsap.set(overlayRef.current, { pointerEvents: "none" })
        }
      })
    }
  }, [])

  // Route change animation (Out)
  useEffect(() => {
    if (overlayRef.current) {
      // When pathname changes, we assume the new page is mounted (or mounting)
      // So we animate the overlay OUT (reveal content)
      gsap.to(overlayRef.current, {
        opacity: 0,
        duration: 0.6,
        ease: "power2.out",
        delay: 0.1, // slight delay to ensure content is ready
        onComplete: () => {
            gsap.set(overlayRef.current, { pointerEvents: "none" })
            setIsAnimating(false)
        }
      })
    }
  }, [pathname])

  const navigate = (href: string) => {
    // Check if it is an anchor link
    if (href.startsWith("/#") || href.startsWith("#")) {
        const id = href.replace(/^\/#?/, "") // Remove /# or #
        const element = document.getElementById(id)
        
        // If element exists on current page, just scroll
        if (element) {
            element.scrollIntoView({ behavior: "smooth" })
            return
        }
        
        // If we are already on home (/) but element not found (maybe not mounted yet?)
        // Or if we are on another page, we need to navigate.
        if (pathname !== "/") {
             if (isAnimating) return
             setIsAnimating(true)
             gsap.set(overlayRef.current, { pointerEvents: "auto" })
             gsap.to(overlayRef.current, {
               opacity: 1,
               duration: 0.4,
               ease: "power2.inOut",
               onComplete: () => {
                 router.push(href)
               }
             })
             return
        }
    }

    if (isAnimating || href === pathname) return
    setIsAnimating(true)
    
    // Animate IN (cover screen)
    gsap.set(overlayRef.current, { pointerEvents: "auto" })
    gsap.to(overlayRef.current, {
      opacity: 1,
      duration: 0.4,
      ease: "power2.inOut",
      onComplete: () => {
        router.push(href)
      }
    })
  }

  return (
    <TransitionContext.Provider value={{ navigate }}>
      {/* Overlay Layer */}
      <div 
        ref={overlayRef} 
        className="fixed inset-0 z-[9999] bg-neutral-950 pointer-events-auto opacity-100"
      />
      {children}
    </TransitionContext.Provider>
  )
}

export const useTransition = () => useContext(TransitionContext)
