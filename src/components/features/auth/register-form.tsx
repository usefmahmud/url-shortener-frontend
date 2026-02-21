import PasswordInput from '@/components/shared/password-input';
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
import {
  registerSchema,
  type RegisterFormData,
} from '@/schema/auth/register.schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { Loader2 } from 'lucide-react';
import { useForm } from 'react-hook-form';

interface RegisterFormProps {
  onRegister: (data: RegisterFormData) => Promise<void>;
}

const RegisterForm = ({ onRegister }: RegisterFormProps) => {
  const form = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
  });

  return (
    <Form {...form}>
      <form
        className='flex flex-col gap-10'
        onSubmit={form.handleSubmit(onRegister)}
      >
        <div className='flex flex-col gap-6'>
          <div className='flex gap-4'>
            <FormField
              control={form.control}
              name='firstName'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>First Name</FormLabel>
                  <FormControl>
                    <Input placeholder='Enter your First Name..' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name='lastName'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Last Name</FormLabel>
                  <FormControl>
                    <Input placeholder='Enter your Last Name..' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
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

          <div className='flex gap-4'>
            <FormField
              control={form.control}
              name='password'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <PasswordInput placeholder='Enter Password..' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name='confirmPassword'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Confirm Password</FormLabel>
                  <FormControl>
                    <PasswordInput placeholder='Enter Password..' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>

        <Button
          className='w-full font-bold'
          disabled={form.formState.isSubmitting}
        >
          Create Account
          {form.formState.isSubmitting && <Loader2 className='animate-spin' />}
        </Button>
      </form>
    </Form>
  );
};

export default RegisterForm;
