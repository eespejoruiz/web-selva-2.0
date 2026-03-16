"use client"

import React, { useState, useRef } from "react"
import { SERVICES_LIST } from "@/lib/data"
import { TransitionLink } from "@/components/ui/TransitionLink"
import { ArrowLeft, ArrowRight, Check, RefreshCw } from "lucide-react"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"

// Define the questions
const QUESTIONS = [
  {
    id: "goal",
    question: "¿Cuál es tu objetivo principal?",
    options: [
      { label: "Aumentar Ventas o Leads", value: "sales" },
      { label: "Reconocimiento de Marca", value: "awareness" },
      { label: "Fidelización de Clientes", value: "loyalty" },
      { label: "Lanzamiento de Producto", value: "launch" },
    ],
  },
  {
    id: "presence",
    question: "¿Cuál es tu situación digital actual?",
    options: [
      { label: "Tengo web y redes activas", value: "full" },
      { label: "Solo redes sociales", value: "social" },
      { label: "Solo sitio web", value: "web" },
      { label: "No tengo presencia digital", value: "none" },
    ],
  },
  {
    id: "budget",
    question: "¿Cuál es tu presupuesto mensual estimado?",
    options: [
      { label: "Inicial (< $1,000)", value: "low" },
      { label: "Crecimiento ($1,000 - $3,000)", value: "medium" },
      { label: "Expansión ($3,000 - $10,000)", value: "high" },
      { label: "Corporativo (> $10,000)", value: "corp" },
    ],
  },
  {
    id: "type",
    question: "¿Qué tipo de negocio tienes?",
    options: [
      { label: "B2B (Vendo a empresas)", value: "b2b" },
      { label: "B2C (Vendo a consumidor final)", value: "b2c" },
      { label: "E-commerce", value: "ecommerce" },
      { label: "Servicios Profesionales", value: "services" },
    ],
  },
  {
    id: "team",
    question: "¿Cuentas con equipo de marketing?",
    options: [
      { label: "Sí, tengo un equipo interno", value: "internal" },
      { label: "Lo hago todo yo", value: "solo" },
      { label: "No, necesito delegar todo", value: "outsource" },
      { label: "Tengo proveedores externos", value: "external" },
    ],
  },
]

