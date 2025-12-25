"use client"

import { ModalOptions, ModalType } from "@/context/modal-context"

export class AppError extends Error {
    constructor(
        public message: string,
        public title: string = "Something went wrong",
        public type: ModalType = "error"
    ) {
        super(message)
        this.name = "AppError"
    }
}

export const handleError = (error: unknown, openModal: (type: ModalType, options: ModalOptions) => void) => {
    console.error("Caught Error:", error)

    let title = "An unexpected error occurred"
    let message = "Please try again later. If the problem persists, feel free to contact me directly."
    let type: ModalType = "error"

    if (error instanceof AppError) {
        title = error.title
        message = error.message
        type = error.type
    } else if (error instanceof Error) {
        // Specific error mapping can go here
        if (error.message.includes("Network Error") || error.message.includes("fetch")) {
            title = "Connection Error"
            message = "It seems you're offline or the server is unreachable. Please check your internet connection."
        }
        // message = error.message // You might want to hide internal error messages in production
    }

    openModal(type, {
        title,
        description: message,
    })
}
