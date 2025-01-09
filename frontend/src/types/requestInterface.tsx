export interface Request {
    request_id: number
    book_id: number;
    fullname: string;
    request_email: string;
    phone_number: string;
    request_date: Date;
    request_message : string;
}
export interface RequestArrProps {
    data: Request[];
}
  