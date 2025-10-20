/**
 * Central export for all service content
 * Provides type-safe content access for all services (excluding 'incore' which reuses another set)
 */
import { instackContent } from "./instack";
import { insureContent } from "./insure";
import { insurgeContent } from "./insurge";
import { involveContent } from "./involve";
import type { ServiceContent } from "./types";

// Re-export all content and types
export type * from "./types";
export { instackContent, insureContent, insurgeContent, involveContent };

export const serviceKeys = ["insurge", "instack", "involve", "insure"] as const;
export type ServiceKey = (typeof serviceKeys)[number];

export const serviceContentMap: Record<ServiceKey, ServiceContent> = {
  insurge: insurgeContent,
  instack: instackContent,
  involve: involveContent,
  insure: insureContent,
};

/**
 * Get content for a specific service.
 */
export function getServiceContent(service: ServiceKey): ServiceContent {
  return serviceContentMap[service] || insurgeContent;
}

export function isServiceKey(v: string): v is ServiceKey {
  return v in serviceContentMap;
}
