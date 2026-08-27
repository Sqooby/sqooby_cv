import * as React from 'react';

/**
 * A single piece of work in the grid: media well, title, summary, tags, year.
 * @startingPoint section="Portfolio" subtitle="Work-grid tile with media, tags and year" viewport="700x420"
 */
export interface ProjectCardProps {
  title?: string;
  summary?: string;
  tags?: string[];
  year?: string | number;
  /** Image URL; omitted shows the gradient placeholder. */
  image?: string;
  /** Placeholder gradient. @default "blue" */
  palette?: 'blue' | 'mint' | 'lilac' | 'sunset' | 'paper';
  href?: string;
  /** lg widens the media to 16:10 and enlarges the title. @default "md" */
  size?: 'md' | 'lg';
  onClick?: (e: React.MouseEvent) => void;
  style?: React.CSSProperties;
}
export declare function ProjectCard(props: ProjectCardProps): JSX.Element;
