// inquirySchema.ts
import z from 'zod';

export const inquirySchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email format").min(1, "Email is required"),
  message: z.string().min(1, "Message is required"),
});

export type InquiryFormData = z.infer<typeof inquirySchema>;

export const LoginSchema = z.object({
  user_email: z.string().email("Invalid email format").min(1, "Email is required"),
  user_password: z.string().min(1, "Password is required")
})

export type LoginFormData = z.infer<typeof LoginSchema>;