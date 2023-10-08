import { ArticleSnDTO, BlogSnDTO, ReportSnDTO } from '../../dtos';
import { Article, Report, Blog } from '../../models';

export function mapArticleSnToArticle(articleSn: ArticleSnDTO): Article {
  return mapNewsSnToNews(articleSn);
}

export function mapReportSnToReport(reportSn: ReportSnDTO): Report {
  return mapNewsSnToNews(reportSn);
}

export function mapBlogSnToBlog(blogSn: BlogSnDTO): Blog {
  return mapNewsSnToNews(blogSn);
}

function mapNewsSnToNews(
  newsSn: ArticleSnDTO | ReportSnDTO | BlogSnDTO,
): Article | Report | Blog {
  return {
    id: newsSn.id.toString(),
    title: newsSn.title,
    url: newsSn.url,
    image: newsSn.image_url,
    summary: newsSn.summary,
    publishedAt: newsSn.published_at,
  };
}
