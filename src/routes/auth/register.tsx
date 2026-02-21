import RegisterForm from '@/components/features/auth/register-form';
import type { RegisterFormData } from '@/schema/auth/register.schema';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/auth/register')({
  component: RouteComponent,
});

function RouteComponent() {
  const handleRegister = async (data: RegisterFormData) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log(data);
  }

  return (
    <div className='flex h-screen'>
      <div className='flex-1 flex items-center justify-center px-2'>
        <div className='flex flex-col w-full max-w-105'>
          <div className='mb-6'>
            <h1 className='text-2xl font-bold'>Create a Free Account</h1>
            <p className='text-gray-400'>
              Join Us - Shorten Smarter, Share Faster, Track Better.
            </p>
          </div>
          <RegisterForm onRegister={handleRegister} />
        </div>
      </div>
      <div className='flex-1 bg-gray-800 hidden md:block'>first</div>
    </div>
  );
}
