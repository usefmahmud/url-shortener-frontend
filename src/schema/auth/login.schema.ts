import { z } from 'zod';

export const loginSchema = z.object({
  email: z.email({
    error: 'Invalid email address',
  }),
  password: z.string().min(8),
});

export type LoginFormData = z.infer<typeof loginSchema>;
