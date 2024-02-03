import { z } from 'zod';

export const loginSchema = z.object({
  email: z.string(),
  password: z.string().min(8, 'Password must be at least 8 characters long'),
});

export const createFilmSchema = z.object({
  filmUrl: z.string().min(1, 'Film url is required'),
  categoryId: z.string().optional(),
});

export const createCategorySchema = z.object({
  name: z.string().min(4, 'Name must be at least 4 characters long'),
  description: z.string(),
  imageFile: z.any().optional(),
});

export const changePasswordSchema = z.object({
  password: z.string().min(8, 'Password must be at least 8 characters long'),
  newPassword: z.string().min(8, 'Password must be at least 8 characters long'),
  confirmPassword: z
    .string()
    .min(8, 'Password must be at least 8 characters long'),
});
