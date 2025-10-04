/**
 * Type definitions for service page content
 * Ensures all service content files have consistent structure
 */

export interface ServiceContent {
  hero1: {
    text: [string, string, string]; // [service name, title line 1, title line 2]
    button: string;
  };
  ourApproach: {
    description: [string, string]; // Array of 2 description paragraphs
    steps: ApproachStep[];
  };
  whyItMatters: {
    description: string;
    challenges: Challenge[];
    tagline: string;
  };
  coreOfferings: {
    offerings: Offering[];
    tagline: string;
  };
}

export interface ApproachStep {
  title: string;
  description: string;
}

export interface Challenge {
  title: string;
  description: string;
}

export interface Offering {
  name: string;
  description: string;
}
