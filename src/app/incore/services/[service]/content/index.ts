/**
 * Central export for all service content
 * Provides type-safe content access for all services
 */

import type { ServiceType } from "../hooks/useServiceTheme";
import { instackContent } from "./instack";
import { insureContent } from "./insure";
import { insurgeContent } from "./insurge";
import { involveContent } from "./involve";
import type { ServiceContent } from "./types";

// Export individual content
export { instackContent, insureContent, insurgeContent, involveContent };

// Export types
export type * from "./types";

// Content map for easy access
export const serviceContentMap: Record<ServiceType, ServiceContent> = {
  insurge: insurgeContent,
  instack: instackContent,
  involve: involveContent,
  insure: insureContent,
};

/**
 * Get content for a specific service
 * @param service - The service name
 * @returns ServiceContent object
 */
export function getServiceContent(service: ServiceType): ServiceContent {
  return serviceContentMap[service] || insurgeContent;
}
