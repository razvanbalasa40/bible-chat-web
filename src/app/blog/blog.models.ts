export class BlogPost {
  id?: string;
  title?: string;
  author?: {
    name: string;
    url: string;
  };
  slug?: string;
  tags?: string[];
  metaTitle?: string;
  metaDescription?: string;
  relatedPosts?: string[];
  topImage?: string;
  boldContent?: string;
  content?: string;
  paragraphs?: BlogPostParagraph[];
}

export class BlogPostParagraph {
  title?: string;
  content?: string;
  subparagraphs?: {
    title: string;
    content: string;
  }[];
}