export function SimulatorSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const questionRef = useRef<HTMLDivElement>(null)
  const resultsRef = useRef<HTMLDivElement>(null)
  const [currentStep, setCurrentStep] = useState(0)
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [resultMix, setResultMix] = useState<string[]>([])
  const [isFinished, setIsFinished] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)

  // Handle option selection
  const handleSelect = (value: string) => {
    if (isAnimating) return
    setIsAnimating(true)

    // Animate out
    gsap.to(questionRef.current, {
      opacity: 0,
      x: -20,
      duration: 0.3,
      onComplete: () => {
        // Update state
        const newAnswers = { ...answers, [QUESTIONS[currentStep].id]: value }
        setAnswers(newAnswers)
        
        if (currentStep < QUESTIONS.length - 1) {
          setCurrentStep((prev) => prev + 1)
          // Animation in will be handled by useGSAP dependency on currentStep
        } else {
          calculateResult(newAnswers)
          setIsFinished(true)
        }
      },
    })
  }

  // Animate in when step changes
  useGSAP(() => {
    if (!isFinished && questionRef.current) {
      gsap.fromTo(
        questionRef.current,
        { opacity: 0, x: 20 },
        { 
          opacity: 1, 
          x: 0, 
          duration: 0.5, 
          ease: "power2.out",
          onComplete: () => setIsAnimating(false)
        }
      )
    } else if (isFinished && resultsRef.current) {
        gsap.fromTo(
            resultsRef.current,
            { opacity: 0, y: 20 },
            {
                opacity: 1,
                y: 0,
                duration: 0.7,
                ease: "power2.out"
            }
        )
        setIsAnimating(false)
    } else {
        setIsAnimating(false)
    }
  }, { dependencies: [currentStep, isFinished], scope: containerRef })

  // Calculate the marketing mix
  const calculateResult = (finalAnswers: Record<string, string>) => {
    const mix = new Set<string>()

    // Core logic based on answers
    // 1. Goal
    if (finalAnswers.goal === "sales") {
      mix.add("sem")
      mix.add("seo")
    } else if (finalAnswers.goal === "awareness") {
      mix.add("branding")
      mix.add("rrdd")
      mix.add("audiovisuales")
    } else if (finalAnswers.goal === "loyalty") {
      mix.add("email")
      mix.add("rrdd")
    } else if (finalAnswers.goal === "launch") {
      mix.add("sem")
      mix.add("rrdd")
      mix.add("branding")
    }

    // 2. Presence
    if (finalAnswers.presence === "none" || finalAnswers.presence === "social") {
      mix.add("web")
    }
    if (finalAnswers.presence === "web" || finalAnswers.presence === "none") {
      mix.add("rrdd")
    }

    // 3. Budget (Add premium services for higher budgets)
    if (finalAnswers.budget === "high" || finalAnswers.budget === "corp") {
      mix.add("data")
      mix.add("geo")
    }

    // 4. Type
    if (finalAnswers.type === "ecommerce") {
      mix.add("marketplaces")
      mix.add("sem")
    } else if (finalAnswers.type === "b2b") {
      mix.add("email")
      mix.add("seo")
    }

    // 5. Team (Support level)
    if (finalAnswers.team === "outsource") {
      // Ensure we cover content creation
      mix.add("audiovisuales")
      mix.add("rrdd")
    }

    // Convert Set to Array and filter by existing services
    const validServices = Array.from(mix).filter((slug) =>
      SERVICES_LIST.some((s) => s.slug === slug)
    )
    
    // Ensure at least 3 services are recommended if possible
    if (validServices.length < 3) {
        if (!validServices.includes('seo')) validServices.push('seo')
        if (!validServices.includes('sem')) validServices.push('sem')
        // If still less than 3, add branding
        if (validServices.length < 3 && !validServices.includes('branding')) validServices.push('branding')
    }

    setResultMix(validServices)
  }

  // Get service details for the result
  const recommendedServices = SERVICES_LIST.filter((s) => resultMix.includes(s.slug))

  // Calculate progress
  const progress = ((currentStep + (isFinished ? 1 : 0)) / QUESTIONS.length) * 100

  return (
    <div ref={containerRef} className="min-h-screen bg-neutral-900 text-white flex flex-col relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[40vw] h-[40vw] bg-blue-500/5 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3 pointer-events-none" />

      {/* Header / Progress */}
      <div className="fixed top-0 left-0 w-full z-50">
        <div className="w-full h-1 bg-white/10">
          <div
            className="h-full bg-primary transition-all duration-500 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
            <TransitionLink href="/" className="text-sm text-neutral-400 hover:text-white transition-colors flex items-center gap-2">
                <ArrowLeft className="w-4 h-4" /> Volver al inicio
            </TransitionLink>
            <div className="text-sm font-mono text-primary/80">
                {isFinished ? "Completado" : `Paso ${currentStep + 1}/${QUESTIONS.length}`}
            </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col justify-center items-center px-4 md:px-8 py-24 relative z-10 w-full max-w-4xl mx-auto">
        
        {!isFinished ? (
          <div ref={questionRef} className="w-full max-w-2xl opacity-0">
            <h2 className="text-3xl md:text-5xl font-abroad font-bold mb-12 leading-tight tracking-tight text-center">
              {QUESTIONS[currentStep].question}
            </h2>

            <div className="grid grid-cols-1 gap-4">
              {QUESTIONS[currentStep].options.map((option) => (
                <button
                  key={option.value}
                  onClick={() => handleSelect(option.value)}
                  disabled={isAnimating}
                  className="group flex items-center justify-between p-6 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-primary/50 transition-all duration-300 text-left disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span className="text-lg md:text-xl font-light">{option.label}</span>
                  <ArrowRight className="w-5 h-5 text-neutral-500 group-hover:text-primary transition-colors transform group-hover:translate-x-1" />
                </button>
              ))}
            </div>
            
            {currentStep > 0 && (
                <button 
                    onClick={() => {
                        if (isAnimating) return
                        setIsAnimating(true)
                        gsap.to(questionRef.current, {
                            opacity: 0,
                            x: 20,
                            duration: 0.3,
                            onComplete: () => {
                                setCurrentStep(prev => prev - 1)
                                // Animation in handled by useGSAP
                            }
                        })
                    }}
                    disabled={isAnimating}
                    className="mt-8 text-neutral-500 hover:text-white text-sm flex items-center gap-2 mx-auto transition-colors disabled:opacity-50"
                >
                    <ArrowLeft className="w-3 h-3" /> Volver a la anterior
                </button>
            )}
          </div>
        ) : (
          <div ref={resultsRef} className="w-full opacity-0">
            <div className="text-center mb-12">
              <span className="text-primary font-mono text-sm uppercase tracking-widest mb-4 block">Tu resultado</span>
              <h2 className="text-4xl md:text-6xl font-abroad font-bold mb-6">Tu Mix de Marketing Ideal</h2>
              <p className="text-xl text-neutral-300 max-w-2xl mx-auto">
                Basado en tus respuestas, hemos diseñado esta combinación de servicios para alcanzar tus objetivos.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              {recommendedServices.map((service) => (
                <TransitionLink
                  key={service.slug}
                  href={`/servicios/${service.slug}`}
                  className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-primary/30 transition-all group flex flex-col h-full"
                >
                  <h3 className="text-xl font-abroad font-bold mb-2 text-white group-hover:text-primary transition-colors">{service.title}</h3>
                  <p className="text-sm text-neutral-400 mb-4 line-clamp-3 flex-grow">{service.description}</p>
                  <ul className="space-y-2 mt-auto">
                    {service.includes.slice(0, 2).map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-neutral-300">
                            <Check className="w-3 h-3 text-primary mt-0.5 shrink-0" />
                            {item}
                        </li>
                    ))}
                  </ul>
                </TransitionLink>
              ))}
            </div>

            <div className="flex flex-col items-center gap-6">
              <TransitionLink
                href={`/contacto?subject=Solicitud de cotización Mix: ${recommendedServices.map(s => s.title).join(', ')}`}
                className="px-8 py-4 bg-primary text-neutral-900 font-bold rounded-full text-lg hover:bg-white hover:scale-105 transition-all shadow-[0_0_20px_rgba(59,210,128,0.3)]"
              >
                Solicitar Cotización de este Mix
              </TransitionLink>
              
              <button
                onClick={() => {
                    setIsAnimating(true) // Prevent clicks
                    setAnswers({})
                    setCurrentStep(0)
                    setIsFinished(false)
                    setResultMix([])
                    // Animation reset handled by state change -> render -> useGSAP
                }}
                className="text-neutral-400 hover:text-white text-sm flex items-center gap-2 underline underline-offset-4 transition-colors"
              >
                <RefreshCw className="w-3 h-3" /> Volver a empezar
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
