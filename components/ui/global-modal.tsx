"use client"

import React, { useState } from "react"
import * as Dialog from "@radix-ui/react-dialog"
import { motion, AnimatePresence } from "framer-motion"
import { useModal } from "@/context/modal-context"
import { X, CheckCircle2, AlertCircle, Info, AlertTriangle } from "lucide-react"
import { Button } from "./button"
import { cn } from "@/lib/utils"

export function GlobalModal() {
    const { isOpen, type, options, closeModal } = useModal()
    const [isActionLoading, setIsActionLoading] = useState(false)

    if (!type || !options) return null

    const handleConfirm = async () => {
        if (options.onConfirm) {
            setIsActionLoading(true)
            try {
                await options.onConfirm()
                closeModal()
            } catch (error) {
                console.error("Action failed:", error)
            } finally {
                setIsActionLoading(false)
            }
        } else {
            closeModal()
        }
    }

    const icons = {
        success: <CheckCircle2 className="w-12 h-12 text-emerald-500" />,
        error: <AlertCircle className="w-12 h-12 text-red-500" />,
        info: <Info className="w-12 h-12 text-blue-500" />,
        confirm: <AlertTriangle className="w-12 h-12 text-amber-500" />,
        form: null,
    }

    return (
        <Dialog.Root open={isOpen} onOpenChange={(open) => !open && closeModal()}>
            <AnimatePresence>
                {isOpen && (
                    <Dialog.Portal forceMount>
                        <Dialog.Overlay asChild>
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
                            />
                        </Dialog.Overlay>
                        <Dialog.Content asChild>
                            <div className="fixed inset-0 flex items-center justify-center z-[101] p-4">
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                                    animate={{ opacity: 1, scale: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 0.9, y: 20 }}
                                    transition={{ type: "spring", duration: 0.5 }}
                                    className="bg-slate-900 border border-slate-800 rounded-2xl w-full max-w-md overflow-hidden shadow-2xl relative"
                                >
                                    <div className="p-6">
                                        <Dialog.Close asChild>
                                            <button
                                                className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors"
                                                aria-label="Close"
                                            >
                                                <X className="w-5 h-5" />
                                            </button>
                                        </Dialog.Close>

                                        <div className="flex flex-col items-center text-center space-y-4">
                                            {type !== "form" && (
                                                <motion.div
                                                    initial={{ scale: 0.5, opacity: 0 }}
                                                    animate={{ scale: 1, opacity: 1 }}
                                                    transition={{ delay: 0.2 }}
                                                >
                                                    {icons[type]}
                                                </motion.div>
                                            )}

                                            <Dialog.Title className="text-2xl font-semibold text-white">
                                                {options.title}
                                            </Dialog.Title>

                                            {options.description && (
                                                <Dialog.Description className="text-slate-400 text-sm leading-relaxed">
                                                    {options.description}
                                                </Dialog.Description>
                                            )}

                                            {options.content && (
                                                <div className="w-full mt-4">
                                                    {options.content}
                                                </div>
                                            )}

                                            <div className="flex gap-3 w-full mt-6">
                                                {type === "confirm" ? (
                                                    <>
                                                        <Button
                                                            variant="outline"
                                                            className="flex-1"
                                                            onClick={() => {
                                                                options.onCancel?.()
                                                                closeModal()
                                                            }}
                                                        >
                                                            {options.cancelLabel || "Cancel"}
                                                        </Button>
                                                        <Button
                                                            variant={options.variant === "destructive" ? "destructive" : "default"}
                                                            className="flex-1"
                                                            onClick={handleConfirm}
                                                            disabled={isActionLoading}
                                                        >
                                                            {isActionLoading ? "Processing..." : (options.confirmLabel || "Confirm")}
                                                        </Button>
                                                    </>
                                                ) : (
                                                    <Button
                                                        className="w-full bg-slate-800 hover:bg-slate-700 text-white"
                                                        onClick={closeModal}
                                                    >
                                                        Close
                                                    </Button>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </Dialog.Content>
                    </Dialog.Portal>
                )}
            </AnimatePresence>
        </Dialog.Root>
    )
}
