export function Button({ children, className = "", variant = "default", ...props }) {
  const baseStyle = "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none"
  const variants = {
    default: "bg-blue-600 text-white hover:bg-blue-700",
    outline: "border border-gray-300 hover:bg-gray-100 text-gray-800",
    ghost: "bg-transparent text-gray-800 hover:bg-gray-100"
  }

  const finalClass = `${baseStyle} ${variants[variant] || ""} ${className}`

  return (
    <button className={finalClass} {...props}>
      {children}
    </button>
  )
}
