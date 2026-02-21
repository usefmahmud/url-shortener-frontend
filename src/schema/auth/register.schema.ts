import z from 'zod';

export const registerSchema = z
  .object({
    firstName: z
      .string('First name is required')
      .min(3, 'First name must be at least 3 characters'),
    lastName: z
      .string('Last name is required')
      .min(3, 'Last name must be at least 3 characters'),
    email: z.email('Invalid email address'),
    password: z
      .string('Password is required')
      .min(8, 'Password must be at least 8 characters')
      .regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
      .regex(/[a-z]/, 'Password must contain at least one lowercase letter')
      .regex(/[0-9]/, 'Password must contain at least one digit')
      .regex(
        /[^A-Za-z0-9]/,
        'Password must contain at least one special character'
      ),
    confirmPassword: z.string('Confirm password is required'),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  });

export type RegisterFormData = z.infer<typeof registerSchema>;
