export interface ReportSnDTO {
  id: number;
  title: string;
  url: string;
  image_url: string;
  news_title: string;
  summary: string;
  published_at: string;
  updated_at: string;
  featured?: boolean;
}
