import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-60 ring-offset-background',
  {
    variants: {
      variant: {
        primary: 'bg-accent text-accent-foreground shadow-lg shadow-accent/30 hover:bg-accent/90',
        subtle: 'bg-muted text-foreground hover:bg-muted/80',
        ghost: 'bg-transparent text-foreground hover:bg-muted'
      },
      size: {
        default: 'h-11 px-6',
        lg: 'h-12 px-7 text-base',
        sm: 'h-9 px-4 text-sm'
      }
    },
    defaultVariants: {
      variant: 'primary',
      size: 'default'
    }
  }
);

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  };

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { className, variant, size, asChild = false, ...props }: ButtonProps,
  ref: React.ForwardedRef<HTMLButtonElement>
) {
  const Comp = asChild ? Slot : 'button';
  return (
    <Comp className={cn(buttonVariants({ variant, size }), className)} ref={ref} {...props} />
  );
});

Button.displayName = 'Button';
