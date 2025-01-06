export interface Book {
    book_id: number;
    book_title: string;
    genre: string;
    author: string;
    book_description: string;
    book_release: Date;
    image_url: File | string;
}
  
export interface FormProps {
    data: Book[];
}
  