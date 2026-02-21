import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { loginSchema, type LoginFormData } from '@/schema/auth/login.schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { Loader2 } from 'lucide-react';
import { useForm } from 'react-hook-form';

interface LoginFormProps {
  onLogin: (data: LoginFormData) => Promise<void>;
}

const LoginForm = ({ onLogin }: LoginFormProps) => {
  const form = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  return (
    <Form {...form}>
      <form
        className='flex flex-col gap-10'
        onSubmit={form.handleSubmit(onLogin)}
      >
        <div className='flex flex-col gap-6'>
          <FormField
            control={form.control}
            name='email'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder='Enter your Email..' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name='password'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input placeholder='Enter Password..' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <Button
          className='w-full font-bold'
          disabled={form.formState.isSubmitting}
        >
          Login
          {form.formState.isSubmitting && <Loader2 className='animate-spin' />}
        </Button>
      </form>
    </Form>
  );
};

export default LoginForm;
