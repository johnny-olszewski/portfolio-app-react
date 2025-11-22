import type { HeaderLink } from "./types";
import { features } from "@/config/features";

const allLinks: HeaderLink[] = [
  {
    href: "/",
    label: "Portfolio",
  },
  {
    href: "/blog",
    label: "Blog",
  },
];

// Filter links based on feature flags
export const HEADER_LINKS: HeaderLink[] = allLinks.filter((link) => {
  // Always show Portfolio
  if (link.href === "/") return true;
  // Show Blog only if feature is enabled
  if (link.href === "/blog") return features.blog;
  return true;
});
