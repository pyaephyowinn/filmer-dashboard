import { z } from 'zod';

export const loginSchema = z.object({
  email: z.string(),
  password: z.string().min(8, 'Password must be at least 8 characters long'),
});

export const createFilmSchema = z.object({
  filmUrl: z.string(),
  categoryId: z.string().optional(),
});

export const changePasswordSchema = z.object({
  password: z.string().min(8, 'Password must be at least 8 characters long'),
  newPassword: z.string().min(8, 'Password must be at least 8 characters long'),
  confirmPassword: z
    .string()
    .min(8, 'Password must be at least 8 characters long'),
});
