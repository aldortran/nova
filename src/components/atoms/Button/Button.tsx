export declare type ButtonProps = {
  label: string
  onClick: () => void
  disabled?: boolean
}

export const Button = ({label, onClick, disabled}: ButtonProps) => {
  return (
    <button
      type="button"
      className="inline-flex items-center rounded border border-transparent bg-indigo-600 px-2.5 py-1.5 text-xs font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  )
}
