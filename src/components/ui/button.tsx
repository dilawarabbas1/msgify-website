import { forwardRef, type ButtonHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'white' | 'ghost';
  size?: 'default' | 'lg';
  asChild?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'default', ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center gap-2 rounded-[10px] font-semibold text-[15px] cursor-pointer transition-all duration-200 border-none font-sans',
          variant === 'primary' && 'bg-gradient-to-br from-green-500 to-green-600 text-white shadow-[0_4px_14px_rgba(34,197,94,0.4)] hover:shadow-[0_6px_20px_rgba(34,197,94,0.5)] hover:-translate-y-0.5',
          variant === 'outline' && 'bg-transparent border-[1.5px] border-gray-200 text-gray-700 hover:border-green-500 hover:text-green-600',
          variant === 'white' && 'bg-white text-green-700 font-semibold hover:bg-green-50',
          variant === 'ghost' && 'bg-white/15 text-white border border-white/30 hover:bg-white/25',
          size === 'default' && 'px-6 py-2.5',
          size === 'lg' && 'px-8 py-3.5 text-base rounded-xl',
          className,
        )}
        {...props}
      />
    );
  },
);
Button.displayName = 'Button';

export { Button };
