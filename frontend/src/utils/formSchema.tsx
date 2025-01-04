// inquirySchema.ts
import z from 'zod';

export const InquirySchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email format").min(1, "Email is required"),
  message: z.string().min(1, "Message is required"),
});

export type InquiryFormData = z.infer<typeof InquirySchema>;

export const LoginSchema = z.object({
  user_email: z.string().email("Invalid email format").min(1, "Email is required"),
  user_password: z.string().min(1, "Password is required")
})

export type LoginFormData = z.infer<typeof LoginSchema>;

// Validation schema for book data
export const BookSchema = z.object({
  book_title: z.string().min(1, "Title is required"), 
  book_description: z.string().min(1, "Description is required"),
  genre: z.string().min(1, "Description is required"),
  author: z.string().min(1, "Description is required"),
});

export type BookFormData = z.infer<typeof BookSchema>;
