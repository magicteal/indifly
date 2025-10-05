/**
 * Custom hook for accessing service content
 * Automatically reads the service param and returns the corresponding content
 */

"use client";

import { useParams } from "next/navigation";
import type { ContentfulService } from "../../../../../hooks/useServiceTheme";
import { getServiceContent } from "../content";
import type { ServiceContent } from "../content/types";

/**
 * Hook to get content for the current service route
 * @returns ServiceContent object with all page content
 */
export function useServiceContent(): ServiceContent {
  const params = useParams<{ service?: string }>();
  const service = params?.service;

  const normalizedService = Array.isArray(service) ? service[0] : service;
  const serviceKey = (normalizedService as ContentfulService) || "insurge";

  return getServiceContent(serviceKey);
}
