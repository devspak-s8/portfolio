"use client"

import React, { createContext, useContext, useState, useCallback, ReactNode } from "react"

export type ModalType = "success" | "error" | "info" | "confirm" | "form"

export interface ModalOptions {
    title: string
    description?: string
    content?: ReactNode
    confirmLabel?: string
    cancelLabel?: string
    onConfirm?: () => void | Promise<void>
    onCancel?: () => void
    variant?: "default" | "destructive"
}

interface ModalContextType {
    isOpen: boolean
    type: ModalType | null
    options: ModalOptions | null
    openModal: (type: ModalType, options: ModalOptions) => void
    closeModal: () => void
}

const ModalContext = createContext<ModalContextType | undefined>(undefined)

export function ModalProvider({ children }: { children: ReactNode }) {
    const [isOpen, setIsOpen] = useState(false)
    const [type, setType] = useState<ModalType | null>(null)
    const [options, setOptions] = useState<ModalOptions | null>(null)

    const openModal = useCallback((type: ModalType, options: ModalOptions) => {
        setType(type)
        setOptions(options)
        setIsOpen(true)
    }, [])

    const closeModal = useCallback(() => {
        setIsOpen(false)
        // Delay clearing type/options to allow exit animation
        setTimeout(() => {
            setType(null)
            setOptions(null)
        }, 300)
    }, [])

    return (
        <ModalContext.Provider value={{ isOpen, type, options, openModal, closeModal }}>
            {children}
        </ModalContext.Provider>
    )
}

export function useModal() {
    const context = useContext(ModalContext)
    if (context === undefined) {
        throw new Error("useModal must be used within a ModalProvider")
    }
    return context
}
