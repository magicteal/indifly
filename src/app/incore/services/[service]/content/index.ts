/**
 * Central export for all service content
 * Provides type-safe content access for all services (excluding 'incore' which reuses another set)
 */

import type { ContentfulService } from "../../../../../hooks/useServiceTheme";
import { instackContent } from "./instack";
import { insureContent } from "./insure";
import { insurgeContent } from "./insurge";
import { involveContent } from "./involve";
import type { ServiceContent } from "./types";

// Export individual content
export { instackContent, insureContent, insurgeContent, involveContent };

// Export types
export type * from "./types";

// Services that actually have dedicated content files (exclude 'incore')

// Content map for easy access
export const serviceContentMap: Record<ContentfulService, ServiceContent> = {
  insurge: insurgeContent,
  instack: instackContent,
  involve: involveContent,
  insure: insureContent,
};

/**
 * Get content for a specific service.
 */
export function getServiceContent(service: ContentfulService): ServiceContent {
  return serviceContentMap[service] || insurgeContent;
}
