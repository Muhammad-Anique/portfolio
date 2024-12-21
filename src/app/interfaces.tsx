export interface Project {
  id: number;
  created_at: string;
  projectTitle: string;
  projectFeatureImage: string;
  projectFeatureAlt: string;
  projectExcerpt: string;
  projectBody: ProjectBody; // Reference to the new detailed structure
  slug: string;
  projectStack: string[];
}

export interface Link {
  icon: string;
  link: string;
  linkName: string;
}

export interface Block {
  body: {
    content?: string;
    type?: string;
    noCols?: number;
    elements?: string[];
    stack?: StackCard[];
    src?: string;
    alt?: string;
    code?: string;
    language?: string;
  };
  blockType:
    | "heading"
    | "paragraph"
    | "list"
    | "stack-cards"
    | "laptop-ss"
    | "codeblock"
    | "mobile-ss";
}

export interface StackCard {
  title: string;
  technologies: string[];
}

export interface ProjectBody {
  id: string;
  slug: string;
  from: string;
  till: string;
  tags: string[];
  links: Link[];
  stack: string;
  title: string;
  blocks: Block[];
  category: string;
  extraDesc: string;
  cover_image: string;
  designation: string;
  company: string;
  devType: string;
  reading_time: number;
  seo_keywords: string[];
  date_published: string;
  meta_description: string;
}
