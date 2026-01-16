export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  url?: string;
}

export interface ExperienceItem {
  id: string;
  period: string;
  role: string;
  company: string;
  description: string;
  workType?: string;
  logo?: string;
}

export interface EducationItem {
  id: string;
  period: string;
  institution: string;
  degree: string;
  description?: string;
  logo?: string;
}

export interface Publication {
  id: string;
  title: string;
  venue: string;
  year: string;
  draft?: boolean;
}
