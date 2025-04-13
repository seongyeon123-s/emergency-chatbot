import { useState } from "react"

export function Switch({ defaultChecked = false, onChange }) {
  const [checked, setChecked] = useState(defaultChecked)

  const toggle = () => {
    setChecked(!checked)
    if (onChange) onChange(!checked)
  }

  return (
    <button
      onClick={toggle}
      className={`w-12 h-6 flex items-center rounded-full p-1 duration-300 ease-in-out 
        ${checked ? "bg-blue-600" : "bg-gray-300"}`}
    >
      <div
        className={`bg-white w-4 h-4 rounded-full shadow-md transform duration-300 ease-in-out 
          ${checked ? "translate-x-6" : "translate-x-0"}`}
      />
    </button>
  )
}
