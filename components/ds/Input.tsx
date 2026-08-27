import { forwardRef, type InputHTMLAttributes } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
}

export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { label, error, ...rest },
  ref,
) {
  return (
    <label className="flex flex-col gap-2">
      {label && <span className="loop-eyebrow !text-ink-900">{label}</span>}
      <input
        ref={ref}
        {...rest}
        className="h-12 rounded-full border-2 border-ink-900 bg-paper-000 px-5 text-body-sm text-ink-900 shadow-sticker-sm outline-none transition-all duration-fast ease-spring placeholder:text-ink-400 focus:-translate-x-0.5 focus:-translate-y-0.5 focus:shadow-sticker"
        style={error ? { borderColor: '#FF5A2B' } : undefined}
      />
      {error && <span className="text-caption text-clay-500">{error}</span>}
    </label>
  )
})
