'use client'
interface ButtonProps {
  children: React.ReactNode
  onClick?: () => void
  disabled?: boolean
  variant?: 'primary' | 'secondary' | 'outline'
  className?: string
  type?: 'button' | 'submit' | 'reset'
}
export const Button = ({
  children,
  onClick,
  type = 'button',
  disabled,
  variant = 'primary',
}: ButtonProps) => {
  const styles =
    variant === 'primary'
      ? 'bg-blue-600 border border-blue-600 hover:bg-blue-700 hover:border-blue-700'
      : 'bg-transparent border border-gray-600 hover:bg-white/5 hover:border-gray-600'

  return (
    <button
      disabled={disabled}
      type={type}
      onClick={onClick}
      className={`${styles} w-full py-2 rounded text-white font-semibold transition-colors disabled:opacity-50 hover:cursor-pointer focus:outline-none active:scale-95`}
    >
      {children}
    </button>
  )
}
