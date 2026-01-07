export interface ProjectStatsData {
  components: string;
  interactions: string;
  members: string;
}

export interface ProjectLinksData {
  frontendUrl: string;
  backendUrl: string;
}

export interface ProjectSummary {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  route: string;
  resume: string;
  badges: string[];
  keywords: string[];
  stats: ProjectStatsData;
  links: ProjectLinksData;
  backgroundImage: string;
  mainImage: string;
}

export interface TooltipData {
  id: number;
  top: string;
  left: string;
  content: string;
}

export interface GalleryItem {
  id: number;
  src: string;
  alt: string;
  tooltips: TooltipData[];
}

export interface Journey{
    id: string;
    title: string;
    description: string;
    date: string;
    institution: string;
    image: string;
    activity: string[];
}