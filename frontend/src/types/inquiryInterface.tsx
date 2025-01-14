export interface Inquiry {
    inquiry_id: number;
    inquiry_name: string;
    inquiry_email: string;
    inquiry_status: string;
    inquiry_data: Date;
    inquiry_message: string;
}
export interface InquiryArrProps {
    data: Inquiry[];
}
  