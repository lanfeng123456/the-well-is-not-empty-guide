export const SITE_NAME = "The Well Is Not Empty Guide";
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || "").replace(/\/$/, "");
export const REVIEW_DATE = "September 8, 2026";
export const STEAM_URL = "https://store.steampowered.com/app/4505150/THE_WELL_IS_NOT_EMPTY/";

export const routes = [
  { slug: "walkthrough", label: "Walkthrough" },
  { slug: "village-before-the-well", label: "Village" },
  { slug: "prison-walkthrough", label: "Prison" },
  { slug: "storage-surface-walkthrough", label: "Facility" },
  { slug: "battery-charge-station-puzzle", label: "Battery Puzzle" },
  { slug: "nursery-julian-walkthrough", label: "Nursery" },
  { slug: "finale-ending-explained", label: "Ending" },
  { slug: "controls", label: "Controls" },
  { slug: "achievements", label: "Achievements" },
  { slug: "keys-and-progression-items", label: "Items" },
] as const;
