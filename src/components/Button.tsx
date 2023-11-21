import { ComponentProps } from 'react'
import { tv, VariantProps } from 'tailwind-variants'

const button = tv({
  base: [
    'rounded-lg px-4 py-2 text-sm font-semibold shadow-sm outline-none',
    'focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-2',
    'active:opacity-80',
  ],

  variants: {
    variant: {
      primary: 'bg-violet-600 text-white hover:bg-violet-700',
      ghost:
        '<dark:texzic4></dark:texzic4> ml-auto rounded-md px-2 text-zinc-500 shadow-none hover:bg-zinc-50 dark:text-zinc-400 dark:hover:bg-zinc-800',
      ouline: 'border border-zinc-300 text-zinc-700 hover:bg-zinc-50',
    },
  },
})

type ButtonProps = ComponentProps<'button'> & VariantProps<typeof button>

export function Button({ variant, className, ...props }: ButtonProps) {
  return <button {...props} className={button({ variant, className })} />
}
