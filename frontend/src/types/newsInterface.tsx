export interface News {
    news_id: number;
    news_title: string;
    news_content: string;
    news_date: Date;
    news_image: File | string; 
}
export interface NewsArrProps {
    data: News[];
}
  