# Centralized Modal & Error Handling System

This project uses a unified modal and error management system built with **React Context**, **Radix UI Dialog**, and **Framer Motion**.

## 1. Setup

The system is already integrated into the root layout (`app/layout.tsx`):
- `ModalProvider`: Manages the global state.
- `GlobalModal`: The single component that renders active modals.

## 2. Usage (useModal Hook)

To open a modal from any component:

```tsx
import { useModal } from "@/context/modal-context"

export default function MyComponent() {
  const { openModal, closeModal } = useModal()

  const handleAction = () => {
    openModal("confirm", {
      title: "Are you sure?",
      description: "This action cannot be undone.",
      confirmLabel: "Delete",
      cancelLabel: "Cancel",
      variant: "destructive",
      onConfirm: async () => {
        // Perform async action
        await deleteItem()
      },
    })
  }

  return <button onClick={handleAction}>Delete Item</button>
}
```

## 3. Modal Types

- `"success"`: Use for positive feedback (e.g., "Message Sent").
- `"error"`: Use for failures.
- `"info"`: Use for general information or "Coming Soon" alerts.
- `"confirm"`: Use for destructive or irreversible actions.
- `"form"`: Use for custom content without standard icons.

## 4. Centralized Error Handling

Use the `handleError` utility to catch and display errors consistently:

```tsx
import { handleError } from "@/lib/error-handler"
import { useModal } from "@/context/modal-context"

const { openModal } = useModal()

try {
  await someCriticalAction()
} catch (error) {
  handleError(error, openModal)
}
```

## 5. Accessibility & Design

- **Focus Trap**: Handled by Radix UI Dialog.
- **Keyboard Navigation**: `Esc` to close, `Enter` to confirm (on focused button).
- **Animations**: Fluid spring animations via Framer Motion.
- **Theme Aware**: Supports both Light and Dark modes.
