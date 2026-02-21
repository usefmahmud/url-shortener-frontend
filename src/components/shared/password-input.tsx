import { cn } from '@/lib/utils';
import { EyeIcon, EyeOffIcon } from 'lucide-react';
import { useState } from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';

interface PasswordInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const PasswordInput = ({
  className,
  onChange,
  ...props
}: PasswordInputProps) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e);
  };

  return (
    <div className='space-y-1.5'>
      <div className='relative'>
        <Input
          type={showPassword ? 'text' : 'password'}
          className={cn('pe-10', className)}
          {...props}
          onChange={handleChange}
        />
        <Button
          type='button'
          variant='ghost'
          size='icon'
          className='text-muted-foreground hover:text-primary absolute inset-e-2 top-1/2 h-8 w-8 -translate-y-1/2 p-0 focus-visible:ring-0 disabled:opacity-50'
          tabIndex={-1}
          aria-label={showPassword ? 'Hide password' : 'Show password'}
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? (
            <EyeOffIcon className='h-5 w-5' />
          ) : (
            <EyeIcon className='h-5 w-5' />
          )}
        </Button>
      </div>
    </div>
  );
};

export default PasswordInput;
