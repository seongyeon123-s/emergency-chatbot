import * as React from "react"
import { Dialog as HeadlessDialog, DialogPanel, Transition, TransitionChild } from "@headlessui/react"

export function Dialog({ open, onOpenChange, children }) {
  return (
    <Transition show={open}>
      <HeadlessDialog onClose={onOpenChange} className="relative z-50">
        <div className="fixed inset-0 bg-black/50" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <TransitionChild
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <DialogPanel className="w-full max-w-md bg-white p-6 rounded-lg shadow-lg">
              {children}
            </DialogPanel>
          </TransitionChild>
        </div>
      </HeadlessDialog>
    </Transition>
  )
}

export function DialogContent({ children }) {
  return <div className="mt-4">{children}</div>
}

export function DialogHeader({ children }) {
  return <div className="mb-2">{children}</div>
}

export function DialogTitle({ children }) {
  return <h2 className="text-xl font-semibold text-gray-900">{children}</h2>
}
