"use client";

import Script from "next/script";
import { useCallback, useEffect } from "react";

const ZOHO_EMBED_STYLESHEET_ID = "zoho-recruit-embed-css";
const ZOHO_CUSTOM_STYLE_ID = "zoho-recruit-embed-custom-style";

declare global {
  interface Window {
    rec_embed_js?: {
      load: (options: {
        widget_id: string;
        page_name: string;
        source: string;
        site: string;
        brand_color: string;
        empty_job_msg: string;
      }) => void;
    };
  }
}

type ZohoRecruitEmbedProps = {
  brandColor?: string;
};

const DEFAULT_BRAND_COLOR = "#F26926";

export function ZohoRecruitEmbed({ brandColor = DEFAULT_BRAND_COLOR }: ZohoRecruitEmbedProps) {
  useEffect(() => {
    if (typeof document === "undefined") return;

    if (!document.getElementById(ZOHO_EMBED_STYLESHEET_ID)) {
      const link = document.createElement("link");
      link.id = ZOHO_EMBED_STYLESHEET_ID;
      link.rel = "stylesheet";
      link.href = "https://static.zohocdn.com/recruit/embed_careers_site/css/v1.1/embed_jobs.css";
      link.type = "text/css";
      document.head.appendChild(link);
    }
  }, []);

  useEffect(() => {
    if (typeof document === "undefined") return;

    const css = `
      .embed_jobs_head .jobs_apply_btn,
      .embed_jobs_head .jobs_apply_button,
      .embed_jobs_head .embed_jobs_applybtn,
      .embed_jobs_head .embed_jobs_applybtn:hover,
      .embed_jobs_head .embed_jobs_applybtn:focus,
      .embed_jobs_head .jobs_apply_btn:hover,
      .embed_jobs_head .jobs_apply_btn:focus {
        background-color: ${brandColor} !important;
        border-color: ${brandColor} !important;
        color: #ffffff !important;
      }

      .embed_jobs_head .jobs_apply_btn:hover,
      .embed_jobs_head .jobs_apply_btn:focus {
        filter: brightness(0.9);
      }

      .embed_jobs_head .job_listing_head,
      .embed_jobs_head .job_listing_head *:not(button),
      .embed_jobs_head .jobs_head_text,
      .embed_jobs_head .jobs_location_text,
      .embed_jobs_head .jobs_category_text,
      .embed_jobs_head .jobs_department_text,
      .embed_jobs_head .embed_jobs_title,
      .embed_jobs_head .embed_jobs_title * {
        color: ${brandColor} !important;
      }

      .embed_jobs_head .jobs_filter_option input[type="checkbox"]:checked + label:before,
      .embed_jobs_head .jobs_filter_option input[type="radio"]:checked + label:before,
      #rec_job_listing_div .jobs_filter_option input[type="checkbox"]:checked + label:before,
      #rec_job_listing_div .jobs_filter_option input[type="radio"]:checked + label:before {
        background-color: ${brandColor} !important;
        border-color: ${brandColor} !important;
      }

      #rec_job_listing_div a,
      #rec_job_listing_div a:hover,
      #rec_job_listing_div a:focus {
        color: ${brandColor} !important;
      }

      #rec_job_listing_div button,
      #rec_job_listing_div button:hover,
      #rec_job_listing_div button:focus {
        background-color: ${brandColor} !important;
        border-color: ${brandColor} !important;
      }

      .embed_jobs_head,
      .embed_jobs_head .embed_jobs_head2,
      .embed_jobs_head .embed_jobs_head3,
      #rec_job_listing_div,
      #rec_job_listing_div .job_openings_list,
      #rec_job_listing_div .job_openings_inner {
        background: transparent !important;
      }

      .embed_jobs_head,
      #rec_job_listing_div .job_openings_list {
        border: none !important;
        box-shadow: none !important;
      }
    `;

    let styleEl = document.getElementById(ZOHO_CUSTOM_STYLE_ID) as HTMLStyleElement | null;
    if (!styleEl) {
      styleEl = document.createElement("style");
      styleEl.id = ZOHO_CUSTOM_STYLE_ID;
      document.head.appendChild(styleEl);
    }

    styleEl.innerHTML = css;
  }, [brandColor]);

  const loadWidget = useCallback(() => {
    window.rec_embed_js?.load({
      widget_id: "rec_job_listing_div",
      page_name: "Careers",
      source: "CareerSite",
      site: "https://indiflyventures.zohorecruit.in",
      brand_color: brandColor,
      empty_job_msg: "No current Openings",
    });
  }, [brandColor]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.rec_embed_js) {
      loadWidget();
    }
  }, [loadWidget]);

  return (
    <div className="w-full">
      <div className="relative overflow-hidden rounded-3xl border border-[#F26926]/25 bg-white/80  backdrop-blur-3xl px-4 py-8 sm:px-8 sm:py-10">
        <Script
          src="https://static.zohocdn.com/recruit/embed_careers_site/javascript/v1.1/embed_jobs.js"
          strategy="afterInteractive"
          onLoad={loadWidget}
        />
        <div className="embed_jobs_head embed_jobs_with_style_3">
          <div className="embed_jobs_head2">
            <div className="embed_jobs_head3">
              <div id="rec_job_listing_div" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
