export const NAV_LIST = {
  HOME: "HOME",
  KNOWLEDGE: "KNOWLEDGE",
  BADGE: "BADGE",
  MY_PAGE: "MY_PAGE",
} as const;

export const NAV_URL_LIST = {
  [NAV_LIST.HOME]: "/",
  [NAV_LIST.KNOWLEDGE]: "/knowledge",
  [NAV_LIST.BADGE]: "/badge",
  [NAV_LIST.MY_PAGE]: "/myPage",
} as const;
