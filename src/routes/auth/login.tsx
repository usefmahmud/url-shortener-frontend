import LoginForm from '@/components/features/auth/login-form';
import type { LoginFormData } from '@/schema/auth/login.schema';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/auth/login')({
  component: RouteComponent,
});

function RouteComponent() {
  const handleLogin = async (data: LoginFormData) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log(data);
  };

  return (
    <div className='flex h-screen'>
      <div className='flex-1 bg-gray-800 hidden md:block'>first</div>
      <div className='flex-1 flex items-center justify-center px-2'>
        <div className='flex flex-col w-full max-w-95'>
          <div className='mb-6'>
            <h1 className='text-2xl font-bold'>Welcome Back</h1>
            <p className='text-gray-400'>
              Join us again to continue your journey.
            </p>
          </div>
          <LoginForm onLogin={handleLogin} />
        </div>
      </div>
    </div>
  );
}
