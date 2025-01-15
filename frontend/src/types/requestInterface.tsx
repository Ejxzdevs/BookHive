import { Book } from './bookInterface'
export interface Request extends Book {
    request_id: number
    book_id: number;
    fullname: string;
    request_email: string;
    phone_number: string;
    request_date: Date;
    request_message : string;
    request_status: string;
}
export interface RequestArrProps {
    data: Request[];
}
  