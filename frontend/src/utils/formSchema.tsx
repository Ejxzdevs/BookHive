import z from 'zod';

// SCHEMA FOR INQUIRY
export const InquirySchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email format").min(1, "Email is required"),
  message: z.string().min(1, "Message is required"),
});

export type InquiryFormData = z.infer<typeof InquirySchema>;

// SCHEMA FOR USER
export const LoginSchema = z.object({
  user_email: z.string().email("Invalid email format").min(1, "Email is required"),
  user_password: z.string().min(1, "Password is required")
})

export type LoginFormData = z.infer<typeof LoginSchema>;

// SCHEMA FOR BOOK
export const BookSchema = z.object({
  id: z.number().optional(), 
  book_title: z.string().min(1, "Title is required"), 
  book_description: z.string().min(1, "Description is required"),
  genre: z.string().min(1, "Description is required"),
  author: z.string().min(1, "Description is required"),
});

export type BookFormData = z.infer<typeof BookSchema>;

// SCHEMA FOR REQUEST
export const RequestSchema = z.object({
  book_id: z.string().min(1, "Book ID must be a positive integer"),
  fullname: z.string().min(1, "Fullname is required"), 
  request_email: z.string().min(1, "Email is required"),
  phone_number: z.string().min(1, "Phone is required"),
  request_message: z.string().optional(),
});

export type RequestFormData = z.infer<typeof RequestSchema>;

// SCHEMA FOR NEWS
export const NewsSchema = z.object({
  book_id: z.string().min(1, "Book ID must be a positive integer"),
  fullname: z.string().min(1, "Fullname is required"), 
  request_email: z.string().min(1, "Email is required"),
  phone_number: z.string().min(1, "Phone is required"),
  request_message: z.string().optional(),
});

export type NewsFormData = z.infer<typeof NewsSchema>;
