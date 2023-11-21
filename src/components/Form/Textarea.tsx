import { ComponentProps } from 'react'

type TextareaProps = ComponentProps<'textarea'>

export function Textarea({ ...props }: TextareaProps) {
  return (
    <textarea
      id="bio"
      className="min-h-[120px] w-full resize-y rounded-lg border border-zinc-300 px-3 py-2 shadow-sm dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100 dark:placeholder-zinc-100 dark:focus:border-violet-500 dark:focus:ring-violet-500/10"
      {...props}
    />
  )
}
