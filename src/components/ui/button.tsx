import * as React from "react"

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline' | 'ghost'
  size?: 'default' | 'sm' | 'lg'
}

export function Button({
  className,
  variant = 'default',
  size = 'default',
  ...props
}: ButtonProps) {
  return (
    <button
      className={`
        inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring
        disabled:pointer-events-none disabled:opacity-50
        ${variant === 'default' ? 'bg-primary text-primary-foreground hover:bg-primary/90' : ''}
        ${variant === 'outline' ? 'border border-input bg-background hover:bg-accent hover:text-accent-foreground' : ''}
        ${variant === 'ghost' ? 'hover:bg-accent hover:text-accent-foreground' : ''}
        ${size === 'default' ? 'h-10 px-4 py-2' : ''}
        ${size === 'sm' ? 'h-9 rounded-md px-3' : ''}
        ${size === 'lg' ? 'h-11 rounded-md px-8' : ''}
        ${className}`}
      {...props}
    />
  )
} 