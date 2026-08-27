import { forwardRef, type TextareaHTMLAttributes } from 'react'

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string
  error?: string
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(function Textarea(
  { label, error, rows = 5, ...rest },
  ref,
) {
  return (
    <label className="flex flex-col gap-2">
      {label && <span className="loop-eyebrow !text-ink-900">{label}</span>}
      <textarea
        ref={ref}
        rows={rows}
        {...rest}
        className="resize-y rounded-card border-2 border-ink-900 bg-paper-000 px-5 py-4 text-body-sm text-ink-900 shadow-sticker-sm outline-none transition-all duration-fast ease-spring placeholder:text-ink-400 focus:-translate-x-0.5 focus:-translate-y-0.5 focus:shadow-sticker"
        style={error ? { borderColor: '#FF5A2B' } : undefined}
      />
      {error && <span className="text-caption text-clay-500">{error}</span>}
    </label>
  )
})
